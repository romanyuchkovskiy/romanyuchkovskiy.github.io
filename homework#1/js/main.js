$(document).ready(function(){
	$('#callBtn').on('click', function(){
		$('#modal').toggle();
		$('.overlay').toggle();
	});
	$('#close').on('click', function(){
		$('#modal').hide();
		$('.overlay').hide();
	});
});
