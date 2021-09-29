// Code your solutions in this file

/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)  
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}

wrapGifts(gifts);
*/

const arrOfNames = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        arrOfNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        debugger;
    }

    return arrOfNames;
}

function countDown(positiveNumber) {
    let i = positiveNumber;
    while (i >= 0) {
        console.log(i--);
        
    }

    return i;

}

console.log(countDown(10));