$(document).ready(function(){
    //плавный скролл
	$("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });
    $(".partners-slider").owlCarousel({
		items: 3,
		nav: true,
		dots: true,
		navText: ['','']
	});
});