/*
  Name: Aidan Smith
  Assignment: Restaurant Site
  Date Created: 27/11/2020
  Most recent revision: 10/01/2021
*/

//This controls the menu page

//Which menu section is currently open (0 if none)
var which = 0;
//The chevrons which will need to change direction when clicked
var chev = [0];

//This initialises the page and variables
for (var i=1; i<4; i++){
  $("#Content"+i).slideUp();
  chev.push(document.getElementById('chev'+i));
}

//This function does the opening and closing
function myAccordion(id) {
  $("#Content"+id).slideDown(350);
  $("#Content"+which).slideUp(350);

  //Change style if open or closed
  chev[id].className = 'fa fa-chevron-down open';
  chev[which].className = 'fa fa-chevron-down';

  if (which == id){//If none are now open
    which=0;
  } else {
    which=id;
  }
}


//Initialising the function
document.getElementById("Accordion1").addEventListener("click", function(){myAccordion(1)}, false);
document.getElementById("Accordion2").addEventListener("click", function(){myAccordion(2)}, false);
document.getElementById("Accordion3").addEventListener("click", function(){myAccordion(3)}, false);
document.getElementById("pull1").addEventListener("click", function(){myAccordion(1)}, false);
document.getElementById("pull2").addEventListener("click", function(){myAccordion(2)}, false);
document.getElementById("pull3").addEventListener("click", function(){myAccordion(3)}, false);
document.getElementById("Content1").addEventListener("click", function(){myAccordion(1)}, false);
document.getElementById("Content2").addEventListener("click", function(){myAccordion(2)}, false);
document.getElementById("Content3").addEventListener("click", function(){myAccordion(3)}, false);
