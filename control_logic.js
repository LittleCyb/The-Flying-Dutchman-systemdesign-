/*
 File: main.js
 Author: Victor Hwasser, Gideon Landeman, Simon Jaklovsky
 this js document contains the control logic
*/

/*
 *	change_language_control
 *	@desc updates language
 */
 function change_language_control() {
 	change_language();
 	update_view();
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
 }


 function allow_drop(ev) {
 	ev.preventDefault();
 }

 function set_order_id() {
 	return ++order_id;
}
