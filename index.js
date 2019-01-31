var diceChoices = ["fa-dice-one", "fa-dice-two", "fa-dice-three", "fa-dice-four", "fa-dice-five", "fa-dice-six"];
var player1Score = 0;
var player2Score = 0;

document.querySelector("button").addEventListener("click", play, false);

function updateDice(player) {
  for (i = 0; i < 6; i++) {
    if (document.querySelector(player).classList.contains(diceChoices[i])) {
      document.querySelector(player).classList.remove(diceChoices[i]);
    }
  }

  var roll = Math.floor(Math.random() * 6) + 1;

  if (roll === 1) {
    document.querySelector(player).classList.add("fa-dice-one");
  } else if (roll === 2) {
    document.querySelector(player).classList.add("fa-dice-two");
  } else if (roll === 3) {
    document.querySelector(player).classList.add("fa-dice-three");
  } else if (roll === 4) {
    document.querySelector(player).classList.add("fa-dice-four");
  } else if (roll === 5) {
    document.querySelector(player).classList.add("fa-dice-five");
  } else if (roll === 6) {
    document.querySelector(player).classList.add("fa-dice-six");
  }
}

function winner(player) {
  for (i = 0; i < 6; i++) {
    if (document.querySelector(player).classList.contains(diceChoices[i])) {
      if (player === ".dice1") {
        player1Score = i + 1;
      } else {
        player2Score = i + 1;
      }
    }
  }
  if (player1Score === player2Score) {
    document.querySelector(".winner").innerText = "It's a tie!";
  } else if (player1Score > player2Score) {
    document.querySelector(".winner").innerText = "🚩 Player 1 wins!";
  } else {
    document.querySelector(".winner").innerText = "Player 2 wins! 🚩";
  }
  document.querySelector(".winner").classList.remove("no-show");
}

function play() {
  updateDice(".dice1");
  updateDice(".dice2");
  winner(".dice1");
  winner(".dice2");
}
