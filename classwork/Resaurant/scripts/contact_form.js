// These elements will be used in both functions.
var contact_us = document.forms["contact_us"];

function validate() {
    contact_us.className = "needs-validation";

    if (!contact_us.checkValidity()) {
        contact_us.className = "was-validated";
        return false;
    }

    alert("Message sent");

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}

function resetView() {
    contact_us.className = "needs-validation";
    results.style.display = "none";
    submitButton.innerText = "Calculate";
    Name.focus();
}
