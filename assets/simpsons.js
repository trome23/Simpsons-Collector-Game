//variables to represent the start of the game
var wins = 0;
var losses = 0;
var userNumber = 0;

//this generates a random computer guess from 19-120
var computerGuess = Math.floor(Math.random() * (120 - 19)) + 19;
console.log(computerGuess);

//Grabs the randCompNumber class and adds text to the page
$("#randomCompNumber").html("Random Number: " + computerGuess);

//variables that generate random #'s for each of the Simpson Characters
var simp1 = Math.floor(Math.random() * (12-1)) + 1;
var simp2 = Math.floor(Math.random() * (12-1)) + 1;
var simp3 = Math.floor(Math.random() * (12-1)) + 1;
var simp4 = Math.floor(Math.random() * (12-1)) + 1;

//Reset function to call when the game is over and needs to be reset to the start
function reset() {
    userNumber = 0;
    $("#your-number").html("Your Number: " + userNumber);
    computerGuess = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#randomCompNumber").html("Random Number: " + computerGuess);
    simp1 = Math.floor(Math.random() * 12) + 1;
    simp2 = Math.floor(Math.random() * 12) + 1;
    simp3 = Math.floor(Math.random() * 12) + 1;
    simp4 = Math.floor(Math.random() * 12) + 1;
}

//Game logic with if/else statement to find out if the user has to keep playing or has won/lost
function gameStart() {
    //if the user's combined total equals the random computer #, wins go up, function resets
    if (userNumber === computerGuess) {
        wins++;
        $("#wins").html("Wins: " + wins);
        alert("Great job, YOU WIN!");
        reset();
    } //if user's number is greater than the random computer #, then they lose and the game resets
    else if (userNumber > computerGuess) {
        losses++;
        $("#losses").html("Losses: " + losses);
        alert("Try again, YOU LOSE!");
        reset();
    }
}

//creating the add event listeners, or "on clicks", to the Simpson images and pushing them to the DOM
$("#simp1").click(function() {
    userNumber += simp1;
    $("#your-number").html("Your Number: " + userNumber);
    gameStart();
})

$("#simp2").click(function() {
    userNumber += simp2;
    $("#your-number").html("Your Number: " + userNumber);
    gameStart();
})

$("#simp3").click(function() {
    userNumber += simp3;
    $("#your-number").html("Your Number: " + userNumber);
    gameStart();
})

$("#simp4").click(function() {
    userNumber += simp4;
    $("#your-number").html("Your Number: " + userNumber);
    gameStart();
})


