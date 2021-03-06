/*
 File: dictionary.js
 Author: Simon Jaklovksy, Gideon Landeman, Victor Hwasser
 this js document contains the language data and related functions for the application
 */

var language = 'sv';

dict = {
    'keys': [
    	'login_text',
        'logout',
        'login_button',
        'choose_welcome',
        'menu_bar_beers',
        'menu_bar_cocktails',
        'menu_bar_wine',
        'menu_bar_vip',
        'menu_bar_order',
        'menu_bar_filter',
        'menu_bar_orders',
        'menu_order_remove',
        'login_manager',
        'login_vip',
        'menu_order_name',
        'menu_order_amount',
        'menu_order_price',
        'undo_button',
        'redo_button',
        'accept_changes_button',
        'accept_order_button',
        'decline_order_button',
        'purchase_button',
        'total_cost_text',
    	'vip_login_label',
    	'vip_login_button',
        'checkbox_gluten',
        'checkbox_low_tannins',
        'checkbox_lactose',
        'checkbox_low_alcohol',
        'drink_info',
        'drink_amount_text'
    ],
    'pics': [
    	'language',
        'logo',
    ],
    'en' : {
        'language' : "flags/sv.gif",
        'logo' : "logo.png",
        'login_text': "Log in as admin, enter password below",
        'logout' : "Logout",
        'login_button': "Log in",
        'choose_welcome': "Please choose table for the company",
        'menu_bar_beers': "Beer",
        'menu_bar_cocktails': "Cocktails",
        'menu_bar_wine': "Wine",
        'menu_bar_vip': "VIP",
        'menu_bar_filter': "Filter",
        'menu_bar_orders': "Orders",
        'login_manager': "Login as manager",
        'login_vip': "VIP login",
        'menu_order_name': "Name",
        'menu_order_amount': "Amount",
        'menu_order_price': "Price",
        'menu_order_remove': "Remove",
        'undo_button': "Undo",
        'redo_button': "Redo",
        'accept_order_button': "Accept",
        'decline_order_button': "Decline",
        'purchase_button': "Send order",
        'total_cost_text': "Total",
    	'vip_login_label': "Log in as VIP",
    	'vip_login_button': "Log in",
        'checkbox_gluten': "Gluten-free",
        'checkbox_low_tannins': "Low tannins content (< 3/5)",
        'checkbox_lactose': "Lactose-free",
        'checkbox_low_alcohol': "Low alcohol content (< 4%)",
        'drink_info' : "Drink information",
        'drink_amount_text': "Amount: "
    },

    'sv' : {
        'language': "flags/en.gif",
        'logo' : "logo.png",
        'login_text': "Logga in som admin, ange lösenord nedan",
        'logout' : "Logga ut",
        'login_button': "Logga in",
        'choose_welcome': "Vänligen välj bord för sällskapet",
        'menu_bar_beers': "Öl",
        'menu_bar_cocktails': "Cocktails",
        'menu_bar_wine': "Vin",
        'menu_bar_vip': "VIP",
        'menu_bar_filter': "Filtrera",
        'menu_bar_orders': "Kundordrar",
        'login_manager': "Logga in som manager",
        'login_vip': "VIP login",
        'menu_order_name': "Namn",
        'menu_order_amount': "Mängd",
        'menu_order_price': "Pris",
        'menu_order_remove': "Ta bort",
        'undo_button': "Ångra",
        'redo_button': "Gör om",
        'accept_order_button': "Godkänn",
        'decline_order_button': "Avböj",
        'purchase_button': "Skicka order",
        'total_cost_text': "Summa",
    	'vip_login_label': "Logga in som VIP",
    	'vip_login_button': "Logga in",
        'checkbox_gluten': "Glutenfri",
        'checkbox_low_tannins': "Lågt innehåll av tanniner (< 3/5)",
        'checkbox_lactose': "Laktosfri",
        'checkbox_low_alcohol': "Låg alkoholhalt (< 4%)",
        'drink_info' : "Information om drink",
        'drink_amount_text': "Antal: "
    }
}

order_info_translation = {
    'en' : {
        "namn": "Name",
        "namn2": "Description",
        "alkoholhalt": "Alcohol content",
        "producent": "Producer",
        "volym": "Volume",
        "prisinklmoms": "Price (VAT included)",
        "saljstart": "Date",
        "tanniner": "Tannins content",
    },
    'sv' : {
        "namn": "Namn",
        "namn2": "Description",
        "alkoholhalt": "Alkoholhalt",
        "producent": "Producent",
        "volym": "Volym",
        "prisinklmoms": "Pris (inkl. moms)",
        "saljstart": "Datum",
        "tanniner": "Tannin innehåll",
    }
}

/**
    * translate_info_point
    * @desc translates a point of information into the appropriate language
    * @arg info_point to be translated
    */
function translate_info_point(info_point) {
    return(order_info_translation[language][info_point]);
}

flags = {
    "Nederländerna": "flags/nl.gif",
    "Storbritannien": "flags/en.gif",
    "Sverige": "flags/sv.gif",
    "Folkrepubliken Kina": "flags/ch.gif",
    "Tjeckien": "flags/cz.gif",
    "Italien": "flags/it.gif",
    "Österrike": "flags/au.gif",
    "Nya Zeeland": "flags/nz.gif",
    "Frankrike": "flags/fr.gif",
    "Australien": "flags/aus.gif"
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
