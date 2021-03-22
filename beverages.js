/*
 File: beverages.js
 Author: TODO: add names
This js document contains the beverages served at the pub.
 */

 /**
  *	get_string_drink
  *	@desc returns information about a drink from database

  *	@arg drink what kind of dring
  *     @arg index
  *     @arg key

  *	@arg drink what kind of drink
  *  @arg index
  *  @arg key

  */
 function get_drink_string(drink, index, key) {
 	return db[drink][index][key];
 }

 // Return both the key and container
function get_drink_string_full(drink, index, key) {
    return key + " : " + db[drink][index][key];
}


function orderItem(drinkType, id, amount) {
    let index = db[drinkType].findIndex(element => element.artikelid == id);
    newAntal = parseInt(db[drinkType][index].antal) + amount;
    db[drinkType][index].antal = newAntal.toString();
}
function getDrinkIdFromDB(drinkType, nr) {
    let wantedDrink = db[drinkType][nr];
    return wantedDrink.artikelid;
}
function getDrinkNameFromDB(drinktype, nr) {
    let wantedDrink = db[drinktype][nr];
    return wantedDrink.namn + " " + wantedDrink.namn2;
}
function getDrinkAmountFromDB(drinktype, nr) {
    let wantedDrink = db[drinktype][nr];
    return wantedDrink.antal;
}


 /**
  *	get_drink_object
  *	@desc returns a drink
  *	@arg drink what kind of drink
  *  @arg index
  */
 function get_drink_object(drink, index) {
     return db[drink][index];
 }

 /**
  *	get_drink_id
  *	@desc returns a drink ID
  *	@arg drink what kind of drink
  *  @arg index
  */
function get_drink_id(drink, index) {
    return db[drink][index]["artikelid"];
}
/**
    * get_drink_from_id
    * @desc returns drink from its id
    * @arg // IDEA: */
 function get_drink_from_id(id) {
     // we want to make sure we iterate over the drinks
     for (let drink_type of Object.keys(db)) {
         for (index in db[drink_type]) {
             if (db[drink_type][index]["artikelid"] == id) {
                 return db[drink_type][index];
             }
         }
     }
     console.log("Error: couldn't fint drink with that id in database.");
     return 0;
 }

 /**
    * get_drink_name_from_id
    * @desc returns a dink's name
    * @arg id
    */
function get_drink_name_from_id(id) {
    var drink = get_drink_from_id(id);
    return drink["namn"];
}

/**
   * get_drink_price_from_id
   * @desc returns a dink's price
   * @arg id
   */
function get_drink_price_from_id(id) {
   var drink = get_drink_from_id(id);
   return drink["prisinklmoms"];
}

/**
 * get_drink_amount_from_id
 * @desc returns a drink's amount from item id
 * @arg id
 */
function get_drink_amount_from_id(id) {
    // we want to make sure we iterate over the drinks
    for (let drink_type of Object.keys(db)) {
        for (index in db[drink_type]) {
            if (db[drink_type][index]["artikelid"] == id) {
                return parseInt(db[drink_type][index]["antal"]);
            }
        }
    }
    console.log("Error: couldn't fint drink with that id in database.");
    return 0;
}

/**
 * change_drink_amount_from_id
 * @desc changes the amount of a drink from item id
 * @arg id
 * @arg amount
 */
function change_drink_amount_from_id(id, amount) {
    // we want to make sure we iterate over the drinks
    for (let drink_type of Object.keys(db)) {
        for (index in db[drink_type]) {
            if (db[drink_type][index]["artikelid"] == id) {
                var new_amount = parseInt(db[drink_type][index]["antal"]) + amount;
                db[drink_type][index]["antal"] = new_amount;
                return new_amount;
            }
        }
    }
    console.log("Error: couldn't fint drink with that id in database.");
    return 0;
}


const menu_types = ["beers", "cocktails", "wine", "vip", "filter"];
const filter_types = ["gluten", "low_tannins", "lactose", "low_alcohol"];


const menu_order_info = ["name", "amount", "price"];

const beverages_info = {
    "cocktails" : [
        "namn",
        "alkoholhalt",
        "volym",
        "prisinklmoms"
    ],
    "beers" : [
        "namn",
        "namn2",
        "producent",
        "alkoholhalt",
        "volym",
        "prisinklmoms"
    ],
    "wine" : [
        "namn",
        "saljstart",
        "producent",
        "volym",
        "prisinklmoms",
        "tanniner"
    ],
    "vip": [
        "namn",
        "producent",
        "volym",
        "prisinklmoms"
    ]

}




db = {
    "cocktails" : [
        {
            "nr": "76601",
            "artikelid": "537306",
            "varnummer": "766",
            "namn": "Margarita Cocktail",
            "namn2": "",
            "prisinklmoms": "130.00 SEK",
            "volymiml": null,
            "prisperliter": null,
            "saljstart": "2011-04-01",
            "slutlev": " ",
            "varugrupp": "Drinkar och Cocktails",
            "forpackning": "Flaska",
            "forslutning": "Skruvkapsyl",
            "ursprung": "",
            "ursprunglandnamn": "Nederländerna",
            "producent": "Toorank",
            "leverantor": "Chris-Wine AB",
            "argang": "",
            "provadargang": "",
            "alkoholhalt": "10%",
            "modul": "",
            "sortiment": "BS",
            "ekologisk": "0",
            "koscher": "0",
            "volym": "33cl",
            "gluten_free": "1",
            "lactose_free": "1",
	    "antal": "10",
	    "gömd": false,
        }, {
            "nr": "10001",
            "artikelid": "25053",
            "varnummer": "100",
            "namn": "Braastad XO",
            "namn2": "",
            "prisinklmoms": "442.00",
            "volymiml": null,
            "prisperliter": null,
            "saljstart": "2000-08-07",
            "slutlev": " ",
            "varugrupp": "Cognac",
            "forpackning": "Flaska",
            "forslutning": "Naturkork",
            "ursprung": "Cognac, Fine Champagne",
            "ursprunglandnamn": "Frankrike",
            "producent": "Tiffon",
            "leverantor": "Arcus Sweden AB",
            "argang": "",
            "provadargang": "",
            "alkoholhalt": "40%",
            "modul": "",
            "sortiment": "FS",
            "ekologisk": "0",
            "koscher": "0",
            "volym": "15cl",
            "gluten_free": "1",
            "lactose_free": "1",
	    "antal": "10",
	    "gömd": false,
        },
        {
            "nr": "76814",
            "artikelid": "586675",
            "varnummer": "768",
            "namn": "3rd Rock Green Apple",
            "namn2": "",
            "prisinklmoms": "24.10 SEK",
            "volymiml": null,
            "prisperliter": null,
            "saljstart": "2011-10-01",
            "slutlev": " ",
            "varugrupp": "Drinkar och Cocktails",
            "forpackning": "Burk",
            "forslutning": "",
            "ursprung": "",
            "ursprunglandnamn": "Storbritannien",
            "producent": "G & J Greenall",
            "leverantor": "Interbrands Sweden AB",
            "argang": "",
            "provadargang": "",
            "alkoholhalt": "6%",
            "modul": "",
            "sortiment": "FS",
            "ekologisk": "0",
            "koscher": "0",
            "volym": "40cl",
            "gluten_free": "1",
            "lactose_free": "1",
	    "antal": "10",
	    "gömd": false,
        },
        {
            "nr": "76901",
            "artikelid": "429329",
            "varnummer": "769",
            "namn": "Bacardi",
            "namn2": "Mojito Classic",
            "prisinklmoms": "130.00 SEK",
            "volymiml": null,
            "prisperliter": null,
            "saljstart": "2010-03-24",
            "slutlev": " ",
            "varugrupp": "Drinkar och Cocktails",
            "forpackning": "Flaska",
            "forslutning": "Skruvkapsyl",
            "ursprung": "",
            "ursprunglandnamn": "Sverige",
            "producent": "Bacardi",
            "leverantor": "Bacardi AB",
            "argang": "",
            "provadargang": "",
            "alkoholhalt": "14.9%",
            "modul": "",
            "sortiment": "FS",
            "ekologisk": "0",
            "koscher": "0",
            "volym": "50cl",
            "gluten_free": "1",
            "lactose_free": "1",
	    "antal": "10",
	    "gömd": false,
        }
    ],
    "beers" : [
        {
            "nr": "8900603",
            "artikelid": "650516",
            "varnummer": "89006",
            "namn": "Hong Kong Dragon's Back",
            "namn2": "IPA",
            "prisinklmoms": "38.70 SEK",
            "volymiml": null,
            "prisperliter": null,
            "saljstart": "2012-03-01",
            "slutlev": " ",
            "varugrupp": "Öl, Ale",
            "forpackning": "Flaska",
            "forslutning": "",
            "ursprung": "",
            "ursprunglandnamn": "Folkrepubliken Kina",
            "producent": "The Hong Kong S.A.R. Brewing C",
            "leverantor": "World Beer Trading KB",
            "argang": "",
            "provadargang": "",
            "alkoholhalt": "5.2%",
            "modul": "",
            "sortiment": "BS",
            "ekologisk": "0",
            "koscher": "0",
            "volym": "33cl",
            "gluten_free": "1",
            "lactose_free": "1",
	    "antal": "10",
	    "gömd": false,

        },
        {
            "nr": "1104203",
            "artikelid": "828794",
            "varnummer": "11042",
            "namn": "Caspers Schwarz",
            "namn2": "S:t Eriks Bryggeri",
            "prisinklmoms": "19.90",
            "volymiml": null,
            "prisperliter": null,
            "saljstart": "2014-05-02",
            "slutlev": " ",
            "varugrupp": "\u00c3\u2013l, M\u00c3\u00b6rk lager",
            "forpackning": "Flaska",
            "forslutning": "",
            "ursprung": "",
            "ursprunglandnamn": "Sverige",
            "producent": "S:t Eriks Bryggeri",
            "leverantor": "Galatea Spirits AB",
            "argang": "",
            "provadargang": "",
            "alkoholhalt": "5.1%",
            "modul": "",
            "sortiment": "TSE",
            "ekologisk": "0",
            "koscher": "0",
            "volym": "33cl",
            "gluten_free": "1",
            "lactose_free": "1",
	    "antal": "10",
	    "gömd": false,
        },
        {
            "nr": "8966503",
            "artikelid": "674224",
            "varnummer": "89665",
            "namn": "Södra",
            "namn2": "Lager",
            "prisinklmoms": "20.20 SEK",
            "volymiml": null,
            "prisperliter": null,
            "saljstart": "2012-06-01",
            "slutlev": " ",
            "varugrupp": "Öl, Ljus lager",
            "forpackning": "Flaska",
            "forslutning": "",
            "ursprung": "",
            "ursprunglandnamn": "Sverige",
            "producent": "Södra Maltfabriken AB",
            "leverantor": "Södra Maltfabriken AB",
            "argang": "",
            "provadargang": "",
            "alkoholhalt": "5%",
            "modul": "",
            "sortiment": "BS",
            "ekologisk": "0",
            "koscher": "0",
            "volym" : "33cl",
            "gluten_free": "0",
            "lactose_free": "1",
	    "antal": "10",
	    "gömd": false,
        },
        {
            "nr": "8968101",
            "artikelid": "688329",
            "varnummer": "89681",
            "namn": "Praga",
            "namn2": "Dark Lager",
            "prisinklmoms": "17.90 SEK",
            "volymiml": null,
            "prisperliter": null,
            "saljstart": "2012-08-01",
            "slutlev": " ",
            "varugrupp": "Öl, Mörk lager",
            "forpackning": "Flaska",
            "forslutning": "",
            "ursprung": "",
            "ursprunglandnamn": "Tjeckien",
            "producent": "Pivovar Samson",
            "leverantor": "Brewery International Sweden A",
            "argang": "",
            "provadargang": "",
            "alkoholhalt": "4.5%",
            "modul": "",
            "sortiment": "BS",
            "ekologisk": "0",
            "koscher": "0",
            "volym": "33cl",
            "gluten_free": "0",
            "lactose_free": "1",
            "antal": "10",
	    "gömd": false,

        }
    ],
    "wine" : [
        {
            "nr": "199401",
            "artikelid": "858250",
            "varnummer": "1994",
            "namn": "Jacob's Creek UnVined",
            "namn2": "Shiraz",
            "prisinklmoms": "59.00",
            "volymiml": null,
            "prisperliter": null,
            "saljstart": "2014-09-01",
            "slutlev": " ",
            "varugrupp": "Alkoholfritt, Rött",
            "forpackning": "Flaska",
            "forslutning": "Skruvkapsyl",
            "ursprung": "South Eastern Australia",
            "ursprunglandnamn": "Australien",
            "producent": "Jacob's Creek Wines",
            "leverantor": "Pernod Ricard Sweden AB",
            "argang": "2013",
            "provadargang": "2013",
            "alkoholhalt": "0.5%",
            "modul": "",
            "sortiment": "FS\u00c3\u2013",
            "ekologisk": "0",
            "koscher": "0",
            "volym": "30cl",
            "tanniner": "2",
            "gluten_free": "1",
            "lactose_free": "1",
	    "antal": "10",
	    "gömd": false,
        },
        {
            "nr": "8970102",
            "artikelid": "326992",
            "varnummer": "89701",
            "namn": "Barberino",
            "namn2": "Grappa da Vinacce di Vernaccia",
            "prisinklmoms": "450.00 SEK",
            "volymiml": null,
            "prisperliter": null,
            "saljstart": "2008-06-02",
            "slutlev": " ",
            "varugrupp": "Grappa och Marc, Grappa",
            "forpackning": "Flaska",
            "forslutning": "",
            "ursprung": "",
            "ursprunglandnamn": "Italien",
            "producent": "Distilleria D.E.T.A",
            "leverantor": "Clydesdale AB",
            "argang": "",
            "provadargang": "",
            "alkoholhalt": "43%",
            "modul": "",
            "sortiment": "BS",
            "ekologisk": "0",
            "koscher": "0",
            "volym": "75cl",
            "tanniner": "5",
            "gluten_free": "1",
            "lactose_free": "1",
	    "antal": "10",
	    "gömd": false,
        },
        {
            "nr": "8974301",
            "artikelid": "330152",
            "varnummer": "89743",
            "namn": "Edition Chremisa",
            "namn2": "Blauer Zweigelt",
            "prisinklmoms": "167.00 SEK",
            "volymiml": null,
            "prisperliter": null,
            "saljstart": "2008-06-02",
            "slutlev": " ",
            "varugrupp": "Rött vin",
            "forpackning": "Flaska",
            "forslutning": "",
            "ursprung": "NiederÖsterreich, Kremstal",
            "ursprunglandnamn": "Österrike",
            "producent": "Winzer Krems",
            "leverantor": "Granqvist Beverage House AB",
            "argang": "2011",
            "provadargang": "",
            "alkoholhalt": "13.5%",
            "modul": "",
            "sortiment": "BS",
            "ekologisk": "0",
            "koscher": "0",
            "volym": "15cl",
            "tanniner": "4",
            "gluten_free": "1",
            "lactose_free": "1",
	    "antal": "10",
	    "gömd": false,
        },
        {
            "nr": "9001201",
            "artikelid": "786026",
            "varnummer": "90012",
            "namn": "Cloudy Bay",
            "namn2": "Chardonnay",
            "prisinklmoms": "221.00 SEK",
            "volymiml": null,
            "prisperliter": null,
            "saljstart": "2013-12-02",
            "slutlev": " ",
            "varugrupp": "Vitt vin,  Fylligt & Smakrikt",
            "forpackning": "Flaska",
            "forslutning": "",
            "ursprung": "Marlborough",
            "ursprunglandnamn": "Nya Zeeland",
            "producent": "Cloudy Bay",
            "leverantor": "Mohabt Hennessy Sverige AB",
            "argang": "2011",
            "provadargang": "2011",
            "alkoholhalt": "14%",
            "modul": "",
            "sortiment": "TSE",
            "ekologisk": "0",
            "koscher": "0",
            "volym": "15cl",
            "tanniner": "1",
            "gluten_free": "1",
            "lactose_free": "1",
	    "antal": "10",
	    "gömd": false,
        },

    ],
    "vip" : [
        {
            "nr": "0000000",
            "artikelid": "666666",
            "namn": "Mellanmjölk",
            "namn2": "Mjölk",
            "prisinklmoms": "5.00 SEK",
            "volymiml": null,
            "prisperliter": null,
            "saljstart": "2013-12-02",
            "slutlev": " ",
            "varugrupp": "Diverse, vip",
            "forpackning": "Kartong",
            "forslutning": "",
            "ursprung": "Skåne",
            "ursprunglandnamn": "Sverige",
            "producent": "Arla",
            "leverantor": "Arla AB",
            "argang": "2011",
            "provadargang": "2011",
            "alkoholhalt": "1%",
            "modul": "",
            "sortiment": "HAHA",
            "ekologisk": "1",
            "koscher": "0",
            "volym": "25cl",
            "gluten_free": "1",
            "lactose_free": "0",
	    "antal": "10",
	    "gömd": false,
        }
    ]
}
