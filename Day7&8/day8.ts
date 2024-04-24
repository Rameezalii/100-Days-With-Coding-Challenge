// Day8
/* 
let friends: string[] = ["Alice", "Bob", "Charlie"];

console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Charlie"; // Correcting the error by accessing a valid index.

let correctArr = friends[2];
console.log(correctArr); 

// Q23

let car = 'subaru';

console.log("Is car equal to 'subaru'? I predict True.")
console.log(car == 'subaru')

console.log("Is car == 'honda'? I predict True.")
console.log(car == 'honda')

console.log("Is car == 3 ? I predict False.")
console.log(car.length == 3)

console.log("Is car !== 'subaru' ?I predict False.")
console.log(car !== 'subaru')

console.log("Is car === 'SUBARU'? I predict True.")
console.log(car.toLowerCase() === 'subaru')

console.log("Is car == 'b' ?I predict True.")
console.log(car.charAt(2) == 'b')

console.log("Is car == 'subaru'? I predict False.")
console.log(car.toUpperCase() == 'subaru')

console.log("Is car > 5? I predict True.")
console.log(car.length > 5)

console.log("Is car < 4 ? I predict False.")
console.log(car.length < 4)

console.log("Is car === 'subaru'? I predict False.")
console.log(car.length === 4 )
 */
// Q24

// Tests for equality and inequality with strings:
let string1 = "hello";
let string2 = "world";

// true result 
console.log(string1 == "hello");
// false result 
console.log(string2 !== string2);



// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True