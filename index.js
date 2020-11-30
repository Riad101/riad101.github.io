var player_num_one=prompt("write player 1 name:");
document.getElementById('name1').innerHTML= player_num_one;

var player_num_two = prompt("write player 2 name:");
document.getElementById("name2").innerHTML= player_num_two;


function game(){
var randomDice= Math.floor(Math.random()*6)+1;
var randomImg= "dice" +randomDice + ".png";
var imageSrc= "images/" + randomImg;

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSrc);

var randomDice2= Math.floor(Math.random()*6+1);
var randomImg2= "images/" + "dice" + randomDice2 + ".png";
var image2= document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

if(randomDice > randomDice2){
    document.querySelector("h1").innerHTML= player_num_one + " wins!";
}
else if(randomDice < randomDice2){
    document.querySelector("h1").innerHTML = player_num_two +" wins!";
}
else {
    document.querySelector("h1").innerHTML= "Match drawn!";
}

}