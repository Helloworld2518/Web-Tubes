
function startClock() {
    const dateEl = document.getElementById('date');
    const timeEl = document.getElementById('time');

    function updateClock() {
        const now = new Date();
        
        const options = {day: 'numeric', month: 'long', year: 'numeric'};
        dateEl.textContent = now.toLocaleDateString('en-US', options);

        // Time Format: HH:MM:SS
        timeEl.textContent = now.toLocaleTimeString('en-US');
    }

    updateClock();
    setInterval(updateClock, 1000);
}
startClock();