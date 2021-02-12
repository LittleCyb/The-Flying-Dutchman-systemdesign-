/*
 File: beverages.js
 Author: TODO: add names
 this js document contains the beverages served at the pub.
 */

var drink = 'beers';

db = {
    "cocktails" : [
    ],
    "beers" : [
    ],
    "wine" : [
    ],
    "vip" : [
    ]
}

function get_drink_string(key) {
    return db[drink][key];
}

function display_beers() {
    drink = 'beers';
}

function display_wine() {
    drink = 'wine';
}

function display_cocktails() {
    drink = 'cocktails';
}

function display_vip() {
    drink = "vip";
}
