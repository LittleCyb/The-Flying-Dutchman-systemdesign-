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

// menu


$('body').append('<div id="menu"></div>')

$("#menu").append('<img id="logo" src="logo.png">');

$("#menu").append('<div id="menu_bar"></div>');

$("#menu_bar").append('<div class="menu_bar_item" id="menu_bar_beers"></div>');

$("#menu_bar").append('<div class="menu_bar_item" id="menu_bar_spirits"></div>');

$("#menu").append('<div id="menu_view"></div>');

$("#menu_view").append('<p> Lorem ipsum doltie, mollis ut elit. Aenean arcu velit, congue non rhoncus ac, malesuada bibendum ipsum. Sed pretium imperdiet mattis. Phasellus sed felis erat. Phasellus nec neque felis. Morbi nec ante libero. Nullam eget tellus consectetur, elementum purus sit amet, efficitur nunc. Sed mattis nisi at dolor cursus, vel dignissim neque cursus. Vestibulum elementum lacinia quam, in elementum nunc consectetur consectetur. Phasellus sollicitudin ipsum metus, vitae faucibus nulla venenatis non. Fusce quis nisi lacus. Integer semper diam nec libero blandit, a finibus felis maximus. Nulla interdum commodtie, mollis ut elit. Aenean arcu velit, congue non rhoncus ac, malesuada bibendum ipsum. Sed pretium imperdiet mattis. Phasellus sed felis erat. Phasellus nec neque felis. Morbi nec ante libero. Nullam eget tellus consectetur, elementum purus sit amet, efficitur nunc. Sed mattis nisi at dolor cursus, vel dignissim neque cursus. Vestibulum elementum lacinia quam, in elementum nunc consectetur consectetur. Phasellus sollicitudin ipsum metus, vitae faucibus nulla venenatis non. Fusce quis nisi lacus. Integer semper diam nec libero blandit, a finibus felis maximus. Nulla interdum commodtie, mollis ut elit. Aenean arcu velit, congue non rhoncus ac, malesuada bibendum ipsum. Sed pretium imperdiet mattis. Phasellus sed felis erat. Phasellus nec neque felis. Morbi nec ante libero. Nullam eget tellus consectetur, elementum purus sit amet, efficitur nunc. Sed mattis nisi at dolor cursus, vel dignissim neque cursus. Vestibulum elementum lacinia quam, in elementum nunc consectetur consectetur. Phasellus sollicitudin ipsum metus, vitae faucibus nulla venenatis non. Fusce quis nisi lacus. Integer semper diam nec libero blandit, a finibus felis maximus. Nulla interdum commodtie, mollis ut elit. Aenean arcu velit, congue non rhoncus ac, malesuada bibendum ipsum. Sed pretium imperdiet mattis. Phasellus sed felis erat. Phasellus nec neque felis. Morbi nec ante libero. Nullam eget tellus consectetur, elementum purus sit amet, efficitur nunc. Sed mattis nisi at dolor cursus, vel dignissim neque cursus. Vestibulum elementum lacinia quam, in elementum nunc consectetur consectetur. Phasellus sollicitudin ipsum metus, vitae faucibus nulla venenatis non. Fusce quis nisi lacus. Integer semper diam nec libero blandit, a finibus felis maximus. Nulla interdum commodtie, mollis ut elit. Aenean arcu velit, congue non rhoncus ac, malesuada bibendum ipsum. Sed pretium imperdiet mattis. Phasellus sed felis erat. Phasellus nec neque felis. Morbi nec ante libero. Nullam eget tellus consectetur, elementum purus sit amet, efficitur nunc. Sed mattis nisi at dolor cursus, vel dignissim neque cursus. Vestibulum elementum lacinia quam, in elementum nunc consectetur consectetur. Phasellus sollicitudin ipsum metus, vitae faucibus nulla venenatis non. Fusce quis nisi lacus. Integer semper diam nec libero blandit, a finibus felis maximus. Nulla interdum commodtie, mollis ut elit. Aenean arcu velit, congue non rhoncus ac, malesuada bibendum ipsum. Sed pretium imperdiet mattis. Phasellus sed felis erat. Phasellus nec neque felis. Morbi nec ante libero. Nullam eget tellus consectetur, elementum purus sit amet, efficitur nunc. Sed mattis nisi at dolor cursus, vel dignissim neque cursus. Vestibulum elementum lacinia quam, in elementum nunc consectetur consectetur. Phasellus sollicitudin ipsum metus, vitae faucibus nulla venenatis non. Fusce quis nisi lacus. Integer semper diam nec libero blandit, a finibus felis maximus. Nulla interdum commodtie, mollis ut elit. Aenean arcu velit, congue non rhoncus ac, malesuada bibendum ipsum. Sed pretium imperdiet mattis. Phasellus sed felis erat. Phasellus nec neque felis. Morbi nec ante libero. Nullam eget tellus consectetur, elementum purus sit amet, efficitur nunc. Sed mattis nisi at dolor cursus, vel dignissim neque cursus. Vestibulum elementum lacinia quam, in elementum nunc consectetur consectetur. Phasellus sollicitudin ipsum metus, vitae faucibus nulla venenatis non. Fusce quis nisi lacus. Integer semper diam nec libero blandit, a finibus felis maximus. Nulla interdum commod </p>');


/*

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
dom_balance.textContent = "Money: " + 123; */





function login_menu_login() {
	$("#login").css("display", "none");
	$("#menu").css("display", "block");
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
	$("#login").css("display", "block"); //change back to #login later
	document.getElementById("login_button").addEventListener("click", login_menu_login);
	}
);


// ===========================================================================
// END OF FILE
// ===========================================================================
