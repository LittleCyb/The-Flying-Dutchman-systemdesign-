/*
 File: beverages.js
 Author: TODO: add names
This js document contains the beverages served at the pub.
 */

 /**
  *	get_string_drink
  *	@desc returns information about a drink from database
  *	@arg drink what kind of drink
  *  @arg index
  *  @arg key
  */
 function get_drink_string(drink, index, key) {
 	return db[drink][index][key];
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


const menu_types = ["beers", "cocktails", "wine", "vip"];
const information = {
    "beers" : ["namn", "namn2", "producent", "alkoholhalt", "volym", "prisinklmoms"],
    "cocktails": ["namn", "alkoholhalt", "volym", "prisinklmoms"],
    "wine": ["namn", "saljstart", "producent", "varugrupp", "volym", "prisinklmoms", "tanniner"],
    "vip": ["namn", "producent", "volym", "prisinklmoms"]
}

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
        "varugrupp",
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
        }
    ],
    "wine" : [
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
        }
    ]
}
