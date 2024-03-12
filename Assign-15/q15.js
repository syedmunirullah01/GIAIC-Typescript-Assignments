let invitedGuests = ["Mark Zukerberg", "Albert Einstein", "Elon Musk"];

invitedGuests.forEach(invitedGuests => {
    console.log(`Dear ${invitedGuests} , Would You Like To Join Me at Dinner?`);
});

let notToAttend = "Mark Zukerberg";
console.log(`${notToAttend} can't make it to dinner.`);

let newGuest = "Nikola Tesla";
invitedGuests[invitedGuests.indexOf(notToAttend)] = newGuest;

invitedGuests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
