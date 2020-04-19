var player1Name = prompt("Enter Player 1 Name.");
var player2Name = prompt("Enter Player 2 Name.");

document.querySelector(".p1").innerHTML = player1Name
document.querySelector(".p2").innerHTML = player2Name


var randomNumber1= (Math.floor(Math.random()*6)+1)
var randomImage1= "images/dice"+ randomNumber1 +".png"
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImage1)





var randomNumber2= (Math.floor(Math.random()*6)+1)
var randomImage2= "images/dice"+ randomNumber2 +".png"
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", randomImage2)



if (randomImage1 > randomImage2){
  document.querySelector("h1").innerHTML = player1Name
}
else
if (randomImage2 > randomImage1){
  document.querySelector("h1").innerHTML = player2Name
}
else {
  document.querySelector("h1").innerHTML = ("!!--Draw--!!")
}
























































// //
//
//
// // Generating a random number for selecting dice images
//
//  var randomNumber1 = Math.floor(Math.random()*6) +1;
//  // selecting a random dice image
//
// var randomDiceImage = "dice" + randomNumber1 + ".png";
//
// // Selection source for random image as all images are in one folder
//  var randomDiceSource = "images/"+ randomDiceImage ;
//
// // selecting the class of image to set attribute as img is a class with 2 items img1 and img 2
//
//  var image1=document.querySelectorAll("img")[0];
//
//  image1.setAttribute("src", randomDiceSource );
//
// // Player 2 dice selection
//
//  var randomNumber2 = Math.floor(Math.random()*6) +1;
//
// // Selection source for random image as all images are in one folder directly to shorten the code
//  var randomDiceSource2 = "images/dice"+ randomNumber2 + ".png";
// // selecting the class of image and changing value of its attribute in one code
// document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2 );
//
//
// // if player 1 wins
//
//   if (randomNumber1 > randomNumber2){
//     document.querySelector("h1").innerHTML = "🎉 Player 1 Wins";
//   }
// else
// // if player 2 wins
// if (randomNumber2 > randomNumber1){
//   document.querySelector("h1").innerHTML = "💪 Player 2 Wins";}
//   else{
//     document.querySelector("h1").innerHTML = "Match Draws";
//   }
