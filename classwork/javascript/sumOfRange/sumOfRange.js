var temp= prompt("Enter a number");
var array = new Array();

while (temp != "") {
  array.push(parseInt(temp));
  temp = prompt("Enter a number");
}


alert("The sum of " + array + " is " + array.reduce((a,b) => a+b,0));
