$(document).ready(function(){
	$('.blogers-slider').owlCarousel({
		items: 3,
		nav: true,
		center: true,
		dots: true,
		loop: true,
		slidesToScroll: 1
	});

	var owl=$(".blogers-slider");
		owl.owlCarousel();
		//$(".next") - находим нашу кнопку
		$(".slider-next").click(function(){
			owl.trigger("next.owl.carousel");
		});
		$(".slider-prev").click(function(){
			owl.trigger("prev.owl.carousel");
		});

	$('.thanks-slider').owlCarousel({
		items: 3,
		nav: true,
		center: true,
		dots: false,
		loop: true,
		slidesToScroll: 1
	});

	var owl=$(".thanks-slider");
		owl.owlCarousel();
		//$(".next") - находим нашу кнопку
		$(".thslider-next").click(function(){
			owl.trigger("next.owl.carousel");
		});
		$(".thslider-prev").click(function(){
			owl.trigger("prev.owl.carousel");
		});
});