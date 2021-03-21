/*
 File: bar_actions.js
 Author: TODO: add names
 this js document contains bar functions from bartender
 */

function decline_order() {

    const values = {
        name: get_current_order(),
        number: parseInt(get_current_order().match(/\d+/)[0]),
        container: JSON.parse(localStorage.getItem(get_current_order())),
        execute: function () {
            // Remove JSON object from from both storage and list
            localStorage.removeItem(this.name);
            for (let o in pending_orders) {
                if (pending_orders[o] == this.number) pending_orders.splice(o, 1);
            }
            // TODO: refresh left window
            localStorage.setItem("pending_orders" ,JSON.stringify(pending_orders));
            clear_menu_order_body();
            update_bar_order_list()
            $("#decline_order_button").css("display", "none");
            $("#accept_order_button").css("display", "none");

        },
        unexecute: function () {
            let order_json = JSON.stringify(this.container);
            localStorage.setItem(this.name, order_json);
            pending_orders.push(this.number);
            localStorage.setItem("pending_orders" ,JSON.stringify(pending_orders));
            // TODO: refresh left window
            update_bar_order_list()
            clear_menu_order_body();
        },
        reexecute: function () {
            // Remove JSON object from from both storage and list
            localStorage.removeItem(this.name);
            for (let o in pending_orders) {
                if (pending_orders[o] == this.number) pending_orders.splice(o, 1);
            }
            localStorage.setItem("pending_orders" ,JSON.stringify(pending_orders));
            // TODO: refresh left window
            update_bar_order_list()
            clear_menu_order_body();
            $("#decline_order_button").css("display", "none");
            $("#accept_order_button").css("display", "none");
        }
    };
    return values;
}