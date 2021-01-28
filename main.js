// document ready not needed, since script tag is at the end of the document

// login

var dom_login = document.createElement("div");
document.body.appendChild(dom_login);
dom_login.id = "login";

var dom_image_0 = document.createElement("img");
dom_login.appendChild(dom_image_0);
dom_image_0.src = "logo.png";

var dom_username = document.createElement("input");
dom_login.appendChild(dom_username);
dom_username.placeholder = "Enter username";

var dom_password = document.createElement("input");
dom_login.appendChild(dom_password);
dom_password.placeholder = "Enter password";

var dom_login_button = document.createElement("input");
dom_login.appendChild(dom_login_button);
dom_login_button.id = "login_button";
dom_login_button.type = "button";
dom_login_button.value = "Log in";

// guest

var dom_guest = document.createElement("div");
document.body.appendChild(dom_guest);
dom_guest.id = "guest";
dom_guest.classList.add("main")

var dom_image_1 = document.createElement("img");
dom_guest.appendChild(dom_image_1);
dom_image_1.src = "logo.png";

var dom_menu = document.createElement("div");
dom_guest.appendChild(dom_menu);
dom_menu.id = "menu";

var dom_order = document.createElement("div");
dom_guest.appendChild(dom_order);
dom_order.id = "order";

for (var i = 0; i < 4; i++) {
	var dom_menu_item = document.createElement("div");
	dom_menu.appendChild(dom_menu_item);
	dom_menu_item.classList.add("menu_item");
	dom_menu_item.textContent = "beer " + (i+1);
	
	var dom_order_item = document.createElement("div");
	dom_order.appendChild(dom_order_item);
	dom_order_item.classList.add("order_item");
	dom_order_item.textContent = "beer " + (i+1) + " x1";
}

var dom_balance = document.createElement("div");
dom_guest.appendChild(dom_balance);
dom_balance.id = "balance";
dom_balance.textContent = "Money: " + 123;





// jquery from earlier

$("#login_button").click(function() {
	$("#login").css("display", "none");
	$(".main").css("display", "block");
	// TODO: different logins for different user types ...
});
