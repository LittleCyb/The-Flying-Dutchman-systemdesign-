/*
    File: orders.js
    Author: Gideon Landeman, Simon Jaklovsky, Victor Hwasser
    Keeps track off all pending orders
    */

    /** clear_orders
     *	@desc to clear unfinished orders if user refreshes the page/exits page
     */
    function clear_orders() {
    	orders[get_current_table_number()] = [];
    }

    /** get_order
     *	@desc gets order
     *  @arg table_number
     */
     function get_order(table_number) {
         return orders[table_number];
     }

orders = {
    '1': [

    ],
    '2': [

    ],
    '3': [

    ],
    '4': [

    ],
    '5': [

    ],
    '6': [

    ],
    '7': [

    ],
    '8': [

    ],
    '9': [

    ]
}
