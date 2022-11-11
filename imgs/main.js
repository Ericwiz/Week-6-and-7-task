
const buttonNext = document.querySelector('#carousel-button-next');
const buttonPrevious = document.querySelector('#carousel-button-prev');

const container = document.getElementById('container')

const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
let totalSlides = slides.length;

buttonNext.addEventListener('click', () => {

    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++
    }
    slides[slidePosition].classList.add('carousel-item-visible');

})

buttonPrevious.addEventListener('click', () => {

    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--
    }
    slides[slidePosition].classList.add('carousel-item-visible');

})



















































































































































































































































































































