// Day10

// Q28

let age : number = 25

if(age < 2){
    console.log("The person is a baby.")
}else if(age >= 2 && age < 4){
    console.log("The person is a toddler.")
}else if(age >= 4 && age < 13){
    console.log("The person is a kid.")
}else if(age >= 13 && age < 20){
    console.log("The person is a teenager.")
}else if(age >= 20 && age < 65){
    console.log("The person is an adult.")
}else{
    console.log("The person is an elder.")
}


// Q29

let favorite_fruits: string[] = ["apples", "bananas", "cherries"];

if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
// Continue with more fruits

// Q30

let userNames: string[] = ["admin", "user1", "user2", "user3","user4"];

userNames.forEach((userName) => {
    if (userName === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${userName}, thank you for logging in again.`);
    }
}); 