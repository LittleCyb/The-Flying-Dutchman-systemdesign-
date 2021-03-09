/*
 File: main.js
 Author: TODO: add names
 this js document contains what happens when the site is loaded
 */

var current_table_number; // represents the current table number

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
	load_main_frame();
	load_frame_login();
});

// ===========================================================================
// END OF FILE
// ===========================================================================
