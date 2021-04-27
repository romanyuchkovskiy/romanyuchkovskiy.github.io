const swiperMens = new Swiper('.swiper-mens', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  navigation: {
    nextEl: '.nav-mens__next',
    prevEl: '.nav-mens__prev',
  },
  speed: 300,
  breakpoints: {
          320: {
            slidesPerView: 2,
            // spaceBetween: 1,
          },
          578: {
            slidesPerView: 3,
            // spaceBetween: 1,
          },
          1000: {
            slidesPerView: 4,
            // spaceBetween: 40,
          },
        }
});
const swiperWoMens = new Swiper('.swiper-womens', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  speed: 300,
  navigation: {
    nextEl: '.nav-womens__next',
    prevEl: '.nav-womens__prev',
  },
  breakpoints: {
          320: {
            slidesPerView: 2,
            // spaceBetween: 1,
          },
          578: {
            slidesPerView: 3,
            // spaceBetween: 1,
          },
          1000: {
            slidesPerView: 4,
            // spaceBetween: 40,
          },
        }
});


const swiperCatalogWoMens = new Swiper('.swiper-catalog-womens', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination-womans',
    clickable: true,
  },
  autoplay: {
    delay: 800,
    disableOnInteraction: false,
  },
  breakpoints: {
      320: {
        slidesPerView: 2,
        // spaceBetween: 1,
      },
      578: {
            slidesPerView: 3,
            // spaceBetween: 1,
          },
      1000: {
        slidesPerView: 4,
        // spaceBetween: 40,
      },
    }
});
const swiperCatalogMens = new Swiper('.swiper-catalog-mens', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination-mens',
    clickable: true,
  },
  autoplay: {
    delay: 800,
    disableOnInteraction: false,
  },
  breakpoints: {
      320: {
        slidesPerView: 2,
        // spaceBetween: 1,
      },
      578: {
            slidesPerView: 3,
            // spaceBetween: 1,
          },
      1000: {
        slidesPerView: 4,
        // spaceBetween: 40,
      },
    }
});



function changeSpeedCatWomens() {
  var range = document.querySelector(".catalogWomensSpeed");
  var a = (swiperCatalogWoMens.params.speed = range.value * 100);
}

function changeSpeedCatMens() {
  var rangeM = document.querySelector(".catalogMensSpeed");
  var aM = (swiperCatalogMens.params.speed = rangeM.value * 100);
}



$(document).ready(function(){
  $('#mobileOpen').on('click', function(){
    $('#mobileMenu').show(200);
  });
  $('#mobileClose').on('click', function(){
    $('#mobileMenu').hide(200);
  });

  $('input[type="range"]').change(function () {
      var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
      
      $(this).css('background-image',
                  '-webkit-gradient(linear, left top, right top, '
                  + 'color-stop(' + val + ', #E5E5E5), '
                  + 'color-stop(' + val + ', #EFBF48)'
                  + ')'
                  );
  });
});


