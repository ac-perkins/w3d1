var leftDie = document.getElementById('left_die');
var rightDie = document.getElementById('right_die');
var winner = document.getElementById('winner');
var results = document.getElementById('results');
leftDie.innerHTML = (Math.ceil(Math.random() * 6));
rightDie.innerHTML = (Math.ceil(Math.random() * 6));
var gameStart = document.getElementById('start_time');
var rollBtn = document.getElementById("roll_dice");
var tries = 1;


var craps = {
  start: new Date(),
  rounds: [],
  diceRoll: function diceRoll() {
    leftDie.innerHTML = (Math.floor(Math.random() * 6) + 1);
    rightDie.innerHTML = (Math.floor(Math.random() * 6) + 1);
    if (Number(leftDie.innerHTML) + Number(rightDie.innerHTML) === 7 ||
    (Number(leftDie.innerHTML) + Number(rightDie.innerHTML) === 11)) {
      if (tries === 1) {
        winner.innerHTML = "Winner!";
        results.innerHTML =  "(It took you " + tries + " try and " + (parseInt(((Date.now() - craps.start) / 1000)) + " seconds)");
        tries = 1;
        craps.start = new Date();
      }
      else {
        winner.innerHTML = "Winner!";
        results.innerHTML =  "(It took you " + tries + " tries and " + (parseInt(((Date.now() - craps.start) / 1000)) + " seconds)");
        tries = 1;
        craps.start = new Date();
      }
    }
    else {
      winner.innerHTML = "Try Again";
      results.innerHTML = "";
      tries = tries + 1;
      craps.rounds.push(tries);
    }
  }
}

gameStart.innerHTML = "Game started " + craps.start.getFullYear() + "-" + (craps.start.getMonth() + 1) + "-" + craps.start.getDate() + " at " + craps.start.getHours() + ":" + craps.start.getMinutes();

rollBtn.addEventListener("click", function() {
  craps.diceRoll();
  console.log(craps.rounds);
})
