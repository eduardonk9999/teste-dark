$(document).ready(function () {

  setTimeout(function () {
    $('.books__container').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1
    });
  }, 3000);
});
