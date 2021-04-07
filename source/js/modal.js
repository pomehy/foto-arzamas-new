const pageBody = document.querySelector('.page-body');

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
      }

      categoryModals[j].addEventListener('mousedown', (evt) => {
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
