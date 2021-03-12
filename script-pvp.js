// Define who is first
const $ = (el) => {
  return document.querySelector(el);
};

// Get a random number and use ternary to define "X" or "O" depending of the case
const randPlayer = Math.random() > 0.5 ? "X" : "O";
console.log(randPlayer);

$(".info").innerText += " " + randPlayer;

const cells = document.querySelectorAll(".cell");
console.log(cells);

const activate = () => {
  for (var cell of cells) {
    cell.addEventListener("click", playGame, false);
  }
};

const playGame = (e) => {
  cell = e.target.id;
  document.getElementById(cell).innerText = randPlayer;
};

activate();
