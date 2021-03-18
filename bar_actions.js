/*
 File: bar_actions.js
 Author: TODO: add names
 this js document contains bar functions from bartender
 */

function bar_order_remove(order) {

    const values = {
        name: order,
        container: JSON.parse(localStorage.getItem(order)),
        execute: function () {
            // Remove JSON object from from both storage and list
            localStorage.removeItem(order);
            for (let o in pending_orders) {
                if (o == this.container.number) pending_orders.slice(o, 1);
            }
            // TODO: refresh left window
            // TODO: clear right window
        },
        unexecute: function () {
            let order_json = JSON.stringify(this.container);
            localStorage.setItem("order" + this.container.number, order_json);
            pending_orders.push(this.container.number);
            // TODO: refresh left window
            // TODO: refresh right window
        },
        reexecute: function () {
            // Remove JSON object from from both storage and list
            localStorage.removeItem(order);
            for (let o in pending_orders) {
                if (o == this.container.number) pending_orders.slice(o, 1);
            }
            // TODO: refresh left window
            // TODO: clear right window
        }
    };
    return values;
}