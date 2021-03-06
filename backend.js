/*
 File: backend.js
 Author: Simon Jaklovksy, Gideon Landeman, Victor Hwasser
 this js document contains the backend
 */

/* DATA STRUCTURES */

let order_id = 0;
let current_order = ""; // name of current order from bar view

// UNDO/REDO stacks
let stack_undo = [];
let stack_redo = [];

let current_table_number; // represents the current table number

let order_number = 0; // Id of current order

let pending_orders = [] // All orders sent to bartender

// Search for local pending_orders file, if it exists it replaces pending_orders
if (localStorage.getItem("pending_orders") != null) {
    pending_orders = JSON.parse(localStorage.getItem("pending_orders"));
}

// Set which order is currently selected
function set_current_order(order) {
    current_order = order;
}

// Get which order is currently selected
function get_current_order() {
    return current_order;
}

/**
 * @desc Class/Prototype for ordered items
 * @param id - product id
 * @param name - name of item
 * @param price - price of item
 * @constructor Order_sent
 */
function Order_item(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = parseFloat(price);
    this.amount = 1;
}

/**
 * @desc Class/Prototype for sent order objects
 * @param items - list of order items
 * @param name - name of buyer, name of VIP-member or company
 * @param number - order_number
 * @param table - which table ordered from
 * @constructor Order_sent
 */
function Order_sent(items, name, number, table) {
    this.table = table;
    this.number = number;
    this.name = name;
    this.items = items;
}

// Clears UNDO/REDO history
function clear_history() {
    stack_undo = [];
    stack_redo = [];
}

/** get_current_table_number
  * @desc retrieves current table number from model
  */

function get_current_table_number() {
    return current_table_number;
}

/** set_current_table_number
  * @desc sets current table number in model
  */

function set_current_table_number(new_table_number) {
    current_table_number = new_table_number;
}

/* Order system */
/**
 * get_new_order_number
 * @desc gets the next free order number
 * @returns an order number
 * INVARIANT: max number of orders: 50
 */

// Returns an order number for bartender
function get_new_order_number() {
    var current_max = 0;
    for (index = 0; index < pending_orders.length; index++) {
        if (pending_orders[index] > current_max) current_max = pending_orders[index];
    }
    order_number = current_max + 1;
    return order_number;
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
        console.log("Nothing to redo!");
    }
}

// Returns name of ordered article id
function order_item_id(item) {
    return item.id;
}
// Returns name of ordered item
function order_item_name(item) {
    return item.name;
}
// Returns price of ordered item
function order_item_price(item) {
    return item.price;
}
// Returns bought amount of ordered item
function order_item_amount(item) {
    return item.amount;
}

/**
 *	update_hidden_view
 *	@desc Updates view depending on if drink is hidden or not
 *      @arg drinkType of the drink
 *      @arg index of drink in given drinkType category
 */
function update_hidden_view(drinkType, index) {
    if (getDrinkHiddenStatus(drinkType, index)) {
        grey_out(get_drink_id(drinkType, index));
    }
}

/**
 *	hide_unhide
 *	@desc Toggles hidden status of drink and adds or removes grey out effect
 *      @arg drinkType of the drink to be toggled
 *      @arg id of the drink to be toggled
 */
function hide_unhide(drinkType, id) {
    let index = db[drinkType].findIndex(element => element.artikelid == id);
    if (!db[drinkType][index].gömd) {
        db[drinkType][index].gömd = true;
        grey_out(id);
    } else {
        db[drinkType][index].gömd = false;
        grey_away(id);
    }
}

/* END OF FILE */
