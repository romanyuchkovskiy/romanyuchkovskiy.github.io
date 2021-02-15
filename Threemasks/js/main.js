$(document).ready(function(){
	$('.blogers-slider').owlCarousel({
		items: 3,
		nav: false,
		center: true,
		dots: true,
		loop: true,
		slidesToScroll: 1,
		responsive : {
		    // breakpoint from 0 up
		    320 : {
		        items: 1,
		        
		    },
		    1200 : {
		    	items: 3,
		    }
		}
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
		nav: false,
		center: true,
		dots: false,
		loop: true,
		slidesToScroll: 1,
		responsive : {
		    // breakpoint from 0 up
		    320 : {
		        items: 1,
		        
		    },
		    1200 : {
		    	items: 3,
		    }
		}
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