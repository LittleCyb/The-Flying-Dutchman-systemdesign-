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
    $("#manager").append('<div id="manager_left"></div>');

    /* Get all the beers from the db. Each div's id will be the "artikelid" of the beer, this will
       make it easier to manipulate the db.*/
    for (drinkType1 in db) {
	let i=0;
	let drinkType = drinkType1.toString();
	$('#manager_left').append('<div class="dividing_large_text">'+drinkType+'</div>');
	while (i < db[drinkType].length) {
	    let drinkId = getDrinkIdFromDB(drinkType, i);
	    $("#manager_left").append('<div class="boxed" id='+drinkId+'></div>');
	    $("#"+drinkId).append('<div class="item_text"> '+getDrinkNameFromDB(drinkType, i)+'</div>');
				  //getDrinkNameFromDB(""+drinkType, i) + " ");
	    $("#"+drinkId).append('<div class="flex_button_container" id=flex'+drinkId+'> </div>');

	    $("#flex"+drinkId).append(
		'<div class="increment_button" id=decrement_button'+drinkId+'> Decrement </div>');
	    $("#decrement_button"+drinkId).attr(
		"onclick",'decrementItemAmount("'+drinkType+'", '+drinkId+');'+
		    ' update_text("drink'+drinkId+'", getDrinkAmountFromDB("'+drinkType+'", '+i+'))');

	    $("#flex"+drinkId).append(
		'<div class="increment_button" id=increment_button'+drinkId+'> Increment </div>');
	    $("#increment_button"+drinkId).attr(
		"onclick",'incrementItemAmount("'+drinkType+'", '+drinkId+');'+
		    ' update_text("drink'+drinkId+'", getDrinkAmountFromDB("'+drinkType+'", '+i+'))');


	    $("#"+drinkId).append('<div class="item_text" id=drink'+drinkId+'>' +getDrinkAmountFromDB(drinkType, i)+ '</div>');
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
		load_frame_menu("vip_login", current_table_number);
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
	// Create frame
	add_block("#main_frame", "div", "", "menu");
	add_block("#menu", "div", "", "menu_topbar");
	add_block("#menu_topbar", "span", "", "login_vip");
	add_block("#menu", "div", "", "menu_bar");
	// Menu categories
	add_block("#menu_bar", "div", "menu_bar_item", "menu_bar_beers");
	add_block("#menu_bar", "div", "menu_bar_item", "menu_bar_cocktails");
	add_block("#menu_bar", "div", "menu_bar_item", "menu_bar_wine");
	add_block("#menu_bar", "div", "menu_bar_item", "menu_bar_vip");

	//filter dropdown
	add_block("#menu_bar", "div", "menu_bar_item", "menu_bar_filter");


	// Make categories clickable
	$("#menu_bar_beers").attr("onclick", 'display_menu_items("beers")');;
	$("#menu_bar_cocktails").attr("onclick", 'display_menu_items("cocktails")');
	$("#menu_bar_wine").attr("onclick", 'display_menu_items("wine")');
	$("#menu_bar_vip").attr("onclick", 'display_menu_items("vip")');
	$("#login_vip").click(function() {load_frame_vip_login("menu")})
	$("#menu_bar_filter").attr("onclick", 'display_menu_items("filter")');

	load_menu_view();
	display_menu_items("beers"); //shows beer by default

	$("#menu_bar").append('<div class="menu_bar_item" id="undo_button"></div>');
	document.getElementById('undo_button').addEventListener('click', function add() {do_action('undo', '')}, false);
	$("#menu_bar").append('<div class="menu_bar_item" id="redo_button"></div>');
	document.getElementById('redo_button').addEventListener('click', function add() {do_action("redo", '')}, false);
	$("#menu_bar").append('<div class="menu_bar_item" id="purchase_button"></div>');
	document.getElementById('purchase_button').addEventListener('click', function add() {do_action("purchase", '')}, false);

	load_current_order();
	update_order_view();

	update_view();
}


/**
 * load_menu_view
 * @desc loads menu view frame
 */
function load_menu_view() {
	// frame to put items in
	add_block("#menu", "div", "", "menu_view");
	// Items
	for(const type of menu_types) {
		$("#menu_view").append('<div id="menu_view_' + type + '"></div>');
		for(index in db[type]) {
			var beverage = make_beverage(type, index);
			$("#menu_view_" + type).append(beverage);
			$("#menu_view" + type).append('<br>');
		}
	}

	//remove menu_view_filter from standard loop (see above) to add it separately below //FIXME this removes both, otherwise we get duplicates
	//$("#menu_view_filter").remove(); Is this a bug?

	//add filter functionality
	add_block("#menu_view", "div", "menu_view_filter");
	for(const filter of filter_types) {
		$("#menu_view_filter").append('<input id="checkbox_' + filter +'_id" type="checkbox" name="checkbox_' + filter + '">' + '<label for="checkbox_' + filter + '" class="checkbox_label" id="checkbox_' + filter + '">');
	}

	hide_menu_views();
}

function make_beverage(type, index) {
	var div = $("<div>").addClass("menu_beverage").attr("id", get_drink_id(type, index));

	for(var info_point of beverages_info[type]) {
		var data = get_drink_string(type, index, info_point);
		$("<div>").addClass("menu_beverage_" + info_point).text(info_point + ": " + data).appendTo(div);
	}

	var flag_src = get_flag(get_country_of_origin(type, index));
	var new_drink = get_drink_object(type, index);
	$(div).append('<img class="menu_flag_icon" src="' + flag_src + '">');
	$(div).append('<div class="add_item_button">+ 1</div>').click(function() {do_action('add', new_drink)});
	return div
}

/**
 * load_current_order
 * @desc loads the current order for the selected VIP customer (TODO) or current table.
 */

function load_current_order() {
	add_block("#menu", "div", "", "menu_order");
	add_block("#menu_order", "div", "", "menu_order_info");
	add_block("#menu_order_info", "div", "menu_order_info", "menu_order_name");
	add_block("#menu_order_info", "div", "menu_order_info", "menu_order_amount");
	add_block("#menu_order_info", "div", "menu_order_info", "menu_order_price");
	add_block("#menu_order_info", "div", "menu_order_info", "menu_order_remove");

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
    add_block("#menu_order", "div", "", "menu_order_body");

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
    // Get price of total amount of item, leaving at most two decimals
    let total_price = item_price * item_amount;
    let total_roundoff = Math.round(total_price * 100)/100;

    let div_id = "item_" + item_id;
    $("#menu_order_body").append('<div id="' + div_id + '"></div>');
    $("#" + div_id).css("display", "flex");
    $("#" + div_id).append('<div class="order_item_name">' + item_name + '</div>');
    $("#" + div_id).append('<div class="order_item_amount">' + item_amount + '</div>');
    $("#" + div_id).append('<div class="order_item_price">' + total_roundoff + '</div>');

    //in order to make the remove functionality reversable/undo:able, we need to remember how many units we removed.
    $("#" + div_id).append('<div class="order_item_remove">X</div>').click(function() {do_action('remove', item_id, find_item_in_order(orders[current_table_number], item_id).amount)});

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
