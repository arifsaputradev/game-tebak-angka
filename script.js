// guess chance variable declaration
var live = 3;
// variabel to repeat
var repeat = true;
while (repeat) {
  // capture player choice
  alert("Tebak angka dari 1 - 10\nKamu Punya 3 Kesempatan!");
  var player = parseInt(prompt("Masukkan angka tebakan"));
  // make ramdom computer choice 1 - 10
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  var computer = random(1, 10);
  console.log(computer);
  // determine the rules
  // variable to determine the result
  var result = "";
  for (live; live == 0; live--) {
    if (player === computer) {
      result = "Benar!";
    } else if (player > computer) {
      result = "Kebanyakan!";
    } else {
      result = "Kurang";
    }
  }
  alert(player + " " + computer + " " + result + "\n" + "Live" + live);
  repeat = confirm();
}
