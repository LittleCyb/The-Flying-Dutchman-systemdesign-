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
	} //TODO continue here. + update for new implementation of redo / undo
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
