// const aboutSliderItems = document.querySelectorAll('.about-slider__item');
// const aboutSliderControls = document.querySelector('.about-slider__controls');
// const aboutSliderToggles = document.querySelectorAll('.about-slider__toggle');
// const aboutSliderButtonNext = document.querySelector('.about-slider__button--next');
// const aboutSliderButtonPrev = document.querySelector('.about-slider__button--prev');

// aboutSliderControls.addEventListener('click', function (evt) {
//   let aboutSliderToggle = Array.from(aboutSliderToggles);
//   let target = evt.target;
//   let index = aboutSliderToggle.indexOf(target);

//   currentSlide(index + 1);
// });

// let slideIndex = 1;
// showSlides(slideIndex);

// aboutSliderButtonNext.addEventListener('click', function nextSlide() {
//   showSlides(slideIndex += 1);
//   addActiveClass(slideIndex);
// });

// aboutSliderButtonPrev.addEventListener('click', function previousSlide() {
//   showSlides(slideIndex -= 1);
//   addActiveClass(slideIndex);
// });

// function currentSlide(n) {
//   showSlides(slideIndex = n);
//   addActiveClass(slideIndex);
// }

// currentSlide(slideIndex);

// function addActiveClass(n) {
//   let aboutSliderToggle = document.getElementsByClassName('about-slider__toggle');

//   for (let button of aboutSliderToggle) {
//     button.classList.remove('about-slider__toggle--active');
//   }
//   aboutSliderToggle[slideIndex - 1].classList.add('about-slider__toggle--active');
// }

// function showSlides(n) {
//   if (n > aboutSliderItems.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = aboutSliderItems.length;
//   }

//   for (let slide of aboutSliderItems) {
//     slide.classList.remove('about-slider__item--active');
//   }
//   aboutSliderItems[slideIndex - 1].classList.add('about-slider__item--active');
// }
