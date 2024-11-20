// Create a Set
const letters = new Set(["a","b","c","c"]);
console.log(letters); //[a,b,c] //no duplicates allowed

// Create a Set
const letters1 = new Set();

// Add Values to the Set
letters1.add("a");
letters1.add("b");
letters1.add("c");
letters1.add("a");
letters1.add("b");
letters1.add("c");
letters1.add("c");
letters1.add("c");
letters1.add("c");
letters1.add("c");
letters1.add("c");

console.log(letters1); //[a.b.c] //no duplicates allowed
