/*
 File: backend.js
 Author: TODO: add names
 this js document contains the backend
 */

/* DATA STRUCTURES */

let stack_undo = [];
let stack_redo = [];

// Class/Prototype for ordered objects
function Order_item(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
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


/* END OF FILE */
