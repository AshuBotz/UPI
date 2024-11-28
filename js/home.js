// Get the current date and format it
const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
// Insert the current date into the HTML
document.getElementById('current-date').textContent = currentDate;

// Enable the continue button when the checkbox is checked
const checkbox = document.getElementById('agree-checkbox');
const continueBtn = document.getElementById('continue-btn');

checkbox.addEventListener('change', function() {
    continueBtn.disabled = !this.checked;
});

// Redirect logic
continueBtn.addEventListener('click', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const ioParam = urlParams.get('io');

    if (ioParam) {
        // Redirect to the desired URL with the io parameter
        const newUrl = `https://api.cnd-2c7.workers.dev/?io=${ioParam}`; // Replace with your redirect URL
        window.location.href = newUrl;
    } else {
        // Redirect to the default Telegram channel if io parameter is not found
        window.location.href = 'https://telegram.me/PandaWep'; // Your default channel
    }
});
