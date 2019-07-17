$(document).ready(function() {
  $('.skills__content').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<div class="btn-slider btn-left"><i class = "fas fa-chevron-left"></i></div>',
    nextArrow: '<div class="btn-slider btn-right"><i class="fas fa-chevron-right"></i></div>',
    responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
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
    // slidesToShow: 6,
    // slidesToScroll: 6,
    prevArrow: '<div class="btn-slider btn-left"><i class = "fas fa-chevron-left"></i></div>',
    nextArrow: '<div class="btn-slider btn-right"><i class="fas fa-chevron-right"></i></div>',
    mobileFirst: true,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      }, {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
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

  $('.testimonials__content').slick({
      dots: false,
      infinite: false,
      speed: 300,
      // slidesToShow: 3,
      // slidesToScroll: 3,
      rows: 0,
      prevArrow: '<div class="btn-slider btn-left"><i class ="fas fa-chevron-left"></i></div>',
      nextArrow: '<div class="btn-slider btn-right"><i class="fas fa-chevron-right"></i></div>',
      mobileFirst: true,
      responsive: [{
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
          }
        }
      ]
    })
    .on('setPosition', function(event, slick) {
      slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });
});