/*
 File: main.js

 Author: TODO: add names


 this js document contains the control logic for the application
 */

/* login admin screen */

var dom_login = document.createElement("div");
document.body.appendChild(dom_login);
dom_login.id = "login";

var dom_login_image_0 = document.createElement("img");
dom_login.appendChild(dom_login_image_0);
dom_login_image_0.src = "logo.png";

var dom_login_text = document.createElement("p");
dom_login.appendChild(dom_login_text);
dom_login_text.id = "login_text";

var dom_login_username = document.createElement("span");
dom_login.appendChild(dom_login_username);
dom_login_username.contentEditable = "true";
dom_login_username.id = "login_input";

var dom_login_button = document.createElement("span");
dom_login.appendChild(dom_login_button);
dom_login_button.id = "login_button";

// guest

var dom_guest = document.createElement("div");
document.body.appendChild(dom_guest);
dom_guest.id = "guest";
dom_guest.classList.add("main")

var dom_image_1 = document.createElement("img");
dom_guest.appendChild(dom_image_1);
dom_image_1.src = "logo.png";

var dom_menu = document.createElement("div");
dom_guest.appendChild(dom_menu);
dom_menu.id = "menu";

var dom_order = document.createElement("div");
dom_guest.appendChild(dom_order);
dom_order.id = "order";

for (var i = 0; i < 4; i++) {
	var dom_menu_item = document.createElement("div");
	dom_menu.appendChild(dom_menu_item);
	dom_menu_item.classList.add("menu_item");
	dom_menu_item.textContent = "beer " + (i+1);
	
	var dom_order_item = document.createElement("div");
	dom_order.appendChild(dom_order_item);
	dom_order_item.classList.add("order_item");
	dom_order_item.textContent = "beer " + (i+1) + " x1";
}

var dom_balance = document.createElement("div");
dom_guest.appendChild(dom_balance);
dom_balance.id = "balance";
dom_balance.textContent = "Money: " + 123;





function login_menu_login() {
	$("#login").css("display", "none");
	$(".main").css("display", "block");
}

//updates view with text in Swedish or English
function update_view() {
	keys = dict['keys'];
	for (idx in keys) {
		key = keys[idx];
		$("#" + key).text(get_string(key));
	}
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
