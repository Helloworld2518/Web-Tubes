//pop up album
function openAlbum(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeAlbum(id) {
    document.getElementById(id).style.display = 'none';
}
//cover bergerak
document.querySelectorAll(".cover").forEach(cover => {

    let images = cover.dataset.images;
    if (!images) return;

    images = images.split(",").map(img => img.trim());
    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;
        cover.src = images[index];
    }, 5000);
});
