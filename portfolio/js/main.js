$(document).ready(function(){
	$("a[href*='#']").mPageScroll2id();

	// $("#order-layout").on('click', function(){
	// 	$("#modal-1").show();
	// 	$(".overlay").show();
	// });
	// $("#order-build").on('click', function(){
	// 	$("#modal-2").show();
	// 	$(".overlay").show();
	// });
	// $(".modal-close").on('click', function(){
	// 	$("#modal-1").hide();
	// 	$("#modal-2").hide();
	// 	$(".overlay").hide();
	// });

	var rellax = new Rellax('.rellax', {
		speed: -3,
	    center: false,
	    round: true,
	    vertical: true,
	    horizontal: false
	});
});