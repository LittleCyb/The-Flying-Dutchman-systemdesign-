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
 	$("#menu_view_orders").css("display", "none");
 	$("#menu_bar_orders").css("background-color", "");

 	$("#menu_bar_order").css("background-color", "");
    $("#menu_view_filter").css("display", "none");
    $("#menu_bar_filter").css("background-color", "");
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
    	send_order_to_bar(arg1);
	}
    // Bar functions
     if (fun == 'decline_order') {
         action_exe(decline_order());
     }
     if (fun == 'accept_order') {
         action_exe(accept_order());
     }
     if (fun == "remove_from_bar") {
         action_exe(remove_from_bar(arg1, arg2));
     }
 }

 function do_choose_bar_order(order) {
     set_current_order(order);
     update_order_view_item(order);
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
