// 
// DESTINATION IMAGE CAROUSEL
// 

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const images = document.querySelectorAll(".scroll-image");

let currentIndex = 0;
let carouselInterval;

// Displays only the selected image
function showImage(index) {
    images.forEach((image) => {
        image.style.display = "none";
    });

    images[index].style.display = "block";
}

// Displays the previous image
function showPreviousImage() {
    currentIndex =
        currentIndex === 0
            ? images.length - 1
            : currentIndex - 1;

    showImage(currentIndex);
    restartCarousel();
}

// Displays the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;

    showImage(currentIndex);
    restartCarousel();
}

// Automatically changes the image every four seconds
function startCarousel() {
    carouselInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 4000);
}

// Restarts the timer after an arrow is clicked
function restartCarousel() {
    clearInterval(carouselInterval);
    startCarousel();
}

if (images.length > 0 && leftArrow && rightArrow) {
    showImage(currentIndex);

    leftArrow.addEventListener("click", showPreviousImage);
    rightArrow.addEventListener("click", showNextImage);

    startCarousel();
}


// ========================================
// FLIGHT SEARCH FORM
// ========================================

const flightForm = document.getElementById("flightForm");
const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");
const departureDateInput = document.getElementById("departureDate");
const returnDateInput = document.getElementById("returnDate");

// Prevents users from selecting a past departure date
const today = new Date().toISOString().split("T")[0];

departureDateInput.min = today;
returnDateInput.min = today;

// Makes sure the return date is not before the departure date
departureDateInput.addEventListener("change", () => {
    returnDateInput.min = departureDateInput.value;

    if (returnDateInput.value < departureDateInput.value) {
        returnDateInput.value = "";
    }
});

flightForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const from = fromInput.value.trim();
    const to = toInput.value.trim();
    const departureDate = departureDateInput.value;
    const returnDate = returnDateInput.value;

    if (returnDate < departureDate) {
        alert("The return date cannot be before the departure date.");
        return;
    }

    console.log(`Searching for flights from ${from} to ${to}.`);
    console.log(`Departure date: ${departureDate}`);
    console.log(`Return date: ${returnDate}`);

    // Flight API logic can be added here later.
});

// ========================================
// FOOTER
// ========================================

const currentYear = document.getElementById("currentYear");
const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");
const newsletterMessage = document.getElementById(
    "newsletterMessage"
);

// Automatically displays the current year
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Handles the newsletter form
if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = newsletterEmail.value.trim();

        newsletterMessage.textContent =
            `Thank you! Travel updates will be sent to ${email}.`;

        newsletterForm.reset();
    });
}