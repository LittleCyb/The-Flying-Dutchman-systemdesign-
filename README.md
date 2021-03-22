# The Flying Dutchman av "The Shores of Silence"

Författare: Gideon Landeman, Simon Jaklovsky and Victor Hwasser.

### Back to login - knapp
Vi har lämnat kvar en knapp med texten "back to login" för att underlätta debuggning/genomgång av programmet. Den är dock endast ämnad för att gå tillbaka till login ifrån manager/bartender/menyn, alltså inte "välj bord menyn". 

### Vår process
Vårt fokus låg vid att först implementera "course ased requirements", "manager", "bartender" och "normal". Eftersom vi såg dem som grundpelaran för ett funktionellt system. Dock började vi projektet med att designa dels hur vi ville att applikationen skulle se ut, men även hur en potentiell användare skulle tänkas navigera systemet. Följande fråga häjlpte också i designprocessen, "Vad vill en kund/bartender/manager göra?", sedan kunde vi utgå därifrån för att bestämma vilka skärmar som behövde utformas för att ta en användare ifrån start till sitt mål.


### Avvikelser ifrån kravspecifikationen
Vårt projekt levererar på följande punkter utifrån kravspecifikationen (A - avklarat, X - inte klar). 

NORMAL (A)
1. Order drinks
2. Change order
3. Pay at bar

VIP (X)
1. Log in (at table)
2. Log out
3. See account balance (at table)
4. Order and pay from account (at table)
5. Fetch special beer/drink from fridge or bar (with combination lock)
6. Add to account (at bar)

BARTENDER (båda)
1. Log in (A)
2. Log out (A)
3. See availability of product (General req) (A) 
4. Remove product (temporarily) from menu (A - genom managern)
5. Modify/Calculate price of product (X)
6. Offer product on the house (X)
7. Keep track of costs  (X)
8. Update number in stock (A)
9. Notify security of problem  (X)
10. Get order for certain table (A)
11. Change items on order (A)

MANAGER (A)
1. Manage stock
2. Revise amounts 
3. Order refill of items
4. Add/remove items from menu (frågetecken)


GENERAL (A)
1. Find products according to content
2. Allergies - Gluten, Nuts, Lactose
3. Alcohol content
4. Tannins (for wine)

NON-FUNCTIONAL
1. Order can consist of up to ten items at the same time (X)
2. Bertender should be notified if an item is running low (A)
3. Security notification should be accessible within three seconds (X)
4. A warning should be given when there are less than five items left of a certain type (A)

ADDITIONAL DETAILS (A)
1. The interface must connect to the thematic background of the Pub 
2. Drinks should be listed with the following details: 
3. Beers 
4. Wine
5. Coctails/Drinks
6. For the bartender and manager, the number of remaining servings should also
be shown
7. It should be easy to see when an item is low in number

COURSE BASED REQUIREMENTS (A)
1. The system should be implemented using MVC
2. The system should provide two distinct interface languages
3. The system should implement Drag and Drop for a suitable action
4. The system should implement an UNDO/REDO functionality
5. The system should be possible to resize between the bartender view (27”) to table
   tablet (9”-10”)
6. The system should be reasonably debugged
7. The code needs to be correctly documented
8. In order to pass the course you only need to be able to show that the system
can run on one platform, on one browser.
