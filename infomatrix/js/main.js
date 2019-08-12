$(document).ready(function(){
	 $("#main-slider").owlCarousel({
	 	items: 1,
	 	nav: true,
	 	dots: true,
	 	loop: true,
	 	navText: ['',''],
	 	autoplay: true,
	 	autoplayTimeout: 3000,
	 	autoplayHoverPause: true
	 });

	 $("a[href*='#']").mPageScroll2id();
});