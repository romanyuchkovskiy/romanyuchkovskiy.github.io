$(document).ready(function(){
	$('#mobile-button').on('click', function() {
		$('#mobile-navigation').addClass('mobile__active');
		$('#mobile-overlay').css('display' , 'block');
	});
	$('#mobile-overlay').on('click', function() {
		$(this).hide();
		$('#mobile-navigation').removeClass('mobile__active');
	});
});