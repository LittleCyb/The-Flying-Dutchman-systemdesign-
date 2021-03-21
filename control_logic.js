/*
 File: main.js
 Author: TODO: add names
 this js document contains the control logic
*/

function grey_away(id) {
    $('#'+id).css({
	"background-color": "",
	"opacity": "1"
    });
    
}
function grey_out(id) {
    $('#'+id).css({
	"background-color": "#808080",
	"opacity": "0.5"
    });
}

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

 /**
 *	change_language_control
 *	@desc updates language
 */
 function change_language_control() {
 	change_language();
 	update_view();
 }


 /**
  * display_menu_items
  * @desc Displays chosen menu items in menu view frame
  * @arg item type to dislay
  */

function display_menu_items(item) {
 	hide_menu_views();
 	$("#menu_view_" + item).css("display", "block");
 	// Make a button appear active
 	$("#menu_bar_" + item).css("background-color", "#ffb686");

    filter_items();

 	update_view();
 }

 /**
    * filter_items
    * @desc looks at what filters have been applied and updates the menu view
    */
function filter_items() {
    var gluten_free = $("#checkbox_gluten_id").is(":checked");
    var low_tannins = $("#checkbox_low_tannins_id").is(":checked");
    var lactose_free = $("#checkbox_lactose_id").is(":checked");
    var low_alcohol = $("#checkbox_low_alcohol_id").is(":checked");

    for(const key in db) { //got an error here before "'X' is not interable"
        for(drink of db[key]) {
            var artikelid = drink["artikelid"];
            $("#" + artikelid).css("display", "block");
        }
    }

    if(gluten_free) {
        for(const key in db) {
            for(drink of db[key]) {
                if(drink["gluten_free"] == "0") {
                    var artikelid = drink["artikelid"];
                    $("#" + artikelid).css("display", "none");
                }
            }
        }
    }

    if(low_tannins) {
        for(const key in db) {
            for(drink of db[key]) {
                if(drink["tanniner"] > "3") {
                    var artikelid = drink["artikelid"];
                    $("#" + artikelid).css("display", "none");
                }
            }
        }
    }

    if(lactose_free) {
        for(const key in db) {
            for(drink of db[key]) {
                if(drink["lactose_free"] == "0") {
                    var artikelid = drink["artikelid"];
                    $("#" + artikelid).css("display", "none");
                }
            }
        }
    }

    if(low_alcohol) {
        for(const key in db) {
            for(drink of db[key]) {
                const temp = drink["alkoholhalt"];
                var alkoholhalt = temp.slice(0, -1);
                if(parseInt(alkoholhalt) > 4) { //annars kan vi få "10" > "4" == falskt
                    var artikelid = drink["artikelid"];
                    $("#" + artikelid).css("display", "none");
                }
            }
        }
    }

}

 /**
 *	get_country_of_origin
 *	@desc retrieves the country of origin for a given beverage
 *	@arg type of drink from data base
 *	@arg index of the drink in the given "type" category
 */
 function get_country_of_origin(type, index) {
 	return get_drink_string(type, index, "ursprunglandnamn");
 }

 /**
 *	hide_menu_views
 * @desc hides all menu views
 */
 function hide_menu_views() {
 	for(idx in db) {
 		$("#menu_view_" + idx).css("display", "none");
 		$("#menu_bar_" + idx).css("background-color", "");
 	}
 	$("#menu_bar_order").css("background-color", "");

    $("#menu_view_filter").css("display", "none");
    $("#menu_bar_filter").css("background-color", "");
 }

 //updates view with text in Swedish or English
 function update_view() {
 	keys = dict['keys'];
 	for (idx in keys) {
 		key = keys[idx];
 		$("#" + key).text(get_string(key));
 	}
 	pics = dict['pics'];
 	for (idx in pics) {
 		pic = pics[idx];
 		$("#" + pic).attr('src', get_string(pic));
 	}
 	$("#table_number").text(language == "sv" ? "Bord: " + get_current_table_number() : "Table: " + get_current_table_number());
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

// Clears UNDO/REDO history
function clear_history() {
     stack_undo = [];
     stack_redo = [];
}

 /**
  *	do_action
  *	@desc calls for an action in the backend
  *	@fun function to call
  *  @arg argument for function
  */
 function do_action(fun, arg1, arg2) {
 	if (fun == 'add') {
 		action_exe(add_item_to_order(arg1));
 	}
 	if (fun == 'undo') {
 		action_undo();
 	}
 	if (fun == 'redo') {
 		action_redo();
 	}
    if (fun == 'remove') {
        action_exe(remove_item_from_order(arg1, arg2));
    }
    if (fun == 'purchase') {
    	action_exe(send_order_to_bar());
	}
 }

 /* drag-n-drop */
 function drop_ipad(ev) {
 	ev.preventDefault();
 	ev.target.onclick();
 	// Get data from temp drag-buffer, might be used later
 	//var data = ev.dataTransfer.getData("text");
 	//ev.target.appendChild(document.getElementById(data));
 }

 function drag_ipad(ev) {
 	// Move data to temp drag-buffer, might be used later
 	//ev.dataTransfer.setData("text", ev.target.id);
 }

 function allow_drop(ev) {
 	ev.preventDefault();
 }

 // TODO: When an order is done it should have this order id
 function set_order_id() {
 	return ++order_id;
}
