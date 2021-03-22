/*
 File: bar_actions.js
 Author: TODO: add names
 this js document contains bar functions from bartender
 */

/**
 *	accept_order
 *	@desc Decline order, removing it from list of pending orders
 */
function decline_order() {

    const values = {
        name: get_current_order(),
        number: parseInt(get_current_order().match(/\d+/)[0]),
        container: JSON.parse(localStorage.getItem(get_current_order())),
        execute: function () {
            // Remove JSON object from from both storage and list
            localStorage.removeItem(this.name);
            // Remove order from list of pending_orders
            for (let o in pending_orders) {
                if (pending_orders[o] == this.number) pending_orders.splice(o, 1);
            }
            localStorage.setItem("pending_orders" ,JSON.stringify(pending_orders));
            // Update view
            clear_menu_order_body();
            update_bar_order_list()
            // Since order is removed from selection, its buttons should be removed
            $("#decline_order_button").css("display", "none");
            $("#accept_order_button").css("display", "none");

        },
        unexecute: function () {
            // Put order back, both JSON file and entry in pending_orders list
            let order_json = JSON.stringify(this.container);
            localStorage.setItem(this.name, order_json);
            pending_orders.push(this.number);
            localStorage.setItem("pending_orders" ,JSON.stringify(pending_orders));
            // Update view
            update_bar_order_list()
            clear_menu_order_body();
        },
        reexecute: function () {
            // Remove JSON object from from both storage and list
            localStorage.removeItem(this.name);
            // Remove order from list of pending_orders
            for (let o in pending_orders) {
                if (pending_orders[o] == this.number) pending_orders.splice(o, 1);
            }
            localStorage.setItem("pending_orders" ,JSON.stringify(pending_orders));
            // Update view
            update_bar_order_list()
            clear_menu_order_body();
            // Since order is removed from selection, its buttons should be removed
            $("#decline_order_button").css("display", "none");
            $("#accept_order_button").css("display", "none");
        }
    };
    return values;
}

/**
 *	accept_order
 *	@desc Accept order, removing it from list of pending orders and withdrawing amount
 */
function accept_order() {

    const values = {
        name: get_current_order(),
        number: parseInt(get_current_order().match(/\d+/)[0]),
        container: JSON.parse(localStorage.getItem(get_current_order())),
        execute: function () {
            // Iterate all items, removing its amount
            var list_of_items = this.container.items;
            for (let i = 0; i < list_of_items.length; i++) {
                var item = list_of_items[i];
                var new_amount = change_drink_amount_from_id(item.id, -1 * item.amount);
                if (new_amount <= 5) $("#" + item.id).css("background-color", "rgba(255, 0, 0, 0.4");
            }
            // Remove JSON object from from both storage and list
            localStorage.removeItem(this.name);
            // Remove order from list of pending_orders
            for (let o in pending_orders) {
                if (pending_orders[o] == this.number) pending_orders.splice(o, 1);
            }
            localStorage.setItem("pending_orders" ,JSON.stringify(pending_orders));
            // Update view
            clear_menu_order_body();
            update_bar_order_list()
            // Since order is removed from selection, its buttons should be removed
            $("#decline_order_button").css("display", "none");
            $("#accept_order_button").css("display", "none");

        },
        unexecute: function () {
            // Iterate all items, returning its amount
            var list_of_items = this.container.items;
            for (let i = 0; i < list_of_items.length; i++) {
                var item = list_of_items[i];
                var new_amount = change_drink_amount_from_id(item.id, item.amount);
                if (new_amount > 5) $("#" + item.id).css("background-color", "rgba(255, 255, 255, 0.4");
            }
            // Put order back, both JSON file and entry in pending_orders list
            let order_json = JSON.stringify(this.container);
            localStorage.setItem(this.name, order_json);
            pending_orders.push(this.number);
            localStorage.setItem("pending_orders" ,JSON.stringify(pending_orders));
            // Update view
            update_bar_order_list()
            clear_menu_order_body();
        },
        reexecute: function () {
            // Iterate all items, removing its amount
            var list_of_items = this.container.items;
            for (let i = 0; i < list_of_items.length; i++) {
                var item = list_of_items[i];
                var new_amount = change_drink_amount_from_id(item.id, -1 * item.amount);
                if (new_amount <= 5) $("#" + item.id).css("background-color", "rgba(255, 0, 0, 0.4");
            }
            // Remove JSON object from from both storage and list
            localStorage.removeItem(this.name);
            // Remove order from list of pending_orders
            for (let o in pending_orders) {
                if (pending_orders[o] == this.number) pending_orders.splice(o, 1);
            }
            localStorage.setItem("pending_orders" ,JSON.stringify(pending_orders));
            // Update view
            update_bar_order_list()
            clear_menu_order_body();
            // Since order is removed from selection, its buttons should be removed
            $("#decline_order_button").css("display", "none");
            $("#accept_order_button").css("display", "none");
        }
    };
    return values;
}

/**
 *	remove_from_bar
 *	@desc removes item from order in the bartender view
 *  @arg which order to remove from
 *	@arg item to remove from order
 */
function remove_from_bar(order, item) {
    const values = {
        order: order,
        item: item,
        execute: function() {
            var order_container = JSON.parse(localStorage.getItem(this.order));
            var order_items = order_container.items;
            //remove item from order
            for (let index = 0; index < order_items.length; index++) {
                if (order_items[index].id == this.item.id) {
                    order_items.splice(index, 1);
                }
            }
            // Store updated item list
            order_container.items = order_items;
            let order_json = JSON.stringify(order_container);
            localStorage.setItem(this.order, order_json);
            update_order_view_item(this.order);
        },
        unexecute: function() {
            var order_container = JSON.parse(localStorage.getItem(this.order));
            var order_items = order_container.items;
            // push item to order
            order_items.push(this.item);
            // Store updated item list
            order_container.items = order_items;
            let order_json = JSON.stringify(order_container);
            localStorage.setItem(this.order, order_json);
            update_order_view_item(this.order);
        },
        reexecute: function() {
            var order_container = JSON.parse(localStorage.getItem(this.order));
            var order_items = order_container.items;
            //remove item from order
            for (let index = 0; index < order_items.length; index++) {
                if (order_items[index].id == this.item.id) {
                    order_items.splice(index, 1);
                }
            }
            // Store updated item list
            order_container.items = order_items;
            let order_json = JSON.stringify(order_container);
            localStorage.setItem(this.order, order_json);
            update_order_view_item(this.order);
        }
    };
    return values;
}
