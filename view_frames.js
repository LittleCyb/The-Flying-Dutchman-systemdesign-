/*
 File: view_frames.js
 Author: TODO: add names
 Main view file, contains all functions for generating different frames
 for the application.
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
	// Create frame
	add_block("body","div","","main_frame");
	add_block("#main_frame","div","","table_number");
	add_image("#main_frame", "Logo image", "logo");
	// Additional attributes
	$("#table_number").hide();
}

/**
 * load_frame_login
 * @desc Creates a login frame
 * @param old_frame Old frame to be removed
 */
function load_frame_login(old_frame) {
	remove_old_frame(old_frame);
	// Create frame
	add_block('#main_frame', "div", "", "login");
	add_block('#login', "div", "", "login_topbar");
	add_block('#login_topbar', "span", "", "login_manager");
	add_block("#login", "p", "", "login_text");
	add_block("#login", "div", "", "login_input");
	add_block("#login", "div", "", "login_button");
	// Additional attributes
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
    $("#main_frame").append('<img id="logo" src="">');
    $("#main_frame").append('<div id="manager"></div>');

    /* Get all the beers from the db. Each div's id will be the "artikelid" of the beer, this will
       make it easier to manipulate the db.*/
    for (drinkType1 in db) {
	let largeAmount = 50;
	let i=0;
	let drinkType = drinkType1.toString();
	$('#manager').append('<div class="drinktype_container" id='+drinkType+'></div>');
	$('#'+drinkType).append('<div class="dividing_large_text">'+drinkType+'</div>');
	while (i < db[drinkType].length) {
	    let drinkId = getDrinkIdFromDB(drinkType, i);
	    $("#"+drinkType).append('<div class="boxed" id='+drinkId+'></div>');
	    $("#"+drinkId).append('<div class="item_top_row" id=top'+drinkId+'></div>');
	    $("#top"+drinkId).append('<div class="item_text_top"> '+getDrinkNameFromDB(drinkType, i)+'</div>');
	    $("#top"+drinkId).append('<div class="item_hide_button" id="hide_button'+drinkId+'"> </div>');
	    $('<img class="item_hide_image" src="eye.svg"/>').appendTo($('#hide_button'+drinkId));
	    $("#hide_button"+drinkId).attr("onclick",'hide_unhide("'+drinkType+'", '+drinkId+')');
	    //
	    $("#"+drinkId).append('<div class="flex_button_container" id=flex'+drinkId+'> </div>');

	    // Decrement button
	    $("#flex"+drinkId).append(
		'<div class="manager_button" id=decrement_button'+drinkId+'> Decrement </div>');
	    $("#decrement_button"+drinkId).attr(
		"onclick", 'update_amount('+drinkId+', "'+drinkType+'", -1, getDrinkAmountFromDB,'+i+')');
	    
	    // Larger order button
	    $("#flex"+drinkId).append(
		'<div class="manager_button" id=large_order_button'+drinkId+'> Order '+largeAmount+' </div>');
	    $("#large_order_button"+drinkId).attr(
		"onclick",'setTimeout(function() {update_amount('+drinkId+', "'+drinkType+'", '+largeAmount+', getDrinkAmountFromDB, '+i+')}, 1000)');

	    // Increment button
	    $("#flex"+drinkId).append(
		'<div class="manager_button" id=increment_button'+drinkId+'> Increment </div>');
	    $("#increment_button"+drinkId).attr(
		"onclick",'orderItem("'+drinkType+'", '+drinkId+', +1);'+
		    ' update_text("drink'+drinkId+'", getDrinkAmountFromDB("'+drinkType+'", '+i+'))');


	    $("#"+drinkId).append('<div class="item_text_bottom" id=drink'+drinkId+'>' +getDrinkAmountFromDB(drinkType, i)+ '</div>');
	    i++;
	}
    }
}

/**
 * load_frame_vip_login
 * @desc Creates a vip_login frame
 * @param old_frame Old frame to be removed
 */
function load_frame_vip_login(old_frame) {
	remove_old_frame(old_frame);
	// Create frame
	// add_block("#main_frame", "div", "", "vip_login");
	$("<div id=vip_login>").appendTo("#main_frame");
	$("<p id=vip_login_label>").appendTo("#vip_login");
	$("<div id=vip_login_input>").attr("contentEditable", "true").appendTo("#vip_login");
	$("<div id=vip_login_button>").appendTo("#vip_login");
	update_view();

	$("#vip_login_button").click(function() {
		var name = $("#vip_login_input").text();
		alert("logged in as: " + name);
		load_frame_menu("vip_login", get_current_table_number());
	})
}

/**
 * load_frame_choose
 * @desc Creates a choose table frame
 * @param old_frame Old frame to be removed
 */
function load_frame_choose(old_frame) {
	remove_old_frame(old_frame);
	// Create frame
	add_block("#main_frame", "div", "", "choose_screen");
	add_block("#choose_screen", "h1", "", "choose_welcome");
	// Add tables
	for (i = 1; i <= 9; i++) {
		let table = $('<div class="table"></div>');
		$(table).attr("id", "table_" + i);
		$(table).attr("ondrop","drop_ipad(event)");
		$(table).attr("ondragover","allow_drop(event)");
		$(table).text(i);
		$(table).attr("onclick", 'load_frame_menu("choose_screen", "' + i +'")');
		$("#choose_screen").append(table);
	}
	// Add bar
	add_block("#choose_screen", "div", "table", "table_bar");
	$("#table_bar").text("Bar");
	$("#table_bar").attr("onclick", 'load_frame_bar("choose_screen")');

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
 * @param new_table_number for instance of program
 */
function load_frame_menu(old_frame, new_table_number) {
	remove_old_frame(old_frame);

	clear_history(); // Clear previous UNDO/REDO history
	// Get number of current table
	current_table_number = new_table_number;
	set_current_table_number(new_table_number); //for this instance of program
	
	$("#table_number").show();
	// Create frame
	add_block("#main_frame", "div", "", "menu");
	add_block("#menu", "div", "", "menu_topbar");
	add_block("#menu_topbar", "span", "", "login_vip");
	add_block("#menu", "div", "", "menu_bar");
	add_block("#menu_bar", "div", "", "menu_bar_left");
	add_block("#menu_bar", "div", "", "menu_bar_right");
	// Menu categories
	add_block("#menu_bar_left", "div", "menu_bar_item", "menu_bar_beers");
	add_block("#menu_bar_left", "div", "menu_bar_item", "menu_bar_cocktails");
	add_block("#menu_bar_left", "div", "menu_bar_item", "menu_bar_wine");
	add_block("#menu_bar_left", "div", "menu_bar_item", "menu_bar_vip");

	//filter dropdown
	add_block("#menu_bar_left", "div", "menu_bar_item", "menu_bar_filter");

	// Make categories clickable
	$("#menu_bar_beers").attr("onclick", 'display_menu_items("beers")');;
	$("#menu_bar_cocktails").attr("onclick", 'display_menu_items("cocktails")');
	$("#menu_bar_wine").attr("onclick", 'display_menu_items("wine")');
	$("#menu_bar_vip").attr("onclick", 'display_menu_items("vip")');
	$("#login_vip").click(function() {load_frame_vip_login("menu")})
	$("#menu_bar_filter").attr("onclick", 'display_menu_items("filter")');

	load_menu_view("table");
	display_menu_items("beers"); //shows beer by default

	$("#menu_bar_right").append('<div class="menu_bar_item" id="undo_button"></div>');
	document.getElementById('undo_button').addEventListener('click', function add() {do_action('undo', '')}, false);
	$("#menu_bar_right").append('<div class="menu_bar_item" id="redo_button"></div>');
	document.getElementById('redo_button').addEventListener('click', function add() {do_action("redo", '')}, false);
	$("#menu_bar_right").append('<div class="menu_bar_item" id="purchase_button"></div>');
	document.getElementById('purchase_button').addEventListener('click', function add() {do_action("purchase", 'Company')}, false);

	add_block("#menu", "div", "", "menu_order");
	load_current_order();
	update_order_view();

	update_view();
}

/**
 * load_frame_bar
 * @desc Creates a bar frame
 * @param old_frame - Old frame to be removed
 */
function load_frame_bar(old_frame) {
	remove_old_frame(old_frame);
	clear_history(); // Clear previous UNDO/REDO history
	// Create frame
	add_block("#main_frame", "div", "", "menu");
	add_block("#menu", "div", "", "menu_topbar");
	add_block("#menu", "div", "", "menu_bar");
	add_block("#menu_bar", "div", "", "menu_bar_left");
	add_block("#menu_bar", "div", "", "menu_bar_right");
	// Menu categories
	add_block("#menu_bar_left", "div", "menu_bar_item", "menu_bar_orders");
	add_block("#menu_bar_left", "div", "menu_bar_item", "menu_bar_beers");
	add_block("#menu_bar_left", "div", "menu_bar_item", "menu_bar_cocktails");
	add_block("#menu_bar_left", "div", "menu_bar_item", "menu_bar_wine");
	add_block("#menu_bar_left", "div", "menu_bar_item", "menu_bar_vip");
	// Action buttons
	add_block("#menu_bar_right", "div", "menu_bar_item", "undo_button");
	add_block("#menu_bar_right", "div", "menu_bar_item", "redo_button");
	add_block("#menu_bar_right", "div", "menu_bar_item", "accept_order_button")
	add_block("#menu_bar_right", "div", "menu_bar_item", "decline_order_button");
	// Make buttons clickable
	$("#menu_bar_orders").attr("onclick", 'display_menu_items("orders")');;
	$("#menu_bar_beers").attr("onclick", 'display_menu_items("beers")');;
	$("#menu_bar_cocktails").attr("onclick", 'display_menu_items("cocktails")');
	$("#menu_bar_wine").attr("onclick", 'display_menu_items("wine")');
	$("#menu_bar_vip").attr("onclick", 'display_menu_items("vip")');
	document.getElementById('undo_button').addEventListener('click', function add() {do_action('undo', '')}, false);
	document.getElementById('redo_button').addEventListener('click', function add() {do_action("redo", '')}, false);
	document.getElementById('decline_order_button').addEventListener('click', function add() {do_action("decline_order", '')}, false);
	document.getElementById('accept_order_button').addEventListener('click', function add() {do_action("accept_order", '')}, false);


	load_menu_view("bar");
	load_bar_view();
	display_menu_items("orders"); //shows beer by default

	add_block("#menu", "div", "", "menu_order");
	load_current_order();

	update_view();
}

/**
 * load_menu_view
 * @desc loads menu view frame
 */
function load_menu_view(from) {
	// frame to put items in
	add_block("#menu", "div", "", "menu_view");
	// Items
	for(const type of menu_types) {
		$("#menu_view").append('<div id="menu_view_' + type + '"></div>');
		for(index in db[type]) {
			var beverage = make_beverage(type, index, from);
			$("#menu_view_" + type).append(beverage);
			$("#menu_view" + type).append('<br>');
		}
	}

	//TODO: remove menu_view_filter from standard loop (see above) to add it separately below //FIXME this removes both, otherwise we get duplicates
	//$("#menu_view_filter").remove(); Is this a bug?

	//add filter functionality
	if (from == "table") {
		add_block("#menu_view", "div", "menu_view_filter");
		for(const filter of filter_types) {
			$("#menu_view_filter").append('<input id="checkbox_' + filter +'_id" type="checkbox" name="checkbox_' + filter + '">' + '<label for="checkbox_' + filter + '" class="checkbox_label" id="checkbox_' + filter + '">');
		}
	}

	hide_menu_views();
}

/**
 * load_bar_view
 * @desc loads bar view frames, including a list of all customer orders
 */
function load_bar_view() {
	// frame to put items in
	add_block("#menu_view", "div","", "menu_view_orders")
	for (let o = 0; o < pending_orders.length; o++) {
		// load current pending order from file, if order is null, skip
		var current_order = JSON.parse(localStorage.getItem("order" + pending_orders[o]));
		if (current_order == null) continue;
		// add block for order
		add_block("#menu_view_orders", "div", "bar_order_item", "bar_order_item" + o);
		var current = "#bar_order_item" + o
		$(current).append('<p> Order: ' + current_order.number + ' </p>');
		$(current).append('<p> Table: ' + current_order.table + ' </p>');
		$(current).append('<p> Type: ' + "Company/Single" + ' </p>');
		$(current).attr("onclick", 'do_choose_bar_order("order' + pending_orders[o] + '")');
		$(current).css("cursor", "pointer");
	}
}

function make_beverage(type, index, from) {
	var div = $("<div>").addClass("menu_beverage").attr("id", get_drink_id(type, index));

	for(var info_point of beverages_info[type]) {
		var data = get_drink_string(type, index, info_point);
		var translated_info_point = translate_info_point(info_point);
		$("<div>").addClass("menu_beverage_" + info_point).text(translated_info_point + ": " + data).appendTo(div);
	}

	var flag_src = get_flag(get_country_of_origin(type, index));
	var new_drink = get_drink_object(type, index);
	$(div).append('<img class="menu_flag_icon" src="' + flag_src + '">');
	if (from == "table") {
		$(div).append('<div class="add_item_button">+ 1</div>').click(function() {do_action('add', new_drink)});
	} else {
		$(div).click(function() {show_all_info(type, index)});
		$(div).css("cursor", "pointer");
	}
	return div
}

/**
 * load_current_order
 * @desc loads the current order for the selected VIP customer (TODO) or current table.
 */

function load_current_order() {
	add_block("#menu_order", "div", "", "menu_order_info");
	add_block("#menu_order_info", "div", "menu_order_info", "menu_order_name");
	add_block("#menu_order_info", "div", "menu_order_info", "menu_order_amount");
	add_block("#menu_order_info", "div", "menu_order_info", "menu_order_price");
	add_block("#menu_order_info", "div", "menu_order_info", "menu_order_remove");

	update_view();
}

/**
 * update_order_view
 * @desc updates view of current order
 */
function update_order_view() {
	clear_menu_order_body();
    add_block("#menu_order", "div", "", "menu_order_body");
	if ($("#menu_order_info").length == 0) load_current_order();

    let total_cost = 0;
	for(item of orders[get_current_table_number()]) {
        create_order_item(item);
	}
	if (orders[get_current_table_number()].length == 0) {
		$("#purchase_button").css("display", "none");
	} else {
		$("#purchase_button").css("display", "flex");
	}
    load_total_cost(total_cost);
	update_view();
}

/**
 * update_order_view
 * @desc updates view of current order with a specific item in mind (used in bar)
 */
function update_order_view_item(order) {
	var current_order = JSON.parse(localStorage.getItem(order));
	var current_items = current_order.items;

	clear_menu_order_body();
	$("#decline_order_button").css("display", "flex");
	$("#accept_order_button").css("display", "flex");
	if ($("#menu_order_info").length == 0) load_current_order();

	add_block("#menu_order", "div", "", "menu_order_body");
	let total_cost = 0;
	var can_perform_order = true;
	for(item of current_items) {
		var created_item = create_order_item(item);
		// Check if amount exists for each item
		var item_amount = get_drink_amount_from_id(order_item_id(item));
		if (item_amount < item.amount) {
			can_perform_order = false;
			$("#" + created_item).css("color", "red");
		}
	}
	if (can_perform_order == false) $("#accept_order_button").css("display", "none");
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
    // Get price of total amount of item, leaving at most two decimals
    let total_price = item_price * item_amount;
    let total_roundoff = Math.round(total_price * 100)/100;
	let table_number = get_current_table_number(); //to maintain

    let div_id = "item_" + item_id;
    $("#menu_order_body").append('<div id="' + div_id + '" class="order_item"></div>');
    $("#" + div_id).css("display", "flex");
    $("#" + div_id).append('<div class="order_item_name">' + item_name + '</div>');
    $("#" + div_id).append('<div class="order_item_amount">' + item_amount + '</div>');
    $("#" + div_id).append('<div class="order_item_price">' + total_roundoff + '</div>');

    //in order to make the remove functionality reversable/undo:able, we need to remember how many units we removed.
    $("#" + div_id).append('<div class="order_item_remove">X</div>').click(function() {do_action('remove', item_id, find_item_in_order(orders[table_number], item_id).amount)});
	return div_id;
}

/**
 * show_all_info
 * @desc shows all information about a drink from the bartender view
 */
function show_all_info(type, index) {
	clear_menu_order_body();
	$("#decline_order_button").css("display", "none");
	$("#accept_order_button").css("display", "none");
	$("#menu_order_info").remove();
	// Add or replace drink information block
	add_block("#menu_order", "div", "", "drink_information");
	// Add drink information block
	var drink = get_drink_object(type, index);
	add_block("#drink_information", "p", "drink_information_line", "drink_info");
	add_block("#drink_information", "span", "", "drink_amount_text");
	add_block("#drink_information", "span", "", "drink_amount");
	$("#drink_amount").text(get_drink_string(type,index,"antal"));
	for (entry in drink) {
		if (entry != "antal") {
			$("#drink_information").append('<p class="drink_information_line">' + get_drink_string_full(type, index, entry) + '</p>');
		}
	}
	update_view()
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

