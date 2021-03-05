/*
 File: main.js
 Author: TODO: add names
 this js document contains the control logic
 */


 /**
 *	change_language_control
 *	@desc updates language
 */
 function change_language_control() {
 	change_language();
 	update_view();
 }

/**
 * add_block
 * @desc Creates a HTML block
 * @param src which html block to build upon
 * @param tag html tag
 * @param class class attribute
 * @param id id attribute
 */
function add_block(src, tag, _class, id) {
	if (_class != "") _class = 'class=' + _class;
	let html_code = '<' + tag + ' ' + _class + ' id="' + id + '"' + '></' + tag + '>';
	$(src).append(html_code);
}

/**
 * add_image
 * @desc Creates a HTML block
 * @param src which html block to build upon
 * @param alt describtion of image
 * @param id id attribute
 */
function add_image(src, alt, id) {
	let html_code = '<img src="" alt="' + alt + '" id="' + id + '">';
	$(src).append(html_code);
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
 *	hide_menu_views
 * @desc hides all menu views
 */
 function hide_menu_views() {
 	for(idx in db) {
 		$("#menu_view_" + idx).css("display", "none");
 		$("#menu_bar_" + idx).css("background-color", "");
 	}
 	$("#menu_bar_order").css("background-color", "");
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
 	$("#table_number").text(language == "sv" ? "Bord: " + current_table_number : "Table: " + current_table_number);
 }

// TODO: att docu
function order_item_id(item) {
    return item.id;
}
function order_item_name(item) {
    return item.name;
}
function order_item_price(item) {
    return item.price;
}
function order_item_amount(item) {
    return item.amount;
}

 /**
  *	do_action
  *	@desc calls for an action in the backend
  *	@fun function to call
  *  @arg argument for function
  */
 function do_action(fun, arg) {
 	if (fun == 'add') {
 		action_exe(add_item_to_order(arg));
 	}
 	if (fun == 'undo') {
 		action_undo();
 	}
 	if (fun == 'redo') {
 		action_redo();
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
