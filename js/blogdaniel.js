let index = 0;
let slides;

document.addEventListener("DOMContentLoaded", () => {
    slides = document.querySelectorAll(".slide");

    document.querySelector(".next").addEventListener("click", () => {
        showSlide(index + 1);
    });

    document.querySelector(".prev").addEventListener("click", () => {
        showSlide(index - 1);
    });
});

function showSlide(n) {
    index = (n + slides.length) % slides.length;
    document.querySelector(".slider").style.transform =
        `translateX(-${index * 100}%)`;
}