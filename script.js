// var sides = ["d1.png", "d2.png", "d3.png", "d4.png", "d5.png", "d6.png"];
let side_alt = [
  "roll: 1",
  "roll: 2",
  "roll: 3",
  "roll: 4",
  "roll: 5",
  "roll: 6",
];

function throwdice() {
  //create a random integer between 1 and 6
  let rand1 = Math.round(Math.random() * 5) + 1;
  let rand2 = Math.round(Math.random() * 5) + 1;
  let rand3 = Math.round(Math.random() * 5) + 1;
  let rand4 = Math.round(Math.random() * 5) + 1;

  // Set Image src
  document.getElementById("mydice1").src = "images/d" + rand1 + ".png";
  document.getElementById("mydice2").src = "images/d" + rand2 + ".png";
  document.getElementById("hisdice1").src = "images/e" + rand3 + ".png";
  document.getElementById("hisdice2").src = "images/e" + rand4 + ".png";

  // Set Image alt
  document.getElementById("mydice1").alt = side_alt[rand1];
  document.getElementById("mydice2").alt = side_alt[rand2];
  document.getElementById("hisdice1").alt = side_alt[rand3];
  document.getElementById("hisdice2").alt = side_alt[rand4];

  who_won(rand1, rand2, rand3, rand4);
}

function who_won(rand1, rand2, rand3, rand4) {
  let player_points = rand1 + rand2 + 2;
  let enemy_points = rand3 + rand4 + 2;
  let giffy = winner(player_points, enemy_points);
  document.getElementById("message").src = "images/" + giffy;
  document.getElementById("message").alt = giffy;
}

function winner(player, enemy) {
  if (player < enemy) {
    return "lose.gif";
  }
  if (enemy < player) {
    return "rocky.gif";
  }
  if (player == enemy) {
    return "equal.gif";
  }
}
