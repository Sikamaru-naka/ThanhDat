



function silderCustomer(container) {

  let nextBtn = $(`#shopify-section-${container} .next-btn`);
  let preBtn= $(`#shopify-section-${container} .pre-btn`);
  let mainSlide = $(`#shopify-section-${container} .slider__wrap`);
  let boxImages = $$( `#shopify-section-${container} .slider__items`);
  let size = boxImages[0].offsetWidth;
  console.log(typeof(boxImages));

    let counter = 0;      

    // mainSlide.style.transform = `translateX(${-size * counter}px)`;
    
    nextBtn.addEventListener('click', function() {
        if(counter >= boxImages.length) return;
        mainSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;

        if( counter >= boxImages.length ) {
          counter = boxImages.length - 1
        }

        mainSlide.style.transform = `translateX(${-size * counter}px)`
       
    });

    preBtn.addEventListener('click', function() {
        if(counter <= 0) return;
        mainSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        if(counter <= 0 ) {
          counter = 0
        }
        mainSlide.style.transform = `translateX(${-size * counter}px)`

    });

    
}

silderCustomer();


