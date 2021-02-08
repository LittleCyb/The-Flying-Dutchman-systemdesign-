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
            'menu_bar_spirits',
            'login_manager'],
    'pics': ['language',
            'logo'],

    'en' : {
        'language' : "sv.jpg",
        'logo' : "logo.png",
        'login_text': "Login as admin, enter password below",
        'login_button': "Login",
        'menu_bar_beers': "Beer",
        'menu_bar_spirits': "Spirits",
        'login_manager': "Login as manager"
    },

    'sv' : {
        'language': "eng.jpg",
        'logo' : "logo.png",
        'login_text': "Logga in som admin, ange lösenord nedan",
        'login_button': "Logga in",
        'menu_bar_beers': "Öl",
        'menu_bar_spirits': "Sprit",
        'login_manager': "Logga in som manager"
    }
}

function get_string(key) {
    return dict[language][key];
}

function change_language() {
    if (language =='en') {
        language = 'sv';
    } else { language = 'en'};
    update_view();
}

/* END OF FILE */
