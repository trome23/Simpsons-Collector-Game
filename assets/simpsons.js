//variables to represent the start of the game
var wins = 0;
var losses = 0;
var userNumber = 0;

//this generates a random computer guess from 19-120
var computerGuess = Math.floor(Math.random() * (120 - 19)) + 19;
console.log(computerGuess);

//Grabs the randCompNumber class and adds text to the page
$("#randomCompNumber").html("Random Number: " + computerGuess);

var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


