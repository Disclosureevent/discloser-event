// Set your event date and time (UTC or a fixed time zone)
const targetDate = new Date("2025-01-01T00:00:00Z").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        // Countdown ended
        document.getElementById("timer").innerHTML = "The truth is out there. Stay vigilant.";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown(); // initial call
