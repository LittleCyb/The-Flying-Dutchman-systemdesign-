# The Flying Dutchman av "The Shores of Silence"

Författare: Gideon Landeman, Simon Jaklovsky and Victor Hwasser.

### Vår process

Vårt fokus låg vid att först implementera "course ased requirements", "manager", "bartender" och "normal". Eftersom vi såg dem som grundpelaran för ett funktionellt system. Dock började vi projektet med att designa dels hur vi ville att applikationen skulle se ut, men även hur en potentiell användare skulle tänkas navigera systemet. Följande fråga häjlpte också i designprocessen, "Vad vill en kund/bartender/manager göra?", sedan kunde vi utgå därifrån för att bestämma vilka skärmar som behövde utformas för att ta en användare ifrån start till sitt mål.


### Avvikelser ifrån kravspecifikationen
Vårt projekt levererar på följande punkter utifrån kravspecifikationen (A - avklarat, X - inte klar). 

NORMAL (A)
1. Order drinks
4. Change order
5. Pay at bar

VIP (X)
6. Log in (at table)
7. Log out
8. See account balance (at table)
9. Order and pay from account (at table)
10. Fetch special beer/drink from fridge or bar (with combination lock) (K)
11. Add to account (at bar)

BARTENDER (båda)
12. Log in (A)
13. Log out (A)
14. See availability of product (General req) (A)
    a. Remove product (temporarily) from menu (A - genom managern)
15. Modify/Calculate price of product (X)
16. Offer product on the house (X)
    a. hålla koll på utgifter  (X)
    b. Update number in stock (A)
17. Notify security of problem  (X)
18. Get order for certain table (A)
    a. Change items on order (A)


MANAGER (A)
20. Manage stock 
    a. Revise amounts 
    b. Order refill of items
    c. --> fråga Lars? Add/remove items from menu (frågetecken)

GENERAL (A)
23. Find products according to content
    a. Allergies - Gluten, Nuts, Lactose
    b. Alcohol content
    c. Tannins (for wine)

NON-FUNCTIONAL
24. Order can consist of up to ten items at the same time (X)
25. Bertender should be notified if an item is running low (A)
26. Security notification should be accessible within three seconds (X)
27. A warning should be given when there are less than five items left of a certain type (A)

ADDITIONAL DETAILS (A)
27. The interface must connect to the thematic background of the Pub 
28. Drinks should be listed with the following details: 
    a. Beers 
        i.Name
        ii.Producer/Brewery
        iii.Country
        iv.Type (IPA, lager)
        v.Strength
        vi.Serving size (tap, bottle)
        vii.Price
    b. Wine
        .Name
        i.Year
        ii.Producer
        iii.Type
        iv.Grape
        v.Serving size (glass, bottle)
    c. Coctails/Drinks
        .Name
        i.Strength
        ii.Contents/Recipe (for allergy purposes)
        iii.Serving size
29. For the bartender and manager, the number of remaining servings should also
be shown
    a. It should be easy to see when an item is low in number

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
