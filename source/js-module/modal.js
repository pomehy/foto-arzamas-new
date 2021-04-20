// import { getSrcImage } from './lazy-load';

const pageBody = document.querySelector('.page-body');

const offersButtons = document.querySelectorAll('.offers__button');
const modalCloseButtons = document.querySelectorAll('.modal__close');
const categoryModals = document.querySelectorAll('.category');

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
