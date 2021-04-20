const pageBody = document.querySelector('.page-body');
const mainNav = document.querySelector('.main-nav');
const footerNav = document.querySelector('.footer-nav');
const currentDay = new Date();
const currentDayWeek = currentDay.getDay();

// переменные sliderAbout
const aboutSliderItems = document.querySelectorAll('.about-slider__item');
const aboutSliderControls = document.querySelector('.about-slider__controls');
const aboutSliderToggles = document.querySelectorAll('.about-slider__toggle');
const aboutSliderButtonNext = document.querySelector('.about-slider__button--next');
const aboutSliderButtonPrev = document.querySelector('.about-slider__button--prev');

// переменные sliderReviews
const reviesSlider = document.querySelector('.reviews');
const reviewsSliderButtonNext = document.querySelector('.reviews__button--next');
const reviewsSliderButtonPrev = document.querySelector('.reviews__button--prev');
const reviewsSliderItems = document.querySelectorAll('.reviews__item');


const discountMessage = document.querySelector('.page-header__discount-message');
const discountMessageClose = document.querySelector('.discount-message__close');
const discountValue = discountMessage.querySelector('.discount-message__value');
const offersTextil = document.querySelector('.offers__item[data-offer="textil"]');
const offersCanvas = document.querySelector('.offers__item[data-offer="canvas"]');
const offersPrintPhoto = document.querySelector('.offers__item[data-offer="print-photo"]');
const offersGiftCookware = document.querySelector('.offers__item[data-offer="gift-cookware"]');
const offersGift = document.querySelector('.offers__item[data-offer="gift"]');
const categoryTextil = document.querySelector('.category[data-category="textil"]');
const categoryCanvas = document.querySelector('.category[data-category="canvas"]');
const categoryPrintPhoto = document.querySelector('.category[data-category="print-photo"]');
const categoryGiftCookware = document.querySelector('.category[data-category="gift-cookware"]');
const categoryGift = document.querySelector('.category[data-category="gift"]');
const offersItems = document.querySelectorAll('.offers__item');


// Jivo

const addJivoChat = () => {
  const jivoChat = document.createElement('script');
  jivoChat.src = "//code-ya.jivosite.com/widget/08vF3Bn5fa";
  jivoChat.async = true;
  document.head.append(jivoChat);
}

window.onload = () => {
  setTimeout(addJivoChat,1000);
};

const getSrcImage = (imageWrapper) => {

  const imageElements = imageWrapper.querySelectorAll('img');
  const webpImagesElements = imageWrapper.querySelectorAll('source');

  for (let k = 0; k < imageElements.length; k++) {
    console.log(imageElements[k].src);
    imageElements[k].src = imageElements[k].dataset.src;
    imageElements[k].srcset = imageElements[k].dataset.srcset;
  }

  for (let k = 0; k < webpImagesElements.length; k++) {
    console.log(webpImagesElements[k].src);
    webpImagesElements[k].srcset = webpImagesElements[k].dataset.srcset;
  }
};

// Модальные окна
{
  const offersButtons = document.querySelectorAll('.offers__button');
  const modalCloseButtons = document.querySelectorAll('.modal__close');
  const categoryModals = document.querySelectorAll('.category');

  for (let i = 0; i < offersButtons.length; i++) {
    offersButtons[i].addEventListener('click', function (evt) {
      evt.preventDefault();

      let offerDataValue = evt.target.parentElement.dataset.offer;

      for (let j = 0; j < categoryModals.length; j++) {
        let categoryDataValue = categoryModals[j].dataset.category;

        if (offerDataValue === categoryDataValue) {
          categoryModals[j].classList.add('modal--show');
          pageBody.classList.add('page-body--no-scroll');
          getSrcImage(categoryModals[j]);
        }

        categoryModals[j].addEventListener('click', (evt) => {
          if (evt.target.classList.contains('modal--show') || evt.target.classList.contains('modal__wrapper')) {
            categoryModals[j].classList.remove('modal--show');
            pageBody.classList.remove('page-body--no-scroll');
          }
        });

        for (let k = 0; k < modalCloseButtons.length; k++) {
          modalCloseButtons[k].addEventListener('click', (evt) => {
            evt.preventDefault();
            categoryModals[j].classList.remove('modal--show');
            pageBody.classList.remove('page-body--no-scroll');
          });
        }

        window.addEventListener('keydown', function (evt) {
          if (evt.keyCode === 27) {
            if (categoryModals[j].classList.contains('modal--show')) {
              evt.preventDefault();
              categoryModals[j].classList.remove('modal--show');
              pageBody.classList.remove('page-body--no-scroll');
            }
          }
        });
      }
    });
  }

}


// Карта
{
  const contactMap = document.querySelector('.contacts__map');

  contactMap.addEventListener('click', function(evt) {
    evt.preventDefault();
    contactMap.classList.add('contacts__map--active');
    const iframeMap = document.createElement('iframe');
    iframeMap.src = "https://yandex.ru/map-widget/v1/?um=constructor%3A96a08ae17dad5c08e6eff11ab74f728aa2c0b5c5b54b04b6a277305d0275b390&amp;"
    iframeMap.allowFullscreen = true;
    contactMap.append(iframeMap);
  });

  document.addEventListener('click', function (evt) {
    const map = document.querySelector('#map-wrap iframe');
    if (map) {
      if (evt.target.id === 'map-wrap') {
        map.style.pointerEvents = 'all';
      } else {
        map.style.pointerEvents = 'none';
      }
    }
  });
}


// Якоря - плавный преход
{
  !function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===(e=p(l=o,"Y")&&a(l,"Y"),r=p(l,"X")&&a(l,"X"),e||r);)o=o.parentNode||o.host;var l,e,r;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(d.bind(o,t))}function h(l,e,r){var c,f,p,a,h=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),d({scrollable:c,method:a,startTime:h,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();

  window.__forceSmoothScrollPolyfill__ = true;

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
}

// мобильное меню
{
  const mainNavToggle = document.querySelector('.main-nav__toggle-menu');
  const iconToggle = document.querySelector('.toggle-menu__icon');

  mainNavToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    mainNav.classList.toggle('main-nav--active');
    mainNavToggle.classList.toggle('main-nav__toggle-menu--active');
    iconToggle.classList.toggle('toggle-menu__icon--active');
  });
};

// Слайдер О нас
if (aboutSliderControls) {
  let slideIndex = 1;

  const showSlides = (numberSlide) => {
    if (numberSlide > aboutSliderItems.length) {
      slideIndex = 1
    }
    if (numberSlide < 1) {
      slideIndex = aboutSliderItems.length;
    }

    for (let slide of aboutSliderItems) {
      slide.classList.remove('about-slider__item--active');
    }
    aboutSliderItems[slideIndex - 1].classList.add('about-slider__item--active');
  }

  showSlides(slideIndex);

  const addActiveClass = (numberSlide) => {
    let aboutSliderToggle = document.getElementsByClassName('about-slider__toggle');

    for (let button of aboutSliderToggle) {
      button.classList.remove('about-slider__toggle--active');
    }
    aboutSliderToggle[slideIndex - 1].classList.add('about-slider__toggle--active');
  }

  const currentSlide = (numberSlide) => {
    showSlides(slideIndex = numberSlide);
    addActiveClass(slideIndex);
  }

  currentSlide(slideIndex);

  aboutSliderControls.addEventListener('click', function (evt) {
    let aboutSliderToggle = Array.from(aboutSliderToggles);
    let target = evt.target;
    let index = aboutSliderToggle.indexOf(target);

    currentSlide(index + 1);
  });

  aboutSliderButtonNext.addEventListener('click', function nextSlide() {
    showSlides(slideIndex += 1);
    addActiveClass(slideIndex);
  });

  aboutSliderButtonPrev.addEventListener('click', function previousSlide() {
    showSlides(slideIndex -= 1);
    addActiveClass(slideIndex);
  });
}

// Отзывы слайдер

if (reviesSlider) {
  let slideIndex = 1;

  const showSlides = (numberSlide) => {
    if (numberSlide > reviewsSliderItems.length) {
      slideIndex = 1
    }
    if (numberSlide < 1) {
      slideIndex = reviewsSliderItems.length;
    }

    for (let slide of reviewsSliderItems) {
      slide.classList.remove('reviews__item--active');
    }
    reviewsSliderItems[slideIndex - 1].classList.add('reviews__item--active');
  }

  showSlides(slideIndex);

  reviewsSliderButtonNext.addEventListener('click', function nextSlide() {
    showSlides(slideIndex += 1);
  });

  reviewsSliderButtonPrev.addEventListener('click', function previousSlide() {
    showSlides(slideIndex -= 1);
  });
}

// Акция дня

{
  const addDiscountImage = (category) => {
    const productImages = category.querySelectorAll('.product__image-wrapper');

    for (let i = 0; i < productImages.length; i++) {
      productImages[i].classList.add('product__image-wrapper--discount');
    }
  }


  if (currentDayWeek === 0 || currentDayWeek === 6) { // суббота воскресенье
    discountValue.textContent = 'весь ассортимент';
    for (let i = 0; i < offersItems.length; i++) {
      offersItems[i].classList.add('offers__item--discount');
    }
    addDiscountImage(document);
  } else if (currentDayWeek === 1) { // понедельник
    discountValue.textContent = 'кружки';
    offersGiftCookware.classList.add('offers__item--discount');
    addDiscountImage(categoryGiftCookware);
  } else if (currentDayWeek === 2) { // вторник
    discountValue.textContent = 'текстиль с фото';
    offersTextil.classList.add('offers__item--discount');
    addDiscountImage(categoryTextil);
  } else if (currentDayWeek === 3) { // среда
    discountValue.textContent = 'холсты';
    offersCanvas.classList.add('offers__item--discount');
    addDiscountImage(categoryCanvas);
  } else if (currentDayWeek === 4) { // четверг
    discountValue.textContent = 'печать фото';
    offersPrintPhoto.classList.add('offers__item--discount');
    addDiscountImage(categoryPrintPhoto);
  } else if (currentDayWeek === 5) { // пятница
    discountValue.textContent = 'сувениры';
    offersGift.classList.add('offers__item--discount');
    addDiscountImage(categoryGift);
  }

  discountMessageClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    discountMessage.classList.remove('page-header__discount-message--show');
  });
}
