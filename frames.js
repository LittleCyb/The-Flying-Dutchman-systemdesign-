/*
 File: frames.js
 Author: TODO: add names
 This js document contains the functions associated with generating frames for the application.
 */

 /**
  * load_topbar_language
  * @desc Creates a language topbar
  */
function load_topbar_language() {
	add_block("body","div","","language_bar");

    /*FIXME (for testing purposes, remove later)*/
    $("#language_bar").append('<div id="login_from_menu">back to login</div>');
    $("#login_from_menu").attr("onclick", 'load_frame_login("menu")');

   	add_image("#language_bar", "Current language", "language");
   	$("#language").attr("onclick", 'change_language_control()');
}

function load_main_frame() {
	add_block("body","div","","main_frame");
	add_block("#main_frame","div","","table_number");
	add_image("#main_frame", "Logo image", "logo");

	$("#table_number").hide();
}



/**
 * load_frame_login
 * @desc Creates a login frame
 * @param old_frame Old frame to be removed
 */
function load_frame_login(old_frame) {
	remove_old_frame(old_frame);

	add_block('#main_frame', "div", "", "login");
	add_block('#login', "div", "", "login_topbar");
	add_block('#login_topbar', "span", "", "login_manager");
	add_block("#login", "p", "", "login_text");
	add_block("#login", "span", "", "login_input");
	add_block("#login", "span", "", "login_button");

	$("#login_manager").attr("onclick", 'load_frame_manager("login")');
	$("#login_button").attr("onclick", 'load_frame_choose("login")');
	$("#login_input").attr("contentEditable", "true");

	update_view();
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

/**
 * load_frame_choose
 * @desc Creates a choose table frame
 * @param old_frame Old frame to be removed
 */
function load_frame_choose(old_frame) {
	remove_old_frame(old_frame);

	add_block("#main_frame", "div", "", "choose_screen");
	add_block("#choose_screen", "h1", "", "choose_welcome");

	// Add tables
	for (i = 1; i <= 9; i++) {
		let table = $('<div class="table"></div>');
		$(table).attr("id", "table_" + i);
		$(table).attr("ondrop","drop_ipad(event)");
		$(table).attr("ondragover","allow_drop(event)");
		// TODO: Språket ändrar sig ej dynamiskt!
		$(table).text(i);
		$(table).attr("onclick", 'load_frame_menu("choose_screen", "' + i +'")');
		$("#choose_screen").append(table);
	}
	// Add bar
	//$('#choose_screen').append('<div class="table" id="table_bar"> Bar </div>');
	add_block("#choose_screen", "div", "table", "table_bar");
	$("#table_bar").text("Bar");

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
function load_frame_menu(old_frame, new_table_number) {
	remove_old_frame(old_frame);

	// Get number of current table
	current_table_number = new_table_number;
	$("#table_number").show();
	$("#table_number").text("Table " + current_table_number);
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

	load_menu_view();
	display_menu_items("beers"); //shows beer by default


	// TODO: fix text generated from dictionary.js + update_view() with translation for undo/redo buttons
	$("#menu_bar").append('<div class="menu_bar_item" id="undo_button">UNDO</div>');
	document.getElementById('undo_button').addEventListener('click', function add() {do_action('undo', '')}, false);
	$("#menu_bar").append('<div class="menu_bar_item" id="redo_button">REDO</div>');
	document.getElementById('redo_button').addEventListener('click', function add() {do_action("redo", '')}, false);

	load_current_order();

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
		for(index in db[type]) {
			var beverage = make_beverage(type, index);
			$("#menu_view_" + type).append(beverage);
			$("#menu_view" + type).append('<br>');
		}
	}

	hide_menu_views();
}

function make_beverage(type, index) {
	var div = $("<div>").addClass("menu_beverage");

	for(var info_point of beverages_info[type]) {
		var data = get_drink_string(type, index, info_point);
		$("<div>").addClass("menu_beverage_" + info_point).text(info_point + ": " + data).appendTo(div);
	}

	var flag_src = get_flag(get_country_of_origin(type, index));
	var new_drink = get_drink_object(type, index);
	$(div).append('<img class="menu_flag_icon" src="' + flag_src + '">');
	$(div).append('<div class="add_item_button" id="'+ get_drink_id(type, index) +'">+ 1</div>').click(function() {do_action('add', new_drink)});
	return div
}

/**
 * load_current_order
 * @desc loads the current order for the selected VIP customer (TODO) or current table.
 */

function load_current_order() {
    //TODO make sure the text comes from the dictionary rather than being hardcoded in order to support translation!
	$("#menu").append('<div id="menu_order"></div>');
    $("#menu_order").append('<div id="menu_order_info"></div>');

    $("#menu_order_info").append('<div class="menu_order_info" id="menu_order_name"></div>');
    $("#menu_order_info").append('<div class="menu_order_info" id="menu_order_amount"></div>');
    $("#menu_order_info").append('<div class="menu_order_info" id="menu_order_price"></div>');
    update_view();

}

/**
 * clear_menu_order_body
 * @desc clear menu_order_body in order to update the content to current order in orderds.js
 */
function clear_menu_order_body() {
    if("#menu_order_body") {
        $("#menu_order_body").remove();
    }
}

/**
 * update_order_view
 * @desc updates view of current order
 */
function update_order_view() {
    clear_menu_order_body();
    $("#menu_order").append('<div id="menu_order_body"></div>');

    let total_cost = 0;
	for(item of orders[current_table_number]) {
        create_order_item(item);
	}
    load_total_cost(total_cost);
	update_view();
}

/**
    * load_total_cost
    * @desc loads total cost of order
    * @arg cost of order
    */
function load_total_cost(cost) {

    $("#menu_order_body").append('<div id="total_cost_wrapper"></div>');
    $("#total_cost_wrapper").append('<div id="total_cost_text"></div>');
    $("#total_cost_wrapper").append('<div id="total_cost_amount">' + cost + '</div>');
    update_view();
}

/**
    * create_order_item
    * @desc creates an order item
*/
function create_order_item(item) {
    let item_id     = order_item_id(item);
    let item_name   = order_item_name(item);
    let item_price  = order_item_price(item);
    let item_amount = order_item_amount(item);
    let total_price = item_price * item_amount;
    let div_id = "item_" + item_id;
    $("#menu_order_body").append('<div id="' + div_id + '"></div>');
    $("#" + div_id).css("display", "flex");
    $("#" + div_id).append('<div class="order_item_name">' + item_name + '</div>');
    $("#" + div_id).append('<div class="order_item_amount">' + item_amount + '</div>');
    $("#" + div_id).append('<div class="order_item_price">' + total_price + '</div>');
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
	$("#table_number").hide()
}
