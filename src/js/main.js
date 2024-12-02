
AOS.init();
$(document).ready(function () {
  $('.single-item').slick({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $('button.slick-arrow').click(function () {
    $('details').removeAttr('open');
  });
})