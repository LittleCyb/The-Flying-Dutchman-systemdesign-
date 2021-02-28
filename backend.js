/*
 File: backend.js
 Author: TODO: add names
 this js document contains the backend
 */

/* DATA STRUCTURES */

let stack_undo = [];
let stack_redo = [];

// Class/Prototype for ordered objects
function Order_item(id) {
    this.id = id;
    this.amount = 1;
}

/* Order system */

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

/**
 *	find_item_in_order
 *	@desc find item object in order
 *  @order an order-list from a table
 *  @item item id
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