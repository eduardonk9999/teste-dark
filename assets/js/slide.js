$(document).ready(function () {
  setTimeout(function () {
    $('.books__container').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
      ]  
    });
  }, 3000);
});
