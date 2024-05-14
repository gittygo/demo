const bookingForm = document.getElementById("bookingForm");
const errorMessages = document.getElementById("errorMessages");

bookingForm.addEventListener("submit", function (event) {
    let isValid = true;
    errorMessages.innerHTML = "";

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const movie = document.getElementById("movie");
    const numTickets = document.getElementById("numTickets");
    // Validate other fields as well

    if (fullName.value === "") {
        showError("Full Name is required");
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(fullName.value)) {
        showError("Full Name should consist of letters only");
        isValid = false;
    }

    // Validate email, phone, movie, numTickets, seat preferences, and payment method

    if (!isValid) {
        event.preventDefault();
    }
});

function showError(message) {
    const error = document.createElement("p");
    error.textContent = message;
    errorMessages.appendChild(error);
}
