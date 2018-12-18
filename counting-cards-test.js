/*
Write a card counting function. 
It will receive a card parameter, which can be a number or a string, 
and increment or decrement the global count variable according to the card's value (2-6 +1 / 7-8 +-0 / 9-14 -1).
The function will then return a string with the current count and the string "Bet" if the count is positive, 
or "Hold" if the count is zero or negative.
*/

var count = []; // Start count

function cardCount(card) {
    switch (card){
        case 2: 
        case 3: 
        case 4: 
        case 5: 
        case 6:
            count++;
            break;
        
        case 10: 
        case 'J': 
        case 'Q': 
        case 'K': 
        case 'A':
            count--;
            break;
    }

    var holdOrBet = 'Hold'; 
    if (count > 0) {
        holdOrBet = 'Bet'
    
    }
    
    return count + ' ' + holdOrBet;
}

console.log(cardCount('A'));
console.log(cardCount(10));
console.log(cardCount(5));
console.log(cardCount(2));
console.log(cardCount(4));
console.log(cardCount(8));