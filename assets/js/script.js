$(document).ready(function ($) {
  // Navbar and scrolling
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

  // YT popup - Magnific popup lib
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // Swiper lib
  const swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 5000,
    },
  });
  const clientSwiper = new Swiper(".swiper.client", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    },
  });

  // Counter up
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
