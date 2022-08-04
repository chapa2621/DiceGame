var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDice1 = "dice" + randomNumber1 + ".png";

var randomImage1 = "images/" + randomDice1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImage1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice2 = "dice" + randomNumber2 + ".png";

var randomImage2 = "images/" + randomDice2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2); 


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "👦 Kiril is a winner ";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "👸 Aljona is a winner";
} else {document.querySelector("h1").innerHTML = "👫 DRAW";}































/*var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDice = "dice" + randomNumber1 + ".png";

var randomImage =  "images/" + randomDice;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice2 = "dice" + randomNumber2 + ".png";

var randomImage2 = "images/" + randomDice2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2);*/



