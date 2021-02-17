/*
 File: main.js
 Author: TODO: add names
 this js document contains the control logic for the application
 */


 /**
  * load_topbar_language
  * @desc Creates a language topbar
  */
function load_topbar_language() {
	$('body').append('<div id="language_bar"</div>');
	$("#language_bar").append('<img id="language" src="">');
	document.getElementById("language").addEventListener("click", change_language_control);
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
	// Removes the old frame
	if (old_frame) {
		$("#" + old_frame).remove();
	}
	// Adds the new frame
	$('body').append('<div id="login"></div>');
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
 * load_frame_choose
 * @desc Creates a choose table frame
 * @param old_frame Old frame to be removed
 */
function load_frame_choose(old_frame) {
	// Removes the old frame
	if (old_frame) {
		$("#" + old_frame).remove();
	}
	// Adds the new frame
	$('body').append('<div id="choose_screen"></div>');
	$("#choose_screen").append('<img id="logo" src="">');
	// Add tables
	for (i = 1; i <= 9; i++) {
		var table = $('<div class="table"></div>');
		$(table).attr("id", "table_" + i);
		$(table).attr("onclick", 'load_frame_menu("choose_screen")');
		$(table).text("Table " + i)
		$("#choose_screen").append(table);
	}
	// Add bar
	$('#choose_screen').append('<div class="table" id="table_bar"> Bar </div>');
	update_view();
}

/**
 * load_frame_login
 * @desc Creates a menu frame
 * @param old_frame Old frame to be removed
 */
function load_frame_menu(old_frame) {
	// Removes the old frame
	if (old_frame) {
		$("#" + old_frame).remove();
	}
	// Adds the new frame
	$('body').append('<div id="menu"></div>');

	$("#menu").append('<div id="menu_topbar"></div>');
	$("#menu_topbar").append('<span id="login_vip"></span>');

	$("#menu").append('<img id="logo" src="logo.png">');

	$("#menu").append('<div id="menu_bar"></div>');

	$("#menu_bar").append('<div class="menu_bar_item" id="menu_bar_beers"></div>');
	$("#menu_bar_beers").attr("onclick", 'display_menu_items("beers")');

	$("#menu_bar").append('<div class="menu_bar_item" id="menu_bar_cocktails"></div>');
	$("#menu_bar_cocktails").attr("onclick", 'display_menu_items("cocktails")');

	$("#menu_bar").append('<div class="menu_bar_item" id="menu_bar_wine"></div>');
	$("#menu_bar_wine").attr("onclick", 'display_menu_items("wine")');

	$("#menu_bar").append('<div class="menu_bar_item" id="menu_bar_vip"></div>');
	$("#menu_bar_vip").attr("onclick", 'display_menu_items("vip")');

	$("#menu_bar").append('<div class="menu_bar_item" id="menu_bar_order"></div>');
	$("#menu_bar_order").attr("onclick", 'display_menu_items("order")');

	load_menu_view();
	display_menu_items("beers"); //shows beer by default
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
	update_view();
}



/**
 * load_menu_view
 * @desc loads menu view frame
 */
function load_menu_view() {

	//loads div for menu_view to put items in
	$("#menu").append('<div id="menu_view"></div>');

	$("#menu_view").append('<div id="menu_view_beers"></div>');
	for(idx in db["beers"]) {
		for(const info of beer_info) {
			$("#menu_view_beers").append(get_drink_string("beers", idx, info) +  '<br>');
		}
		$("#menu_view_beers").append('<div class="add_item_button" id="temp_id">+ 1</div>');
		var new_id = get_drink_string("beers", idx, "namn");
		document.getElementById('temp_id').id = new_id;
		document.getElementById(new_id).addEventListener('click', function add() {add_item_to_order(new_id)}, false); //TODO only adds "Praga" beer to orders database

		$("#menu_view_beers").append('<br>');
	}


	$("#menu_view").append('<div id="menu_view_cocktails"></div>');
	for(idx in db["cocktails"]) {
		for(const info of cocktail_info) {
			$("#menu_view_cocktails").append(get_drink_string("cocktails", idx, info) +  '<br>');
		}
		$("#menu_view_cocktails").append('<div class="add_item_button" id="temp_id">+ 1</div>');
		document.getElementById('temp_id').id = get_drink_string("cocktails", idx, "namn");
		$("#menu_view_cocktails").append('<br>');
	}

	$("#menu_view").append('<div id="menu_view_wine"></div>');
	for(idx in db["wine"]) {
		for(const info of wine_info) {
			$("#menu_view_wine").append(get_drink_string("wine", idx, info) +  '<br>');
		}
		$("#menu_view_wine").append('<div class="add_item_button" id="temp_id">+ 1</div>');
		document.getElementById('temp_id').id = get_drink_string("wine", idx, "namn");
		$("#menu_view_wine").append('<br>');
	}

	$("#menu_view").append('<div id="menu_view_vip"></div>');
	for(idx in db["vip"]) {
		for(const info of vip_info) {
			$("#menu_view_vip").append(get_drink_string("vip", idx, info) +  '<br>');
		}
		$("#menu_view_vip").append('<div class="add_item_button" id="temp_id">+ 1</div>');
		document.getElementById('temp_id').id = get_drink_string("beers", idx, "namn");
		$("#menu_view_vip").append('<br>');
	}

	$("#menu_view").append('<div id="menu_view_order"></div>');


	hide_menu_views();
}

/**
*	hide_menu_views
* @desc hides all menu views
*/
function hide_menu_views() {
	for(idx in db) {
		$("#menu_view_" + idx).css("display", "none");
	}
}

/**
*	add_item_to_order
*	@desc adds a an item to the table's order
*	@arg item to add to table's order
*/
function add_item_to_order(item) {
	var order = orders[current_table];
	order.push(item);
}


/**
 * load_frame_manager
 * @desc Creates a manager frame
 * @param old_frame Old frame to be removed
 */
function load_frame_manager(old_frame) {
	// Removes the old frame
	if (old_frame) { //FIXME do we need to add "#" + old_frame to make it a valid statement?
		$("#" + old_frame).remove();
	}

$('body').append('<div id="manager"></div>');
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

/** clear_orders
*	@desc to clear unfinished orders if user refreshes the page/exits page
*/
function clear_orders() {
	orders[current_table] = [];
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
	load_frame_menu(); //FIXME return to load_frame_login()
});



// ===========================================================================
// END OF FILE
// ===========================================================================
