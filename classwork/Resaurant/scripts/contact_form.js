/*
  Name: Aidan Smith
  Assignment: Restaurant Site
  Date Created: 27/11/2020
  Most recent revision: 10/01/2021
*/

//This controls the contact form

var contact_us = document.forms["contact-us"];

function validate() {
    contact_us.className = "needs-validation";

    if (!contact_us.checkValidity()) {
        contact_us.className = "was-validated";
        return false;
    }
    //Message if done rather than actually sending
    alert("Message sent");

    return false;
}

//This resets the form
function resetView() {
    contact_us.className = "needs-validation";
    results.style.display = "none";
    submitButton.innerText = "Calculate";
    Name.focus();
}
