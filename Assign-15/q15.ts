let guests: string[] = ["Mark Zukerberg", "Nikola Tesla", "Marie Curie"];

let notToAttend = "Mark Zukerberg";
console.log(`${notToAttend} can't make it to dinner.`);

let newGuest = "Elon Musk";
guests[guests.indexOf(notToAttend)] = newGuest;

guests.forEach(guest => { console.log(`Dear ${guest}, would you like to join me for dinner?`);
})
