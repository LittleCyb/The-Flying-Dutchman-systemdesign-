/*
 File: order_actions.js
 Author: TODO: add names
 this js document contains all actions related to orders
 */

/**
 *	add_item_to_order
 *	@desc adds a an item to the table's order
 *	@arg item to add to table's order
 */
function add_item_to_order(item) {
    const values = {
        order_table: current_table_number,
        order_id: item,
        execute: function () {
            var order = orders[this.order_table];
            var found_item = find_item_in_order(order, this.order_id)
            // Add item to order if it doesnt exist
            if (!found_item) {
                var new_item = new Order_item(this.order_id);
                order.push(new_item);
            }
            else {
                found_item.amount++;
            }
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
        },
        reexecute: function () {
            var order = orders[this.order_table];
            var found_item = find_item_in_order(order, this.order_id)
            // Add item to order if it doesnt exist
            if (!found_item) {
                var new_item = new Order_item(this.order_id);
                order.push(new_item);
            }
            else {
                found_item.amount++;
            }
        }
    };
    return values;
}

/** clear_orders
 *	@desc to clear unfinished orders if user refreshes the page/exits page
 */
function clear_orders() {
    orders[current_table_number] = [];
}

/* END OF FILE */