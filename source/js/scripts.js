// import './modal.js';
// import './discount-message.js';
// import './sliders.js';
// import './smoothscroll-polyfill.js';

window.__forceSmoothScrollPolyfill__ = true;

const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle-menu');
const iconToggle = document.querySelector('.toggle-menu__icon');

const footerNav = document.querySelector('.footer-nav');

const aboutSlider = document.querySelector('.about-slider');
const aboutSliderItems = document.querySelectorAll('.about-slider__item');
const aboutSliderControls = document.querySelector('.about-slider__controls');
const aboutSliderToggles = document.querySelectorAll('.about-slider__toggle');
const aboutSliderButtonNext = document.querySelector('.about-slider__button--next');
const aboutSliderButtonPrev = document.querySelector('.about-slider__button--prev');

const reviewsSliderButtonNext = document.querySelector('.reviews__button--next');
const reviewsSliderButtonPrev = document.querySelector('.reviews__button--prev');
const reviewsSliderItems = document.querySelectorAll('.reviews__item');

const contactMap = document.querySelector('.contacts__map');

const addImageSrc = (imageWrapper) => {

  const imageElements = imageWrapper.querySelectorAll('img');
  const sourceImageElements = imageWrapper.querySelectorAll('source');

  for (let i = 0; i < imageElements.length; i++) {
    console.log(imageElements[i].attributes);
    imageElements[i].src = imageElements[i].dataset.src;
    imageElements[i].srcset = imageElements[i].dataset.srcset;
  }

  for (let j = 0; j < sourceImageElements.length; j++) {
    sourceImageElements[j].srcset = imageElements[j].dataset.srcset;
  }
};

aboutSlider.addEventListener('click', function(evt) {
  evt.preventDefault();
  addImageSrc(aboutSlider);
});

contactMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  contactMap.classList.add('contacts__map--active');
  const iframeMap = document.createElement('iframe');
  iframeMap.src = "https://yandex.ru/map-widget/v1/?um=constructor%3A96a08ae17dad5c08e6eff11ab74f728aa2c0b5c5b54b04b6a277305d0275b390&amp;"
  iframeMap.allowFullscreen = true;
  contactMap.append(iframeMap);
});

const getAnchors = (linkContainer) => {
  const anchors = linkContainer.querySelectorAll('a');

  const elementClickHandler = (evt) => {
    const element = evt.target.closest('a');

    if (!element) {
      return;
    }

    // отменяем действие по умолчанию
    evt.preventDefault();

    // получаем идентификатор элемента для перехода
    const blockId = element.getAttribute('href');

    if (blockId && blockId !== '#') {
      // находим элемент для перехода
      const block = document.querySelector(blockId);

      if (block) {
        // плавно переходим к элементу
        block.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', elementClickHandler);
  };
}

getAnchors(mainNav);
getAnchors(footerNav);


mainNavToggle.addEventListener('click', function(evt) {
  mainNav.classList.toggle('main-nav--active');
  mainNavToggle.classList.toggle('main-nav__toggle-menu--active');
  iconToggle.classList.toggle('toggle-menu__icon--active');
});



{ // reviews-slider
  let slideIndex = 1;
  showSlides(slideIndex);

  reviewsSliderButtonNext.addEventListener('click', function nextSlide() {
    showSlides(slideIndex += 1);
  });

  reviewsSliderButtonPrev.addEventListener('click', function previousSlide() {
    showSlides(slideIndex -= 1);

  });

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  currentSlide(slideIndex);

  function showSlides(n) {
    if (n > reviewsSliderItems.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = reviewsSliderItems.length;
    }

    for (let slide of reviewsSliderItems) {
      slide.classList.remove('reviews__item--active');
    }
    reviewsSliderItems[slideIndex - 1].classList.add('reviews__item--active');
  }

  // function switchSlides(from, to) {
  //   let current = from;

  //   setTimeout(function runSlide() {
  //     showSlides(slideIndex += 1);
  //     if (current < to) {
  //       setTimeout(runSlide, 5000);
  //     }
  //     current++;
  //   }, 5000);
  // }

  // // использование:
  // switchSlides(5, 25);
};


// document.addEventListener('click', function (evt) {
//   const map = document.querySelector('#map-wrap iframe');
//   if (evt.target.id === 'map-wrap') {
//     map.style.pointerEvents = 'all';
//   } else {
//     map.style.pointerEvents = 'none';
//   }
// });

{
  aboutSliderControls.addEventListener('click', function (evt) {
    let aboutSliderToggle = Array.from(aboutSliderToggles);
    let target = evt.target;
    let index = aboutSliderToggle.indexOf(target);

    currentSlide(index + 1);
  });

  let slideIndex = 1;
  showSlides(slideIndex);

  aboutSliderButtonNext.addEventListener('click', function nextSlide() {
    showSlides(slideIndex += 1);
    addActiveClass(slideIndex);
  });

  aboutSliderButtonPrev.addEventListener('click', function previousSlide() {
    showSlides(slideIndex -= 1);
    addActiveClass(slideIndex);
  });

  function currentSlide(n) {
    showSlides(slideIndex = n);
    addActiveClass(slideIndex);
  }

  currentSlide(slideIndex);

  function addActiveClass(n) {
    let aboutSliderToggle = document.getElementsByClassName('about-slider__toggle');

    for (let button of aboutSliderToggle) {
      button.classList.remove('about-slider__toggle--active');
    }
    aboutSliderToggle[slideIndex - 1].classList.add('about-slider__toggle--active');
  }

  function showSlides(n) {
    if (n > aboutSliderItems.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = aboutSliderItems.length;
    }

    for (let slide of aboutSliderItems) {
      slide.classList.remove('about-slider__item--active');
    }
    aboutSliderItems[slideIndex - 1].classList.add('about-slider__item--active');
  }
}
