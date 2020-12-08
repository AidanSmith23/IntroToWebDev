// if true, we're tracking the mouse.
var tracking = false;
// Grab DOM references to be used in all functions.
var mouseX = document.getElementById("mouseX");
var mouseY = document.getElementById("mouseY");

function toggle() {

    if (tracking) {
        btnToggle.classList.remove("btn-danger");
        btnToggle.classList.add("btn-success")
        btnToggle.innerText = "Start mouse tracking.";
        btnToggle2.classList.remove("btn-danger");
        btnToggle2.classList.add("btn-success")
        btnToggle2.innerText = "Start mouse tracking.";

        mouseX.innerText = "Untracked";
        mouseY.innerText = "Untracked";
    } else {
        btnToggle.classList.remove("btn-success");
        btnToggle.classList.add("btn-danger");
        btnToggle.innerText = "Stop mouse tracking.";
        btnToggle2.classList.remove("btn-success");
        btnToggle2.classList.add("btn-danger");
        btnToggle2.innerText = "Stop mouse tracking.";
    }

    tracking = !tracking;
}

function updateMousePosition(evt) {
    // If tracking is enabled, update the view.
    if (window.ev === true || btnToggle2.onmouseover) {
      if (tracking) {
          mouseX.innerText = evt.clientX;
          mouseY.innerText = evt.clientY;
      }
    }
}

/*document.getElementById("btnToggle").addEventListener("click", toggle);
document.getElementById("btnToggle2").addEventListener("click", toggle);*/
document.addEventListener("click", toggle);
document.addEventListener("mousemove", updateMousePosition);

window.ev = false;

document.getElementById('btnToggle').onmouseover = function () {
    window.ev = true;
    console.log(window.ev);
}

document.getElementById('btnToggle').onmouseout = function () {
    window.ev = false;
    console.log(window.ev);
}
