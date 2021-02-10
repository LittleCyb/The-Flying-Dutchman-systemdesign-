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
	document.getElementById("language").addEventListener("click", change_language);
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

	$("#menu_bar").append('<div class="menu_bar_item" id="menu_bar_cocktails"></div>');

	$("#menu_bar").append('<div class="menu_bar_item" id="menu_bar_wine"></div>');

	$("#menu_bar").append('<div class="menu_bar_item" id="menu_bar_vip"></div>');

	$("#menu").append('<div id="menu_view"></div>');

	$("#menu_view").append('<p> Lorem ipsum doltie, mollis ut elit. Aenean arcu velit, congue non rhoncus ac, malesuada bibendum ipsum. Sed pretium imperdiet mattis. Phasellus sed felis erat. Phasellus nec neque felis. Morbi nec ante libero. Nullam eget tellus consectetur, elementum purus sit amet, efficitur nunc. Sed mattis nisi at dolor cursus, vel dignissim neque cursus. Vestibulum elementum lacinia quam, in elementum nunc consectetur consectetur. Phasellus sollicitudin ipsum metus, vitae faucibus nulla venenatis non. Fusce quis nisi lacus. Integer semper diam nec libero blandit, a finibus felis maximus. Nulla interdum commodtie, mollis ut elit. Aenean arcu velit, congue non rhoncus ac, malesuada bibendum ipsum. Sed pretium imperdiet mattis. Phasellus sed felis erat. Phasellus nec neque felis. Morbi nec ante libero. Nullam eget tellus consectetur, elementum purus sit amet, efficitur nunc. Sed mattis nisi at dolor cursus, vel dignissim neque cursus. Vestibulum elementum lacinia quam, in elementum nunc consectetur consectetur. Phasellus sollicitudin ipsum metus, vitae faucibus nulla venenatis non. Fusce quis nisi lacus. Integer semper diam nec libero blandit, a finibus felis maximus. Nulla interdum commodtie, mollis ut elit. Aenean arcu velit, congue non rhoncus ac, malesuada bibendum ipsum. Sed pretium imperdiet mattis. Phasellus sed felis erat. Phasellus nec neque felis. Morbi nec ante libero. Nullam eget tellus consectetur, elementum purus sit amet, efficitur nunc. Sed mattis nisi at dolor cursus, vel dignissim neque cursus. Vestibulum elementum lacinia quam, in elementum nunc consectetur consectetur. Phasellus sollicitudin ipsum metus, vitae faucibus nulla venenatis non. Fusce quis nisi lacus. Integer semper diam nec libero blandit, a finibus felis maximus. Nulla interdum commodtie, mollis ut elit. Aenean arcu velit, congue non rhoncus ac, malesuada bibendum ipsum. Sed pretium imperdiet mattis. Phasellus sed felis erat. Phasellus nec neque felis. Morbi nec ante libero. Nullam eget tellus consectetur, elementum purus sit amet, efficitur nunc. Sed mattis nisi at dolor cursus, vel dignissim neque cursus. Vestibulum elementum lacinia quam, in elementum nunc consectetur consectetur. Phasellus sollicitudin ipsum metus, vitae faucibus nulla venenatis non. Fusce quis nisi lacus. Integer semper diam nec libero blandit, a finibus felis maximus. Nulla interdum commodtie, mollis ut elit. Aenean arcu velit, congue non rhoncus ac, malesuada bibendum ipsum. Sed pretium imperdiet mattis. Phasellus sed felis erat. Phasellus nec neque felis. Morbi nec ante libero. Nullam eget tellus consectetur, elementum purus sit amet, efficitur nunc. Sed mattis nisi at dolor cursus, vel dignissim neque cursus. Vestibulum elementum lacinia quam, in elementum nunc consectetur consectetur. Phasellus sollicitudin ipsum metus, vitae faucibus nulla venenatis non. Fusce quis nisi lacus. Integer semper diam nec libero blandit, a finibus felis maximus. Nulla interdum commodtie, mollis ut elit. Aenean arcu velit, congue non rhoncus ac, malesuada bibendum ipsum. Sed pretium imperdiet mattis. Phasellus sed felis erat. Phasellus nec neque felis. Morbi nec ante libero. Nullam eget tellus consectetur, elementum purus sit amet, efficitur nunc. Sed mattis nisi at dolor cursus, vel dignissim neque cursus. Vestibulum elementum lacinia quam, in elementum nunc consectetur consectetur. Phasellus sollicitudin ipsum metus, vitae faucibus nulla venenatis non. Fusce quis nisi lacus. Integer semper diam nec libero blandit, a finibus felis maximus. Nulla interdum commodtie, mollis ut elit. Aenean arcu velit, congue non rhoncus ac, malesuada bibendum ipsum. Sed pretium imperdiet mattis. Phasellus sed felis erat. Phasellus nec neque felis. Morbi nec ante libero. Nullam eget tellus consectetur, elementum purus sit amet, efficitur nunc. Sed mattis nisi at dolor cursus, vel dignissim neque cursus. Vestibulum elementum lacinia quam, in elementum nunc consectetur consectetur. Phasellus sollicitudin ipsum metus, vitae faucibus nulla venenatis non. Fusce quis nisi lacus. Integer semper diam nec libero blandit, a finibus felis maximus. Nulla interdum commod </p>');

	update_view();
}

/**
 * load_frame_manager
 * @desc Creates a manager frame
 * @param old_frame Old frame to be removed
 */
function load_frame_manager(old_frame) {
	// Removes the old frame
	if (old_frame) {
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
	load_topbar_language();
	load_frame_login();
});


// ===========================================================================
// END OF FILE
// ===========================================================================
