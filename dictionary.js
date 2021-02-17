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
        'language' : "sv.jpg",
        'logo' : "logo.png",
        'login_text': "Login as admin, enter password below",
        'login_button': "Login",
        'menu_bar_beers': "Beer",
        'menu_bar_cocktails': "Cocktails",
        'menu_bar_wine': "Wine",
        'menu_bar_vip': "VIP",
        'menu_bar_order': "My Order",
        'login_manager': "Login as manager",
        'login_vip': "VIP login"
    },

    'sv' : {
        'language': "eng.jpg",
        'logo' : "logo.png",
        'login_text': "Logga in som admin, ange lösenord nedan",
        'login_button': "Logga in",
        'menu_bar_beers': "Öl",
        'menu_bar_cocktails': "Cocktails",
        'menu_bar_wine': "Vin",
        'menu_bar_vip': "VIP",
        'menu_bar_order': "Beställning",
        'login_manager': "Logga in som manager",
        'login_vip': "VIP login"
    }
}

function get_string(key) {
    return dict[language][key];
}

function change_language() {
    if (language =='en') {
        language = 'sv';
    } else { language = 'en'};
}

/* END OF FILE */
