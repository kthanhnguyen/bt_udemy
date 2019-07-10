$('.skills__content').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<div class="btn-slider btn-left"><i class = "fas fa-chevron-left"></i></div>',
  nextArrow: '<div class="btn-slider btn-right"><i class="fas fa-chevron-right"></i></div>',
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.skills__content-02').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  prevArrow: '<div class="btn-slider btn-left"><i class = "fas fa-chevron-left"></i></div>',
  nextArrow: '<div class="btn-slider btn-right"><i class="fas fa-chevron-right"></i></div>',
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
  e.target
  e.relatedTarget
  $('.skills__content').slick('setPosition');
});