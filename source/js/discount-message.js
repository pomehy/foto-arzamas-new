const currentDay = new Date();
const currentDayWeek = currentDay.getDay();

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


// const offersPolygraphy = document.querySelector('.offers__item[data-offer="polygraphy"]');
// const offersPhoto = document.querySelector('.offers__item[data-offer="photo"]');
// const offersWorkdoc = document.querySelector('.offers__item[data-offer="workdoc"]');


const offersItems = document.querySelectorAll('.offers__item');

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

