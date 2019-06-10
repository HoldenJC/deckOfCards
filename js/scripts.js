$(function(){

var cards = [];
var cardHighcards = ["jack", "queen", "king", "ace"];
var suits = ["clubs", "diamonds", "hearts", "spades"]


var finalCards = [];
  suits.forEach(function(suit){
    var cards = [];
    for (var i = 2; i < 11; i++){
      cards.push(i);
    }
    cardHighcards.forEach(function(card){
      cards.push(card);
    });
    cards.forEach(function(card){
      cards[cards.indexOf(card)] = card + " of " + suit;
    });
    finalCards = finalCards.concat(cards);
  });
  console.log(finalCards.toString());

  // var python = [2, 4, 6,6 , 2,342,34, 7,89, 23];
  // python.forEach(function(number){
  //   number++;
  // });
  //
  // for(var i = 0; i < python.length; i++){
  //   python[i]++;
  // }
  // console.log(python);


});
