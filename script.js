window.addEventListener('scroll', () => {
    const header = document.querySelector('.sticky-header');
    const scrollY = window.scrollY;

    // Add a CSS class when scrolling down, and remove it when scrolling up
    if (scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

function updateCountdown() {
    const targetDate = new Date("2024-09-11T00:00:00Z");
    const currentDate = new Date();

    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = formatTime(days);
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

setInterval(updateCountdown, 1000);

