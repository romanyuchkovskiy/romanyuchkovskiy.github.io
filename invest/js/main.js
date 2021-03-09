const swiper = new Swiper('.swiper-enterprice', {

    direction: 'horizontal',

    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
    nextEl: '.enterprice-nav__next',
    prevEl: '.enterprice-nav__prev',
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }


});


const swiperInvestments = new Swiper('.swiper-investments', {

  direction: 'vertical',
  
  slidesPerView: 3,
  mousewheel: true,
  
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  
  

  
  scrollbar: {
    el: '.swiper-scrollbarInvestments',
  },
  breakpoints: {
      320: {
        slidesPerView: 1,
        direction: 'horizontal',
        spaceBetween: 1,
      },
      1000: {
        slidesPerView: 3,
        direction: 'vertical',
      },
    }
});


$('.investitions-head').on('click', function (){
  $(this).toggleClass('showed');
});
$('#mobileOpen').on('click', function(){
  $('#mobileMenu').show(200);
});
$('#mobileClose').on('click', function(){
  $('#mobileMenu').hide(200);
});

$('.investitions-details').on('click', function(){
  $('.investitions__window').show(200);
});
$('.investitions-modal-close').on('click', function(){
  $('.investitions__window').hide(200);
});


$('.search-close').on('click', function(){
  $('.search-wrapper').hide(200);
  $('.search').css('padding-top', '0');
});

