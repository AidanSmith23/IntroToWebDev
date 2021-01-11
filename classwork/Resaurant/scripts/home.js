/*
  Name: Aidan Smith
  Assignment: Restaurant Site
  Date Created: 27/11/2020
  Most recent revision: 10/01/2021
*/

//This is the javascript controlling the home page.

//All actions occur when scrolling
document.querySelector('.wrapper').addEventListener('scroll',onScroll);

var howto1 = document.getElementById("howto1");
var howto2 = document.getElementById("howto2");
var howto3 = document.getElementById("howto3");
var howto4 = document.getElementById("howto4");
var page = document.getElementById("page");

var boat = document.getElementById("boat");
var near = document.getElementById("near");
var middle = document.getElementById("middle");
var far = document.getElementById("far");
var cloud1 = document.getElementById("cloud1");
var cloud2 = document.getElementById("cloud2");
var cloud3 = document.getElementById("cloud3");
var cloud4 = document.getElementById("cloud4");
var cloud5 = document.getElementById("cloud5");
var cloud6 = document.getElementById("cloud6");
//This allows us to find which browser is being used
var ua = navigator.userAgent.toLowerCase();

function onScroll() {
  //How far down the page has been scrolled
  var windowTop = page.scrollTop;

  //For some reason Internet Explorer and Safari use the Fix position differntly to everything else.
  //This is why two lots of the code is needed.
  if ((ua.indexOf('safari') > 0 || ua.indexOf("msie ")>0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) && ua.indexOf('chrome') == -1) {
    //Makes the how to section move with the page at appropriate points
    if (windowTop <= 3430){
      if (windowTop  >= 1530) {
        howto1.style.top = 100 + "px";
      } else {
        howto1.style.top = (1630-windowTop)+"px";
      }

      if (windowTop  >= 2130) {
        howto2.style.top = 100 + "px";
      } else {
        howto2.style.top = (2230-windowTop)+"px";
      }

      if (windowTop  >= 2730) {
        howto3.style.top = 100 + "px";
      } else {
        howto3.style.top = (2830-windowTop)+"px";
      }

      if (windowTop  >= 3330){
        howto4.style.top = 100 + "px";
      } else {
        howto4.style.top = (3430-windowTop)+"px";
      }
    }else{
      howto1.style.top = (3530-windowTop)+"px";
      howto2.style.top = (3530-windowTop)+"px";
      howto3.style.top = (3530-windowTop)+"px";
      howto4.style.top = (3530-windowTop)+"px";
    }

  }
  //This code should work for most browsers
  else{
    //Makes the how to section move with the page at appropriate points
    if (windowTop <= 3430){
      if (windowTop  >= 1530) {
        howto1.style.top = (windowTop + 90)+"px";
      } else {
        howto1.style.top = 1620 + "px";
      }

      if (windowTop  >= 2130) {
        howto2.style.top = (windowTop + 90)+"px";
      } else {
        howto2.style.top = 2220 + "px";
      }

      if (windowTop  >= 2730) {
        howto3.style.top = (windowTop + 90)+"px";
      } else {
        howto3.style.top = 2820 + "px";
      }

      if (windowTop  >= 3330){
        howto4.style.top = (windowTop + 90)+"px";
      } else {
        howto4.style.top = 3420 + "px";
      }
    }

  }

  //This gives a smooth scroll to the section if clicked.
  function scroll1 (){
    page.scrollTo({top: 1530,  behavior: 'smooth'});
  }
  function scroll2 (){
    page.scrollTo({top: 2130,  behavior: 'smooth'});
  }
  function scroll3 (){
    page.scrollTo({top: 2730,  behavior: 'smooth'});
  }
  function scroll4 (){
    page.scrollTo({top: 3330,  behavior: 'smooth'});
  }
  howto1.addEventListener("click", scroll1);
  howto2.addEventListener("click", scroll2);
  howto3.addEventListener("click", scroll3);
  howto4.addEventListener("click", scroll4);

  //This controls the movement of the scene drawn in the news section
  var leftboat = windowTop - 300;
  boat.style.left= leftboat+"px";
  near.style.left= -((windowTop*0.4)%40)+"px";
  middle.style.left= -((windowTop*0.2)%40)+"px";
  far.style.left= -((windowTop*0.1)%40)+"px";

  cloud1.style.right= ((windowTop*0.1)-300)+"px";
  cloud2.style.right= (-(windowTop*0.2)-1000)+"px";
  cloud3.style.right= ((windowTop*0.2)-800)+"px";
  cloud4.style.right= (-(windowTop*0.05)-400)+"px";
  cloud5.style.right= ((windowTop*0.3)-1100)+"px";
  cloud6.style.right= (-(windowTop*0.3))+"px";
}
