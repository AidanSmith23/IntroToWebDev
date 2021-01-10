/*
  Name: Aidan Smith
  Assignment: Restaurant Site
  Date Created: 27/11/2020
  Most recent revision: 10/01/2021
*/

  document.querySelector('.wrapper').addEventListener('scroll',nav_stick);

  var navbar = document.getElementById("navbar");
  var page = document.getElementById("page");
  var ua = navigator.userAgent.toLowerCase();

  function nav_stick() {

    var windowTop = page.scrollTop;

    //For some reason Internet Explorer and Safari use the Fix position differntly to everything else.
    //This is why two lots of the code is needed.
    if ((ua.indexOf('safari') > 0 || ua.indexOf("msie ")>0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))&&ua.indexOf('chrome') == -1) {
      if (page.scrollTop  >= 530) {
        navbar.classList.add("sticky");
        navbar.style.top = 0;

      } else {
        navbar.classList.remove("sticky");
        navbar.style.top = (530-page.scrollTop) +"px";
      }

    }
    //This code should work for most browsers
    else{


      if (page.scrollTop  >= 530) {
        navbar.classList.add("sticky");
        navbar.style.top = (page.scrollTop)+"px";

      } else {
        navbar.classList.remove("sticky");
        navbar.style.top = 530 +"px";
      }
    }

  }

var $foo;
if (ua.indexOf("msie ")>0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
  alert("Please don't test this on Internet Explorer. Or at least ignore problems I've found (the writing on the howto section)")
  window.addEventListener('resize', resize);
  $foo = $("#page");
  navbar.style.width = $foo.prop("clientWidth")+"px";
}

function resize() {
  $foo = $("#page");
  navbar.style.width = $foo.prop("clientWidth")+"px";
}
