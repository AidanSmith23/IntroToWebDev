// These elements will be used in both functions.
var numberFun = document.forms["numberFun"];
var start = document.getElementById("start");
var end = document.getElementById("end");
var steps = document.getElementById("steps");
var submitButton = document.getElementById("submitButton");

function validate() {

    numberFun.className = "needs-validation";

    if (!numberFun.checkValidity()) {
        numberFun.className = "was-validated";
        return false;
    }

    var st = parseInt(start.value, 10);
    var en = parseInt(end.value, 10);
    var stp = parseInt(steps.value, 10);

    if (st>=en){
      alert("The end value must be greater than the start");
      return false;
    }

    var res = new Array();
    for (var i = st; i < en; i+=stp){
      if (i%2 == 0){
        res.push(i);
      }
    }

    if (res.length == 0){
      document.getElementById("tablehead").innerText = "There are no even numbers between " + st + " and " + en + " with a step of " + stp + ".";
      document.getElementById("addResult").style.display = "none";
    }
    else {
      document.getElementById("tablehead").innerText = "The even numbers between " + st + " and " + en + " with a step of " + stp + " are:";
      document.getElementById("addResult").innerText = res;
    }

    results.style.display = "block";
    submitButton.innerText = "Recalculate";

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}

function resetView() {
    numberFun.className = "needs-validation";
    results.style.display = "none";
    submitButton.innerText = "Calculate";
    num1.focus();
}
