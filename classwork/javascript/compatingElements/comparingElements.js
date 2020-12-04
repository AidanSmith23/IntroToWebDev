function compare(num1, num2){
  if (num1 < num2){
    return(num1 + " is less than " + num2);
  }
  else if (num1 > num2){
    return(num1 + " is greater than " + num2);
  }
  else{
    return(num1 + " is equal to " + num2);
  }
}

var numbers = new Array();
var num = prompt("how many numbers");

for (var i = 0; i< num; i++){
  numbers.push(prompt("please enter a number"));
}

for (var i = 0; i<num-1; i++){
  for (var j = 0; j<num; j++){
    alert(compare(numbers[i], numbers[j]));
  }
}
