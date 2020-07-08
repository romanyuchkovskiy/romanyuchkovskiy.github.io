$(document).ready(function(){
  $('.header-slider').owlCarousel({
    items: 1,
    dots: true,
    dotsContainer: '.owl-dots-block'
  });
  $('.owl-dots__item').on('click', 'li', function(e) {
     owl.trigger('to.owl.carousel', [$(this).index(), 300]);
  });
   $('.testimonials-slider').owlCarousel({
    items: 3,
    dots: true,
    dotsContainer: '.testi-dots-block'
  });
   $('.testi-dots__item').on('click', 'li', function(e) {
      owl.trigger('to.owl.carousel', [$(this).index(), 300]);
   });

    $('.works-slider').owlCarousel({
     items: 1,
     dots: true,
     dotsContainer: '.works-dots-block'
   });
    $('.works-dots__item').on('click', 'li', function(e) {
       owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });


 $('.why-item').click(function() {
      var id = $(this).attr('data-tab'), // 1
          content = $('.why-content[data-tab="'+ id +'"]'); // 2

      $('.why-item.why-active').removeClass('why-active'); // 1
         $(this).addClass('why-active'); // 2
         
	   $('.why-content.why-visible').removeClass('why-visible'); // 3
	     content.addClass('why-visible'); // 4
 });






});