let currentAudio = null;
let currentBtn = null;

function playSong(index) {
    let audio = document.getElementById("audio" + index);
    let btn = document.getElementById("btn" + index);

    // Jika lagu lain sedang dimainkan → stop dulu
    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentBtn.textContent = "▶";
    }

    // Play / Pause
    if (audio.paused) {
        audio.play();
        btn.textContent = "⏸";
        currentAudio = audio;
        currentBtn = btn;
    } else {
        audio.pause();
        btn.textContent = "▶";
    }
}