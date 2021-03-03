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
   $('body').append('<div id="language_bar"</div>');


   /*FIXME (for testing purposes, remove later)*/
   $("#language_bar").append('<div id="login_from_menu">back to login</div>');
   $("#login_from_menu").attr("onclick", 'load_frame_login("menu")');


   $("#language_bar").append('<img id="language" alt="current language" src="">');
   $("#language").attr("onclick", 'change_language_control()');
}

function load_main_frame() {
	$('body').append('<div id="main_frame"></div>');
	$("#main_frame").append('<div id="table_number"></div>');
	$("#table_number").hide();
	$("#main_frame").append('<img id="logo" src="">');
}

/**
 * load_frame_login
 * @desc Creates a login frame
 * @param old_frame Old frame to be removed
 */
function load_frame_login(old_frame) {
	remove_old_frame(old_frame);

	$("#main_frame").append('<div id="login"></div>');
	$("#login").append('<div id="login_topbar"></div>');
	$("#login_topbar").append('<span id="login_manager"></span>');
	$("#login_manager").attr("onclick", 'load_frame_manager("login")');

	$("#login").append('<p id="login_text"></p>');

	$("#login").append('<span id="login_input"></span>');
	$("#login_input").attr("contentEditable", "true");

	$("#login").append('<span id="login_button"></span>');
	$("#login_button").attr("onclick", 'load_frame_choose("login")');
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

	// adds new content to main_frame
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
		$(table).attr("onclick", 'load_frame_menu("choose_screen", "' + i +'")');
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
	var new_id = get_drink_string(type, index, "artikelid");
	$(div).append('<img class="menu_flag_icon" src="' + flag_src + '">');
	$(div).append('<div class="add_item_button" id="'+new_id+'">+ 1</div>').click(function() {do_action('add', new_id)});
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

    $("#menu_order_info").append('<div class="menu_order_info" id="menu_order_name">NAME</div>');
    $("#menu_order_info").append('<div class="menu_order_info" id="menu_order_amount">AMOUNT</div>');
    $("#menu_order_info").append('<div class="menu_order_info" id="menu_order_price">PRICE</div>');
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

	for(item of orders[current_table_number]) {
        create_order_item(item);
	}
	update_view();
}

/**
    * create_order_item
    * @desc creates an order item
*/
function create_order_item(item) {
    let item_price = 10; //FIXME
    let item_name = "drink"; //FIXME
    let item_id = item.id;
    let item_amount = item.amount;
    let div_id = "item_" + item_id;
    /*$("#menu_order_body").append('<p>' + item_name + item_amount + ' </p>');*/
    $("#menu_order_body").append('<div id="' + div_id + '"></div>');
    $("#" + div_id).css("display", "flex");
    $("#" + div_id).append('<div class="order_item_name">Name</div>');
    $("#" + div_id).append('<div class="order_item_amount">Amount</div>');
    $("#" + div_id).append('<div class="order_item_price">Prics</div>');
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
