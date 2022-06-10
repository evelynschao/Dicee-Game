function checkRefresh() {
  if (!sessionStorage.getItem("rollDice")) {
    sessionStorage.setItem("rollDice", "extra")
  } else(
    rollTheDice()
  )
}

function rollTheDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // generates a random number between 1 and 6
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; // generates a random number between 1 and 6
  var randomImage1Src = "images/dice" + randomNumber1 + ".png";
  var randomImage2Src = "images/dice" + randomNumber2 + ".png";

  //First dice
  document.querySelectorAll("img")[0].setAttribute("src", randomImage1Src);

  //Second dice
  document.querySelectorAll("img")[1].setAttribute("src", randomImage2Src);

  //Change the title to display a winner
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

document.querySelector("body").onload = checkRefresh();
