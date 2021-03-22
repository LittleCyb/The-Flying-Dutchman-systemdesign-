/*
 File: main.js
 Author: Simon Jaklovksy, Gideon Landeman, Victor Hwasser
 this js document contains what happens when the site is loaded
 */

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

/* Execute two functions */
function update_amount(drinkId, drinkType, amount, func, i) {
    orderItem(drinkType, drinkId, amount);
    update_text("drink"+drinkId, func(drinkType, i));
}
function update_text(id, text) {
    $("#"+id).text(text);
}
/**
 * add_block
 * @desc Creates a HTML block
 * @param src which html block to build upon
 * @param tag html tag
 * @param class class attribute
 * @param id id attribute
 */
function add_block(src, tag, _class, id) {
	if (_class != "") _class = 'class=' + _class;
	let html_code = '<' + tag + ' ' + _class + ' id="' + id + '"' + '></' + tag + '>';
	return $(src).append(html_code);
}

/**
 * add_image
 * @desc Creates a HTML block
 * @param src which html block to build upon
 * @param alt describtion of image
 * @param id id attribute
 */
function add_image(src, alt, id) {
	let html_code = '<img src="" alt="' + alt + '" id="' + id + '">';
	return $(src).append(html_code);
}

// ===========================================================================
// END OF FILE
// ===========================================================================
