
/*
 File: order_actions.js
 Author: Simon Jaklovksy, Gideon Landeman, Victor Hwasser
 this js document contains order functions from customers
 */

/**
 *	send_order_to_bar
 *  @param name - Name of VIP member or "company"
 *	@desc adds a an item to the table's order
 */
function send_order_to_bar(name) {
    let number = get_new_order_number();
    let table = current_table_number;
    // Store order in JSON
    let order_json = JSON.stringify(new Order_sent(orders[table], name, number, table));
    localStorage.setItem("order" + number, order_json);
    orders[table] = []; // Clear order at current table
    // Push order to list and store in JSON
    pending_orders.push(number);
    localStorage.setItem("pending_orders" ,JSON.stringify(pending_orders));
    update_order_view();
    clear_history() // Clear UNDO/REDO history
}

/**
 *	add_item_to_order
 *	@desc adds a an item to the table's order
 *	@arg item to add to table's order
 */
function add_item_to_order(item) {
    const values = {
        order_table: get_current_table_number(),
        order_id: item.artikelid,
        order_name: item.namn,
        order_price: item.prisinklmoms,
        execute: function () {
            var order = orders[this.order_table];
            var found_item = find_item_in_order(order, this.order_id)
            // Add item to order if it doesnt exist
            if (!found_item) {
                var new_item = new Order_item(this.order_id, this.order_name, this.order_price);
                order.push(new_item);
            }
            else {
                found_item.amount++;
            }
            update_order_view();
        },
        unexecute: function () {
            var order = orders[this.order_table];
            var found_item = find_item_in_order(order, this.order_id)
            // Add item to order if it doesnt exist
            if (!found_item) {
                console.log("ERROR: tries to undo add an item that doesnt exist!")
            }
            else {
                if (found_item.amount > 1) {
                    found_item.amount--;
                }
                else {
                    // If there is only 1 amount of item, find index of array and remove
                    var index = order.indexOf(found_item);
                    if (index > -1) {
                        order.splice(index, 1);
                    }
                }
            }
            update_order_view();
        },
        reexecute: function () {
            var order = orders[this.order_table];
            var found_item = find_item_in_order(order, this.order_id)
            // Add item to order if it doesnt exist
            if (!found_item) {
                var new_item = new Order_item(this.order_id, this.order_name, this.order_price);
                order.push(new_item);
            }
            else {
                found_item.amount++;
            }
            update_order_view();
        }
    };
    return values;
}

/**
 *	remove_item_from_order
 *	@desc removes item from the table's order
 *	@arg item to remove from table's order
 */
 function remove_item_from_order(item_id, old_amount) {
     const values = {
         order_table: get_current_table_number(),
         execute: function() {
             var order = orders[this.order_table];
             var found_item = find_item_in_order(order, item_id);

             if (!found_item) {
                 console.log("ERROR: tries to remove an item that doesnt exist!");
             } else {
                 //remove item from order
                 var index = order.indexOf(found_item);
                 if (index > -1) {
                     order.splice(index, 1);
                 }
             }
             update_order_view();
         },
         unexecute: function() {
             var order = orders[this.order_table];
             var found_item = find_item_in_order(order, item_id);

             if(!found_item) {
                 var new_item = new Order_item(item_id, get_drink_name_from_id(item_id), get_drink_price_from_id(item_id));
                 new_item.amount = old_amount;
                 order.push(new_item);
             }

             else {
                 found_item.amount += old_amount;
             }
             update_order_view();
         },
         reexecute: function() {
             var order = orders[this.order_table];
             var found_item = find_item_in_order(order, item_id);

             if (!found_item) {
                 console.log("ERROR: tries to remove an item that doesnt exist!")
             } else {
                 //remove item from order
                 var index = order.indexOf(found_item);
                 if (index > -1) {
                     order.splice(index, 1);
                 }
             }
             update_order_view();
         }
     };
     return values;
 }

/* AUXILIARY FUNCTIONS */

/**
 *	find_item_in_order
 *	@desc find item object in order
 *  @arg order an order-list from a table
 *  @arg item item id
 */
function find_item_in_order(order, item) {
    for (i in order) {
        if (order[i].id == item) {
            return order[i];
        }
    }
    return null;
}

/* END OF FILE */
