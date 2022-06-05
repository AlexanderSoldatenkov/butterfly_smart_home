

// import '../../node_modules/focus-visible/dist/focus-visible';

// import $ from 'jquery';

import '../scss/main.scss';
import '../index.html';

window.onload = () => {
  const sliderImages = document.querySelectorAll('.slider-bg__img'),
        slider = document.querySelector('.slider-bg__main-block'),
        arrowLeft = document.querySelector('.slider-bg__arow-left'),
        arrowRight = document.querySelector('.slider-bg__arow-right');

        arrowRight.addEventListener('click', () => {
          sliderImages.forEach((item, i) => {
            item[i+1].classList.add('active-class');
            item[i].classList.remove('active-class');
          });
        });
};