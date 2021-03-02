const form = document.getElementById('contact');

form.addEventListener("submit", validate, false);

function validate(e) {

    e.preventDefault();
    const first_name = document.getElementById('first_name');
    const last_name = document.getElementById('last_name');
    const message = document.getElementById('message');
    const email = document.getElementById('email');
    const accepted = document.getElementById('accept');

    if (first_name.value === "") {
        alert("Please enter your Name.");
        first_name.focus();
        return false;
    }

    if (last_name.value === "") {
        alert("Please enter your Last Name.");
        last_name.focus();
        return false;
    }

    if (email.value === "") {
        alert("Please enter your email address.");
        email.focus();
        return false;
    }

    if (!emailIsValid(email.value)) {
        alert("Please enter a valid email address.");
        email.focus();
        return false;
    }

    if (message.value === "") {
        alert("Please enter your message for us.");
        message.focus();
        return false;
    }

    if (accepted.getAttribute('aria-checked') !== "true") {
        alert("Please accept our privacy policy.");
        accepted.focus();
        return false;
    }

    form.submit(); // Can submit the form data to the server
}

const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}