$(document).ready(function() {

  $('.skills__content').owlCarousel({
    loop: false,
    items: 4,
    nav: true,
    dots: false,
    margin: 15,
    navText: ["<div class='btn-slider btn-left'><i class = 'fas fa-chevron-left'></i></div>", "<div class='btn-slider btn-right'><i class='fas fa-chevron-right'></i></div>"],
    responsiveclass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })
  $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    e.target // newly activated tab
    e.relatedTarget // previous active tab
    $(".owl-carousel").trigger('refresh.owl.carousel');
  });

  $('.skills__content-02').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    navText: ["<div class='btn-slider btn-left'><i class = 'fas fa-chevron-left'></i></div>", "<div class='btn-slider btn-right'><i class='fas fa-chevron-right'></i></div>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    }
  })
  $('.testimonials__content').owlCarousel({
    loop: true,
    items: 4,
    nav: true,
    dots: false,
    navText: ["<div class='btn-slider btn-left'><i class = 'fas fa-chevron-left'></i></div>", "<div class='btn-slider btn-right'><i class='fas fa-chevron-right'></i></div>"],
    autoHeight: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: false
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  })
});