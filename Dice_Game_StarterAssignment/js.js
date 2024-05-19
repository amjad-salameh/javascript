const score1 = document.getElementById("score--0");
const score2 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const roll = document.querySelector(".btn--roll");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const hold = document.querySelector(".btn--hold");
const game = document.querySelector(".btn--new");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
let activeplayer = 0;
let scores = [0, 0];
let currentscore = 0;

score1.textContent = 0;
score2.textContent = 0;
dice.classList.add("hidden");

function trans() {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentscore = 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
}
const look = function () {
  scores = [0, 0];
  currentscore = 0;
  activeplayer = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  dice.classList.add("hidden");
  roll.classList.remove("hidden");
  hold.classList.remove("hidden");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
};
const player1Name = prompt(`Enter name for player 1:`);
const player2Name = prompt(`Enter name for player 2:`);

document.getElementById("name--0").textContent = player1Name;
document.getElementById("name--1").textContent = player2Name;

roll.addEventListener("click", function () {
  let number = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  dice.src = `dice-${number}.png`;
  if (number !== 1) {
    currentscore += number;
    document.getElementById(`current--${activeplayer}`).textContent =
      currentscore;
  } else {
    trans();
  }
});

hold.addEventListener("click", function () {
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =scores[activeplayer];
    if(scores[activeplayer]>=100){
        document.querySelector(`.player--${activeplayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activeplayer}`).classList.remove("player--active");
        dice.classList.add("hidden");
        roll.classList.add("hidden");
        hold.classList.add("hidden");
    }
    else{
        trans();
    }
});
game.addEventListener('click', look);