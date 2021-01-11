/*
  Name: Aidan Smith
  Assignment: Restaurant Site
  Date Created: 27/11/2020
  Most recent revision: 10/01/2021
*/

//This controls the navigation bar

  document.querySelector('.wrapper').addEventListener('scroll',nav_stick);

  var navbar = document.getElementById("navbar");
  //This is the element which everything else is placed into
  var page = document.getElementById("page");
  //This allows us to find which browser is being used
  var ua = navigator.userAgent.toLowerCase();
  //The Restaurant logo
  var logo = document.getElementById("logo");
  //The Restaurant subheading
  var sub = document.getElementById("sub");
  //This will help keep track of the width of the page
  var $width = $("#page");

  //This activates the control of the logo if the screen changes size
  window.addEventListener('resize', logo_move);

  //This keeps track on the screen's size
  var over = false;
  if($width.prop("clientWidth")>=900){
    over = true;
  }

  //This moves the logo with the navbar
  function logo_move() {
    //How far down the page has been scrolled
    var windowTop = page.scrollTop;
    //As a default, no transition is needed
    logo.style.transition = "0s";
    navbar.style.transition = "0s";
    sub.style.transition = "0s";

    if($width.prop("clientWidth")>=900){
      //This corrects an error that occurs with Internet Explorer
      var leftpad;
      if ((ua.indexOf('safari') > 0 || ua.indexOf("msie ")>0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))&&ua.indexOf('chrome') == -1) {
        leftpad=400;
      } else{
        leftpad=370;
      }

      //This moves the logo down to the navbar and the buttons right
      if (windowTop>300){
        //This hides subtitle
        sub.style.opacity = 1-(windowTop-300)/200;
        //This moves the logo
        if ((ua.indexOf('safari') > 0 || ua.indexOf("msie ")>0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))&&ua.indexOf('chrome') == -1) {
          logo.style.top = 0;
        } else{
          logo.style.top = windowTop +"px";
        }

        if (windowTop<530) {
          //This moves the buttons right
          navbar.style.paddingLeft = (windowTop-300)*(leftpad/230) + "px";
        }
        if (windowTop>=530){
          //This stops moving the buttons
          navbar.style.paddingLeft = leftpad + "px";
        }
      }
      else{
        //This reveals the subtitle
        sub.style.opacity = 1;
        //This moves the logo back to the starting position
        if ((ua.indexOf('safari') > 0 || ua.indexOf("msie ")>0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))&&ua.indexOf('chrome') == -1) {
          logo.style.top = (300-windowTop) + "px";
        } else{
          logo.style.top = 300 +"px";
        }
        //Moves the buttons left again
        navbar.style.paddingLeft = 0 + "px";
      }
      if (!over){
        //If it has just become large enough to show the logo and buttons, add a transition
        logo.style.transition = "2s";
        navbar.style.transition = "2s";
        over=true;
      }
    } //If the screen is too narrow for the logo and the navbar:
    else{
      if (windowTop>530){
        //Keeps the logo just off the top of the screen (for a smooth transition)
        if ((ua.indexOf('safari') > 0 || ua.indexOf("msie ")>0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))&&ua.indexOf('chrome') == -1) {
          logo.style.top = -150 + "px";
        } else{
          logo.style.top = windowTop-150 +"px";
        }
      } //Leaves the logo where it starts
      else{
        if ((ua.indexOf('safari') > 0 || ua.indexOf("msie ")>0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))&&ua.indexOf('chrome') == -1) {
          logo.style.top = (windowTop-300) + "px";
        } else{
          logo.style.top = 300 +"px";
        }
      }

      //The default positions
      sub.style.opacity = 1;
      navbar.style.paddingLeft = 0;

      if (over){
        //If it has just become thin enough to not show the logo and buttons, add a transition
        logo.style.transition = "2s";
        navbar.style.transition = "2s";
        sub.style.transition = "1s 2s";
        over=false;
      }
    }
  }

  function nav_stick() {
    //How far down the page has been scrolled
    var windowTop = page.scrollTop;

    //This moves the logo if it scrolls
    logo_move();

    //For some reason Internet Explorer and Safari use the Fix position differntly to everything else.
    //This is why two lots of the code is needed.
    if ((ua.indexOf('safari') > 0 || ua.indexOf("msie ")>0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))&&ua.indexOf('chrome') == -1) {
      //Controls where the navbar 'sticks' to
      if (windowTop  >= 530) {
        navbar.classList.add("sticky");
        navbar.style.top = 0;

      }
      //Lets the navbar move with the page
      else {
        navbar.classList.remove("sticky");
        navbar.style.top = (530-page.scrollTop) +"px";
      }

    }
    //This code should work for most browsers
    else{
      //Controls where the navbar 'sticks' to
      if (page.scrollTop  >= 530) {
        navbar.classList.add("sticky");
        navbar.style.top = (page.scrollTop)+"px";

      }
      //Lets the navbar move with the page
      else {
        navbar.classList.remove("sticky");
        navbar.style.top = 530 +"px";
      }
    }

  }

//This correction is only needed in internet explorer.
//It makes sure that the navbar doesn't go over the scrollbar
if (ua.indexOf("msie ")>0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
  alert("Please don't test this on Internet Explorer. Or at least ignore problems I've found (the writing on the howto section)")
  window.addEventListener('resize', resize);
  $width = $("#page");
  navbar.style.width = $width.prop("clientWidth")+"px";
}

function resize() {
  $width = $("#page");
  navbar.style.width = $width.prop("clientWidth")+"px";
}
