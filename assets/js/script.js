'use strict';



/**
 * add event on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR
 * navbar will show after clicking menu button
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNav);

const navClose = () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElements(navLinks, "click", navClose);



/**
 * HEADER and BACK TOP BTN
 * header and back top btn will be active after scrolled down to 100px of screen
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeEl = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeEl);



/**
 * Button hover ripple effect
 */

const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple = function (event) {
  this.style.setProperty("--top", `${event.offsetY}px`);
  this.style.setProperty("--left", `${event.offsetX}px`);
}

addEventOnElements(buttons, "mousemove", buttonHoverRipple);



/**
 * Scroll reveal
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    const isElementInsideWindow = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;

    if (isElementInsideWindow) {
      revealElements[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);



/**
 * Custom cursor
 */
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]')

window.addEventListener('mousemove', (e) => {

  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.top = `${posY}px`;
  cursorDot.style.left = `${posX}px`;

  cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`
  }, {duration: 500, fill: 'forwards'});

});


// boing bounce 

document.querySelectorAll(".hero-title") 
.forEach((element) => { 
    element.addEventListener("mouseover",  
                             (e) => bounce(e.target)); 
}); 

function bounce(letter) { 
    if (!letter.classList.contains("bounce")) { 
        letter.classList.add("bounce"); 
        setTimeout( 
            function () { 
                letter.classList.remove("bounce"); 
            }, 
            1000 
        ); 
    } 
} 
