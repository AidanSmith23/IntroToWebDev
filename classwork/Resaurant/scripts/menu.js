/*
  Name: Aidan Smith
  Assignment: Restaurant Site
  Date Created: 27/11/2020
  Most recent revision: 10/01/2021
*/

var which = 0;
var chev = [0];

for (var i=1; i<4; i++){
  $("#Content"+i).slideUp();
  chev.push(document.getElementById('chev'+i));
}

var open = false;


function myAccordion(id) {
  $("#Content"+id).slideDown(350);
  $("#Content"+which).slideUp(350);

  chev[id].className = 'fa fa-chevron-down open';
  chev[which].className = 'fa fa-chevron-down';

  if (which == id){
    which=0;
  } else {
    which=id;
  }
}

document.getElementById("Accordion1").addEventListener("click", function(){myAccordion(1)}, false);
document.getElementById("Accordion2").addEventListener("click", function(){myAccordion(2)}, false);
document.getElementById("Accordion3").addEventListener("click", function(){myAccordion(3)}, false);
document.getElementById("pull1").addEventListener("click", function(){myAccordion(1)}, false);
document.getElementById("pull2").addEventListener("click", function(){myAccordion(2)}, false);
document.getElementById("pull3").addEventListener("click", function(){myAccordion(3)}, false);
document.getElementById("Content1").addEventListener("click", function(){myAccordion(1)}, false);
document.getElementById("Content2").addEventListener("click", function(){myAccordion(2)}, false);
document.getElementById("Content3").addEventListener("click", function(){myAccordion(3)}, false);
