import '../scss/main.scss';
import '../index.html';

window.onload = () => {
  const sliderImages = document.querySelectorAll('.slider-bg__img'),
        slider = document.querySelector('.slider-bg__main-block'),
        arrowLeft = document.querySelector('.slider-bg__arow-left'),
        arrowRight = document.querySelector('.slider-bg__arow-right');
  let slidesCount = 0;

        arrowRight.addEventListener('click', () => {
          // sliderImages.forEach((item, i) => {
          //   item[i+1].classList.add('active-class');
          //   item[i].classList.remove('active-class');
          // });

          if (slidesCount === sliderImages.length){
            slidesCount = 1;
          } else {
            slidesCount++;
          }
          sliderImages[slidesCount].classList.add('active-class');
          console.log(slidesCount);
        });

        arrowLeft.addEventListener('click', () => {
         

          if (slidesCount === 1){
            slidesCount = sliderImages.length;
          } else {
            slidesCount--;
          }
          sliderImages[slidesCount].classList.remove('active-class');
          console.log(slidesCount);
        });

};