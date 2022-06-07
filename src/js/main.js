import '../scss/main.scss';
import '../index.html';

window.onload = () => {
  const sliderImages = document.querySelectorAll('.slider-bg__img'),
    slider = document.querySelector('.slider-bg__main-block'),
    arrowLeft = document.querySelector('.slider-bg__arow-left'),
    arrowRight = document.querySelector('.slider-bg__arow-right');
  let slidesCount = 0;

  // arrowRight.addEventListener('click', () => {
  //   // sliderImages.forEach((item, i) => {
  //   //   item[i+1].classList.add('active-class');
  //   //   item[i].classList.remove('active-class');
  //   // });

  //   if (slidesCount === (sliderImages.length - 1)) {
  //     slidesCount = 0;
  //     sliderImages[slidesCount].classList.add('active-class');
  //   } else {
  //     slidesCount++;
  //   }
  //   sliderImages[slidesCount].classList.add('active-class');
  //   console.log(slidesCount);
  // });

  // arrowLeft.addEventListener('click', () => {


  //   if (slidesCount === 0) {
  //     slidesCount = sliderImages.length - 1;
  //     sliderImages[slidesCount].classList.remove('active-class');
  //   } else {
  //     slidesCount--;
  //   }
  //   sliderImages[slidesCount].classList.remove('active-class');
  //   console.log(slidesCount);
  // });

  // function hideSlide (slide) {
  //   slide.forEach((item) => {
  //     item.classList.remove('active-class');
  //   });
    
    
  // }
  // function showSlide (slide) {
  //   slide.forEach((item) => {
  //     item.classList.add('active-class');
  //   });
    
    
  // }

       let i = 0,
         numberOfSlides = 2;

         arrowRight.addEventListener('click', () => {
         if (i === 0 || i < numberOfSlides) {
             i++;
             console.log(i);
             hideSlide();
             showSlider(i);
            //  curentSlide(i);
         } else {
           i = 0;
           console.log(i);
             hideSlide();
             showSlider(i);

         }

        });

        arrowLeft.addEventListener('click', () => {
         if (i === 1 || i <= numberOfSlides && i > 0) {
             i--;
             console.log(i);
             hideSlide();
             showSlider(i);
            //  curentSlide(i);
         } else {
          i = numberOfSlides;
          console.log(i);
            hideSlide();
            showSlider(i);

        }
        });


        function hideSlide() {

         sliderImages.forEach(item => {
             item.classList.add('hide');
             item.classList.remove('show', 'fade');
         });

         sliderImages.forEach(item => {
             item.classList.remove('.offer__slider_active');
         });
        }

        function showSlider(i) {
         sliderImages[i].classList.add('show', 'fade');
         sliderImages[i].classList.remove('hide');
         sliderImages[i].classList.add('.offer__slider_active');
        }

        hideSlide();
        showSlider(i);

};
