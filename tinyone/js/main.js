$(document).ready(function(){
  $(".header-slider").owlCarousel({
  		items: 1,
  		nav: false,
  		navText: ['',''],
  		dots: true,
      responsive:{
              0:{
                  items:1,
                  dots:true
              },
              320:{
                  items:1,
                  nav:false
              },
          }
  });

//плавный скролл к якорям
  $(".nav-list").on("click","a", function (event) {
  		event.preventDefault();
  		var id  = $(this).attr('href'),
  			top = $(id).offset().top;
  		$('body,html').animate({scrollTop: top}, 900);
  	});

  $('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.nav-list').toggleClass('nav-list_active');
  });
  $('.nav-link').on('click', function(){
     $('.nav-list').removeClass('nav-list_active');
      $('.menu-btn').removeClass('menu-btn_active');
  });
});
