// Q16
/*
let guest_List : string[] = ["Rameez","Ali","Khan"];

console.log("Great news! I found a bigger dinner table!");

guest_List.unshift("Ahmed");
guest_List.splice(guest_List.length/2, 0, "Saleem");
guest_List.push("Zahid");

for (let i = 0; i < guest_List.length; i++) {
    console.log("Dear " + guest_List[i] + ", I would like to invite you to dinner.");
}

// Q17

let dinnerGuests : string[] = ["Alice", "Bob", "Charlie", "David", "Eve" , "Rameez","Anas","Ali"];

console.log("Unfortunately, the dinner table can only accommodate two guests.");
while(dinnerGuests.length > 2){
    let removedGuest = dinnerGuests.pop();
    console.log("Sorry " + removedGuest + ", you are not invited to dinner.");
};

for (let i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear " + dinnerGuests[i] + ", you are still invited to dinner.");
}
dinnerGuests.splice(0,dinnerGuests.length);
console.log(`${dinnerGuests}End of the program`);
 */
// Q18
var places = ["Karachi", "Lahore", "Islamabad", "Quetta", "Hyderabad"];
console.log("Orignal Order : ".concat(places, ": Places"));
console.log("Alphabetical order: ", places.sort());
console.log("Orignal Order : ".concat(places, ": Places"));
console.log("Alphabetical order: ", places.sort().reverse());
console.log("Orignal Order : ".concat(places, ": Places"));
places.reverse();
console.log("Reversed order:", places);
