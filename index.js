
//**ARROW INTERACTION_HEADER**//

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const images = document.querySelectorAll('.scroll-image');
let currentIndex = 0;

// Show the first image
images[currentIndex].style.display = 'block';

leftArrow.addEventListener('click', () => {
    images[currentIndex].style.display = 'none'; // Hide current image
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Move to the previous image
    images[currentIndex].style.display = 'block'; // Show new image
});

rightArrow.addEventListener('click', () => {
    images[currentIndex].style.display = 'none'; // Hide current image
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Move to the next image
    images[currentIndex].style.display = 'block'; // Show new image
});

// Show the first image
images[currentIndex].style.display = 'block';

setInterval(() => {
    // Hide the current image
    images[currentIndex].style.display = 'none';
    
    // Update the index to the next image
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    
    // Show the new image
    images[currentIndex].style.display = 'block';
}, 4000); // Change image every 4 seconds

//**FLIGHT SEARCH FORM SUBMISSION FORM SUBMISSION. HANDLING**//

document.getElementById('flightForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;

    console.log(`Searching flights from ${from} to ${to}`);
    console.log(`Departure Date: ${departureDate}`);
    console.log(`Return Date: ${returnDate}`);
    
    // Here you can add logic to fetch flight data from an API or database
});

function setReturnDate() {
    // Set the value of the input field to a specific date (YYYY-MM-DD format)
    document.getElementById('returnDate').value = '2026-02-14'; // Change this date as needed
}