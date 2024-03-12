let invitedGuests = ["Mark Zukerberg", "Albert Einstein", "Elon Musk"];

console.log("Great news! I found a bigger dinner table!");

//Adding more guests
invitedGuests.unshift("Issac Newton");

invitedGuests.splice(invitedGuests.length / 2, 0, "Charles Darwin");

invitedGuests.forEach(invitedGuests => {
    console.log(`Dear ${invitedGuests}, would you like to join me for dinner?`);
});
