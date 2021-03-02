/*
 File: main.js
 Author: TODO: add names
 this js document contains the control logic
 */

var current_table_number; // represents the current table number

 /**
  * load_topbar_language
  * @desc Creates a language topbar
  */
function load_topbar_language() {
	$('body').append('<div id="language_bar"</div>');


	/*FIXME (for testing purposes, remove later)*/
	$("#language_bar").append('<div id="login_from_menu">back to login</div>');
	$("#login_from_menu").attr("onclick", 'load_frame_login("menu")');


	$("#language_bar").append('<img id="language" alt="current language" src="">');
	$("#language").attr("onclick", 'change_language_control()');
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
 * load_frame_login
 * @desc Creates a login frame
 * @param old_frame Old frame to be removed
 */
function load_frame_login(old_frame) {
	remove_old_frame(old_frame);

	//niche case when we already have a main_frame and attempt to create another one, eg. in choose screen and want to return to login screen
	$("#main_frame").remove();

	// Adds the new frame
	$('body').append('<div id="main_frame"></div>');
	$("#main_frame").append('<div id="login"></div>');
	$("#login").append('<div id="login_topbar"></div>');
	$("#login_topbar").append('<span id="login_manager"></span>');
	$("#login_manager").attr("onclick", 'load_frame_manager("login")');

	$("#login").append('<img id="logo" src="">');

	$("#login").append('<p id="login_text"></p>');

	$("#login").append('<span id="login_input"></span>');
	$("#login_input").attr("contentEditable", "true");

	$("#login").append('<span id="login_button"></span>');
	$("#login_button").attr("onclick", 'load_frame_choose("login")');
	update_view();
}

/**
 * remove_old_frame(old_frame)
 * @desc removes old frame
 * @param old_frame to remove
 */
function remove_old_frame(old_frame) {
	if (old_frame) {
		$("#" + old_frame).remove();
	}
}

/**
 * load_frame_choose
 * @desc Creates a choose table frame
 * @param old_frame Old frame to be removed
 */
function load_frame_choose(old_frame) {
	remove_old_frame(old_frame);

	// adds new content to main_frame
	$("#main_frame").append('<img id="logo" src="">');
	$("#main_frame").append('<div id="choose_screen"></div>');
	// Welcoming text
	$('#choose_screen').append('<h1 id="choose_welcome"></h1>')
	$('#choose_welcome').text("Please seat yourself at a table");

	// Add tables
	for (i = 1; i <= 9; i++) {
		let table = $('<div class="table"></div>');
		$(table).attr("id", "table_" + i);
		$(table).attr("ondrop","drop_ipad(event)");
		$(table).attr("ondragover","allow_drop(event)");
		let str = "Table " + i
		$(table).text(str);
		$(table).attr("onclick", 'load_frame_menu("choose_screen", this)');
		$("#choose_screen").append(table);
	}
	// Add bar
	$('#choose_screen').append('<div class="table" id="table_bar"> Bar </div>');

	// Add iPad
	$('#choose_screen').append('<canvas id="ipad" width="64" height="96"> Cannot show ipad-canvas</canvas>');
	$('#ipad').attr("draggable", "true");
	$('#ipad').attr("ondragstart", "drag_ipad(event)");

	// Draw ipad
	let ipd = document.getElementById("ipad").getContext("2d");
	ipd.beginPath();
	ipd.fillStyle = "#ebe8eb";
	ipd.fillRect(0,0,64,96);
	ipd.fillStyle = "white";
	ipd.fillRect(4,4,56,80);
	ipd.strokeStyle = "white";
	ipd.arc(32, 90, 3, 0, 2 * Math.PI);
	ipd.stroke();

	update_view();
}

/**
 * load_frame_menu
 * @desc Creates a menu frame
 * @param old_frame Old frame to be removed
 * @param caller The table/bar on which the iPad was dropped
 */
function load_frame_menu(old_frame, caller) {
	remove_old_frame(old_frame);

	// Get number of current table
	current_table_number = caller.id.charAt(6);
	// Adds the new frame
	$("#main_frame").append('<div id="menu"></div>');

	$("#menu").append('<div id="menu_topbar"></div>');
	$("#menu_topbar").append('<span id="login_vip"></span>');

	$("#menu").append('<div id="menu_bar"></div>');

	$("#menu_bar").append('<div class="menu_bar_item" id="menu_bar_beers"></div>');
	$("#menu_bar_beers").attr("onclick", 'display_menu_items("beers")');

	$("#menu_bar").append('<div class="menu_bar_item" id="menu_bar_cocktails"></div>');
	$("#menu_bar_cocktails").attr("onclick", 'display_menu_items("cocktails")');

	$("#menu_bar").append('<div class="menu_bar_item" id="menu_bar_wine"></div>');
	$("#menu_bar_wine").attr("onclick", 'display_menu_items("wine")');

	$("#menu_bar").append('<div class="menu_bar_item" id="menu_bar_vip"></div>');
	$("#menu_bar_vip").attr("onclick", 'display_menu_items("vip")');

	// TODO: Move this to a proper position! :)
	$("#menu").append('<p> ' + 'Table ' + current_table_number + ' </p>');

	load_menu_view();
	display_menu_items("beers"); //shows beer by default


	// TODO: fix some actual buttons for undo/redo
	$("#menu_bar").append('<div id="undo_button"> UNDO </div>');
	document.getElementById('undo_button').addEventListener('click', function add() {do_action('undo', '')}, false);
	$("#menu_bar").append('<div id="redo_button"> REDO </div>');
	document.getElementById('redo_button').addEventListener('click', function add() {do_action("redo", '')}, false);

	load_current_order();

	update_view();
}

/**
 * load_current_order
 * @desc loads the current order for the selected VIP customer (TODO) or current table.
 */

function load_current_order() {
	$("#menu").append('<div id="menu_order"></div>');
}

/**
 * update_order_view
 * @desc updates view of current order
 */
function update_order_view() {
	$("#menu_order").remove();
	$("#menu").append('<div id="menu_order"></div>');

	for(item of orders[current_table_number]) {
		$("#menu_order").append('<p> "' + item + '"</p>');
	} //TODO continue here.
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
	update_view();
}



/**
 * load_menu_view
 * @desc loads menu view frame
 */
function load_menu_view() {

	//loads div for menu_view to put items in
	$("#menu").append('<div id="menu_view"></div>');

	for(const type of menu_types) {
		$("#menu_view").append('<div id="menu_view_' + type + '"></div>');
		for(idx in db[type]) {
			for(const info_point of beverages_info[type]) {
				$("#menu_view_" + type).append(get_drink_string(type, idx, info_point) +  '<br>');
			}
			var country = get_country_of_origin(type, idx);
			var flag_src = get_flag(country);
			$("#menu_view_" + type).append('<img class="menu_flag_icon" src="' + flag_src + '">');
			$("#menu_view_" + type).append('<div class="add_item_button" id="temp_id">+ 1</div>');
			let new_id = get_drink_string(type, idx, "artikelid");
			document.getElementById('temp_id').id = new_id; // VICTOR: Gör vad?
			document.getElementById(new_id).addEventListener('click', function add() {do_action('add', new_id)}, false);

			$("#menu_view" + type).append('<br>');
		}
	}

	hide_menu_views();
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

/**

 * load_frame_manager
 * @desc Creates a manager frame
 * @param old_frame Old frame to be removed
 */
function load_frame_manager(old_frame) {
	remove_old_frame(old_frame);

	// adds new content to main_frame
	$("#main_frame").append('<div id="manager"></div>');
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
}

/** TODO
 *	get_string_drink
 *	@desc returns information about a drink
 *	@drink what kind of dring
 *  @index
 *  @key
 */
function get_drink_string(drink, index, key) {
	return db[drink][index][key];
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
	load_frame_menu("choose_screen", ev.target)
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

/** clear_orders
 *	@desc to clear unfinished orders if user refreshes the page/exits page
 */
function clear_orders() {
	orders[current_table_number] = [];
}

// Control logic and should those be in this file
function get_drink_string(drink, index, key) {
return db[drink][index][key];
}

// Control logic and should those be in this file
function get_flag(country) {
return flags[country];
}


// ===========================================================================
// INITIALIZATION OF HTML AND MODEL DATA.
// ===========================================================================
// This construct ensures that the document is finished loading before
// the code below is executed. This is essentially the initialisation
// of the HTML-page, which should be completely empty of content in the
// program before start.
//
// The initialisation data could just as well have been fetched from a
// file or other storage.
//
// Note that we make use of two dictionaries, the storage for constant values,
// and a dictionary for strings. Both these will be useful later.
//

$(document).ready(function() {
	clear_orders(); //so a new instance gets doesn't have old order information. Might remove if we add functionality with BAR menu being able to delete orders. //FIXME in that case
	load_topbar_language();
	load_frame_login(); //FIXME return to load_frame_login()
});

// ===========================================================================
// END OF FILE
// ===========================================================================
