let n = Math.random();
n = n * 6;
let randomNumber1 = Math.floor(n) + 1;

let RandomDice = "dice" + randomNumber1 + ".png"; // = Dice1.png to Dice6.png

let randomImageSource = "images/" + RandomDice; // = images/Dice1.png to images/Dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

let x = Math.random();
x = x * 6;
let randomNumber2 = Math.floor(x) + 1;

let RandomDice2 = "dice" + randomNumber2 + ".png"; // = Dice1.png to Dice6.png

let randomImageSource2 = "images/" + RandomDice2; // = images/Dice1.png to images/Dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}