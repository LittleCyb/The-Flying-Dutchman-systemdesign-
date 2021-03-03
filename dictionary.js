/*
 File: dictionary.js
 Author: TODO: add names
 this js document contains the language data and related functions for the application
 */

var language = 'sv'

dict = {
    'keys': ['login_text',
            'login_button',
            'menu_bar_beers',
            'menu_bar_cocktails',
            'menu_bar_wine',
            'menu_bar_vip',
            'menu_bar_order',
            'login_manager',
            'login_vip'],
    'pics': ['language',
            'logo'],

    'en' : {
        'language' : "flags/sv.gif",
        'logo' : "logo.png",
        'login_text': "Login as admin, enter password below",
        'login_button': "Login",
        'menu_bar_beers': "Beer",
        'menu_bar_cocktails': "Cocktails",
        'menu_bar_wine': "Wine",
        'menu_bar_vip': "VIP",
        'menu_bar_order': "My Order",
        'login_manager': "Login as manager",
        'login_vip': "VIP login",
        'menu_order_name': "Name",
        'menu_order_amount': "Amount",
        'menu_order_price': "Price",
        'undo_button': "Undo",
        'redo_button': "Redo",
        'total_cost_text': "Total"
    },

    'sv' : {
        'language': "flags/en.gif",
        'logo' : "logo.png",
        'login_text': "Logga in som admin, ange lösenord nedan",
        'login_button': "Logga in",
        'menu_bar_beers': "Öl",
        'menu_bar_cocktails': "Cocktails",
        'menu_bar_wine': "Vin",
        'menu_bar_vip': "VIP",
        'menu_bar_order': "Beställning",
        'login_manager': "Logga in som manager",
        'login_vip': "VIP login",
        'menu_order_name': "Namn",
        'menu_order_amount': "Mängd",
        'menu_order_price': "Pris",
        'undo_button': "Ångra",
        'redo_button': "Gör om",
        'total_cost_text': "Summa"
    }
}

flags = {
    "Nederländerna": "flags/nl.gif",
    "Storbritannien": "flags/en.gif",
    "Sverige": "flags/sv.gif",
    "Folkrepubliken Kina": "flags/ch.gif",
    "Tjeckien": "flags/cz.gif",
    "Italien": "flags/it.gif",
    "Österrike": "flags/au.gif",
    "Nya Zeeland": "flags/nz.gif"
}

function get_string(key) {
    return dict[language][key];
}

function change_language() {
    if (language =='en') {
        language = 'sv';
    } else { language = 'en'};
}

function get_flag(country) {
	return flags[country];
}

/* END OF FILE */
