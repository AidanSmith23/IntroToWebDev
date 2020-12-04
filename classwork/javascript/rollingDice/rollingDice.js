function rollDice(numsides){
  return Math.ceil(Math.random()*numsides);
}

var num = prompt("How many sides?");
var dice = prompt("How many dice?");

var results = 0;

for (var i = 0; i<dice; i++){
  alert(rollDice(num));
}
