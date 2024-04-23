// Day5

// Q13

let transports: string[] = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];

transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});


// Q14

let guests : string[] = ["hamza","ali","rameez"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
});


// Q15

let guestList : string[] = ["hamza","ali","rameez"];

let guestToRemove : string = "hamza";
console.log(`${guestToRemove} can’t make it to dinner`);

guestList.splice(0,1,"Areeb");

for(let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, would you like to join me for dinner?`);
}