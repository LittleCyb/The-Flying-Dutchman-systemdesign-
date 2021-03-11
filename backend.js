/*
 File: backend.js
 Author: TODO: add names
 this js document contains the backend
 */

/* DATA STRUCTURES */

let stack_undo = [];
let stack_redo = [];

let current_table_number; // represents the current table number
let order_number = 0;
let pending_orders = [];

// Class/Prototype for ordered objects
function Order_item(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = parseFloat(price);
    this.amount = 1;
}

/**
 * @desc Class/Prototype for sent order objects
 * @param items - list of order items
 * @param name - name of buyer, name of VIP-member or company (table)
 * @param credits - whether customer are going to buy in bar or not (VIP-exclusive)
 * @constructor Order_sent
 */
function Order_sent(items, name, number) {
    this.table = current_table_number;
    this.number = get_new_order_number();
    this.name = name;
    this.items = items;
}

/* Order system */
/**
 * get_new_order_number
 * @desc gets the next free order number
 * @returns an order number
 * INVARIANT: max number of orders: 50
 */

// Returns a order number for bartender
function get_new_order_number() {
    while (localStorage.getItem("order" + order_number) != null) {
        order_number++;
    }
    if (order_number > 50) {
        return 50;
    }
    else {
        return order_number;
    }
}

/**
 *	action_exe
 *	@desc executes an action
 *	@fun function to call
 */
function action_exe(fun) {
    fun.execute();
    stack_undo.push(fun);
    stack_redo = [];
};

/**
 *	action_undo
 *	@desc undoes an action
 */
function action_undo() {
    if (stack_undo.length > 0) {
        let action = stack_undo.pop();
        action.unexecute();
        stack_redo.push(action);
    }
    else {
        // TODO: Maybe some place on site to view program messages?
        console.log("Nothing to undo!");
    }
}

/**
 *	action_redo
 *	@desc redoes an action
 */
function action_redo() {
    if (stack_redo.length > 0) {
        let action = stack_redo.pop();
        action.reexecute();
        stack_undo.push(action);
    }
    else {
        // TODO: Maybe some place on site to view program messages?
        console.log("Nothing to redo!");
    }
}


/* END OF FILE */
