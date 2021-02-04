/*
 File: main.js

 Author: TODO: add names


 this js document contains the control logic for the application
 */

/* login admin screen */

$('body').append('<div id="login"></div>');

$("#login").append('<img id="logo" src="logo.png">');

$("#login").append('<p id="login_text"></p>');

$("#login").append('<span id="login_input"></span>');
$("#login_input").attr("contentEditable", "true");

$("#login").append('<span id="login_button"></span>');

/* guest screen, temporary */


$('body').append('<div id="menu"></div>')

$("#menu").append('<img id="logo" src="logo.png">');

$("#menu").append('<div id="menu_bar"></div>');

$("#menu_bar").append('<div class="menu_bar_item" id="menu_bar_beers"></div>');

$("#menu_bar").append('<div class="menu_bar_item" id="menu_bar_spirits"></div>');

/*

// CHEAT: get random items in menu and in customer order
for (var i = 0; i < 4; i++) {

/*


	var item = $('<div class="menu_item"></div>');
	$(item).attr("id", "item_" + i);
	$(item).text("beer " + (i+1));
	$("#menu").append(item);

	var item_order = $('<div class="order_item"></div>');
	$(item_order).attr("id", "item_order_" + i);
	$(item_order).text("beer " + (i+1) + " x1");
	$("#order").append(item_order);
}

// Checkout
$("#guest").append('<div id="checkout"></div>');


var total_cost = $('<p id="total_cost"></p>')
$(total_cost).text("Total: " + get_total());
$("#checkout").append(total_cost);

function login_menu_login() {
	$("#login").css("display", "none");
	$("#menu").css("display", "block");
}
*/

//updates view with text in Swedish or English
function update_view() {
	keys = dict['keys'];
	for (idx in keys) {
		key = keys[idx];
		$("#" + key).text(get_string(key));
	}
}

// Return total cost of order
function get_total() {
	return 100; // CHEAT
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
	update_view();
	$("#login").css("display", "block");
	document.getElementById("login_button").addEventListener("click", login_menu_login);
	}
);


// ===========================================================================
// END OF FILE
// ===========================================================================
