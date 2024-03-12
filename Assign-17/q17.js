let invitedGuests = ["Mark Zukerberg", "Albert Einstein", "Elon Musk"];

console.log("Great news! I found a bigger dinner table!");


//Adding more guests
invitedGuests.unshift("Issac Newton");

invitedGuests.splice(invitedGuests.length / 2, 0, "Charles Darwin");

invitedGuests.forEach(invitedGuests => {
    console.log(`Dear ${invitedGuests}, would you like to join me for dinner?`);
});


console.log("Unfortunately, I can only invite two people for dinner.");


while (invitedGuests.length > 2) {
    let removedGuest = invitedGuests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

invitedGuests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

invitedGuests.splice(0, invitedGuests.length);
console.log(invitedGuests); //shows an empty list
