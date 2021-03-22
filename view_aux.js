/*
 File: view_frames.js
 Author: TODO: add names
 All auxillary functions for the view
 */

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
    $("#table_number").text(language == "sv" ? "Bord: " + get_current_table_number() : "Table: " + get_current_table_number());
}

/**
 * filter_items
 * @desc looks at what filters have been applied and updates the menu view
 */
function filter_items() {
    var gluten_free = $("#checkbox_gluten_id").is(":checked");
    var low_tannins = $("#checkbox_low_tannins_id").is(":checked");
    var lactose_free = $("#checkbox_lactose_id").is(":checked");
    var low_alcohol = $("#checkbox_low_alcohol_id").is(":checked");

    for(const key in db) { //got an error here before "'X' is not interable"
        for(drink of db[key]) {
            var artikelid = drink["artikelid"];
            $("#" + artikelid).css("display", "block");
	    if (drink["gömd"]) {
		$("#" + artikelid).css("display", "none");
	    }
        }
    }
    
    if(gluten_free) {
        for(const key in db) {
            for(drink of db[key]) {
                if(drink["gluten_free"] == "0") {
                    var artikelid = drink["artikelid"];
                    $("#" + artikelid).css("display", "none");
                }
            }
        }
    }

    if(low_tannins) {
        for(const key in db) {
            for(drink of db[key]) {
                if(drink["tanniner"] > "3") {
                    var artikelid = drink["artikelid"];
                    $("#" + artikelid).css("display", "none");
                }
            }
        }
    }

    if(lactose_free) {
        for(const key in db) {
            for(drink of db[key]) {
                if(drink["lactose_free"] == "0") {
                    var artikelid = drink["artikelid"];
                    $("#" + artikelid).css("display", "none");
                }
            }
        }
    }

    if(low_alcohol) {
        for(const key in db) {
            for(drink of db[key]) {
                const temp = drink["alkoholhalt"];
                var alkoholhalt = temp.slice(0, -1);
                if(parseInt(alkoholhalt) > 4) {
                    var artikelid = drink["artikelid"];
                    $("#" + artikelid).css("display", "none");
                }
            }
        }
    }

}

/**
 * display_menu_items
 * @desc Displays all items of a certain category in the menu frame
 * @param item - Category for menu bar
 * EXAMPLES: display_menu_items("beers") to show a list of all beers
 */
function display_menu_items(item) {
    hide_menu_views();
    $("#menu_view_" + item).css("display", "block");
    // Make a button appear active
    $("#menu_bar_" + item).css("background-color", "#ffb686");

    filter_items();

    update_view();
}

/**
 * clear_menu_order_body
 * @desc clear menu_order_body in order to update the content to current order in orders.js
 */
function clear_menu_order_body() {
    if("#menu_order_body") {
        $("#menu_order_body").remove();
        $("#drink_information").remove();
    }
}

/**
 * update_bar_order_list
 * @desc Update all the orders to the left for the bartender view
 */
function update_bar_order_list() {
    $("#menu_view_orders").remove();
    load_bar_view();
}
