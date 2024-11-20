// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  // Create a Map
const fruits1 = new Map();

// Set Map Values
fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);

fruits1.get("apples");    // Returns 500

//Maps are Objects
//typeof returns object:
typeof fruits1; //Object

/*
Object	                           |  Map
-----------------------------------+-------------------------------------
>Not directly iterable 	           | >Directly iterable
>Do not have a size property 	   | >Have a size property
>Keys must be Strings (or Symbols) | >Keys can be any datatype
>Keys are not well ordered 	       | >Keys are ordered by insertion
>Have default keys 	               | >Do not have default keys
*/