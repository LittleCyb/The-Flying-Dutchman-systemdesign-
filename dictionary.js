/*
 File: dictionary.js

 Author: TODO: add names


 this js document contains the language data and related functions for the application
 */

var language = 'en'

dict = {
    'keys': ['login_text',
            'login_button',
            'menu_bar_beers',
            'menu_bar_spirits',
            'footer'],

    'en' : {
        'login_text': "Login as admin, enter password below",
        'login_button': "Login",
        'menu_bar_beers': "Beer",
        'menu_bar_spirits': "Spirits",
        'footer' : "Design by Shores of Silence"
    },

    'sv' : {
        'login_text': "Logga in som admin, ange lösenord nedan",
        'login_button': "Logga in",
        'menu_bar_beers': "Öl",
        'menu_bar_spirits': "Sprit",
        'footer' : "Design by Shores of Silence"
    }
}

function get_string(key) {
    return dict[language][key];
}

function change_language() {
    if (language =='en') {
        language = 'sv';
    } else { language = 'en'};
    update_viev();
}

/* END OF FILE */
