const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
let currentSlide = 0;
const slideCount = slides.length;
const slideInterval = 5000;

function changeSlide(next = true) {
    slides[currentSlide].classList.remove("active");
    indicators[currentSlide].classList.remove("active");

    if (next) {
        currentSlide = (currentSlide + 1) % slideCount;
    } else {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    }

    slides[currentSlide].classList.add("active");
    indicators[currentSlide].classList.add("active");
}

setInterval(changeSlide, slideInterval);

slides[currentSlide].classList.add("active");
indicators[currentSlide].classList.add("active");



document.getElementById("burger").addEventListener("click", function() {
    document.querySelector(".nav-list").classList.toggle("active");
});