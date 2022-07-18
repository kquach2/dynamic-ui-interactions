import { showDropdown, closeDropdown } from './dom-stuff';
import { plusSlides, currentSlide, showSlides, slideIndex, timer } from './slideshow-logic';
import "./styles.css";

window.addEventListener('click', closeDropdown);

const dropbuttons = document.querySelectorAll('.dropbtn');

dropbuttons.forEach((dropbutton) => {
    dropbutton.addEventListener('click', showDropdown);
});

showSlides(slideIndex);

const previous = document.querySelector('.prev');
previous.addEventListener('click', function () {
    plusSlides(-1);
});

const next = document.querySelector('.next');
next.addEventListener('click', function () {
    plusSlides(1);
});

const dots = document.querySelectorAll('.dot');

let i = 1;
dots.forEach((dot) => {
    console.log("run " + i);
    dot.addEventListener('click', function () {
        currentSlide(i);
    });
    i += 1;
    console.log(i);
});

/*
dots.forEach((dot, i) => {
    console.log(i);
    dot.addEventListener('click', function () {
        currentSlide(i+1);
    });
});
*/

/*
for (let i=0; i<dots.length; i+=1) {
    dots[i].addEventListener('click', function () {
        currentSlide(i+1);
    });
}
*/

/*dots[0].addEventListener('click', function () {
    currentSlide(1);
});

dots[1].addEventListener('click', function () {
    currentSlide(2);
});

dots[2].addEventListener('click', function () {
    currentSlide(3);
});*/