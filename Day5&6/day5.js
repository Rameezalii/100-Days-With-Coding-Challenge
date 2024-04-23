// Day5
// Q13
var transports = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];
transports.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
// Q14
var guests = ["hamza", "ali", "rameez"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner."));
});
// Q15
var guestList = ["hamza", "ali", "rameez"];
var guestToRemove = "hamza";
console.log("".concat(guestToRemove, " can\u2019t make it to dinner"));
guestList.splice(0, 1, "Areeb");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", would you like to join me for dinner?"));
}
