function countingCharacters(stringToCount){
    // The length property has been mentioned in
    // the Logging Letter Exercise in Lesson 4
    return (stringToCount + " has " +
              stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, character){
  count = 0;
  for (var i = 0; i < stringToCount.length; i++){
    if (stringToCount[i] == character){
      count++;
    }
  }
  return ("and there are " + count + " " + character + "'s");
}

function countingCharacters3(stringToCount, characters){
  count = 0;
  for (var i = 0; i < stringToCount.length - characters.length + 1; i++){
    if (stringToCount.substring(i, i+characters.length) == characters){
      count++;
    }
  }
  return ("and there are " + count + " " + characters + "'s");
}

var stringToCount = prompt("Write something");
var character = prompt("pick a letter");
var characters = prompt("pick a phrase");

alert(countingCharacters(stringToCount));
alert(countingCharacters2(stringToCount, character));
alert(countingCharacters3(stringToCount, characters));
