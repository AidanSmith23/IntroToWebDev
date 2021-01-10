/*
  Name: Aidan Smith
  Assignment: Restaurant Site
  Date Created: 27/11/2020
  Most recent revision: 10/01/2021
*/


var contact-us = document.forms["contact_us"];

function validate() {
    contact-us.className = "needs-validation";

    if (!contact-us.checkValidity()) {
        contact-us.className = "was-validated";
        return false;
    }

    alert("Message sent");

    return false;
}

function resetView() {
    contact-us.className = "needs-validation";
    results.style.display = "none";
    submitButton.innerText = "Calculate";
    Name.focus();
}
