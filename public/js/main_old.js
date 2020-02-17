window.addEventListener('DOMContentLoaded', function() {

  jQuery('.hamburger').click(function(){
      jQuery('body').toggleClass('activemobilenav');
  });
  var swiper = new Swiper('#homePageBanner', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 5000,
    },
  });
  var newsCarousel = new Swiper('#newsCarousel', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        980: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 1,
        },
      }
    });

  var newsCarousel = new Swiper('#testimonialsCarousel', {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });

  $(window).scroll(function(){
      if ($(window).scrollTop() >= 100) {
          $('header').addClass('fixed-header-visible');
      }
      else {
          $('header').removeClass('fixed-header-visible');
      }
  });

});

var resizeTimer = null;
jQuery(window).resize(function (){
  clearTimeout(resizeTimer);
   resizeTimer= setTimeout(function(){
    
   }, 10);
});//END OF WINDOW RESIZE
console.log("ready!!");




