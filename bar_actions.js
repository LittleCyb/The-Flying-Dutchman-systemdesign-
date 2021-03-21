/*
 File: bar_actions.js
 Author: TODO: add names
 this js document contains bar functions from bartender
 */


// Decline order, removing it from list of pending orders
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

// Accept order, removing it from list of pending orders and withdrawing amount
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
                change_drink_amount_from_id(item.id, -1 * item.amount);
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
                change_drink_amount_from_id(item.id, item.amount);
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
                change_drink_amount_from_id(item.id, -1 * item.amount);
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