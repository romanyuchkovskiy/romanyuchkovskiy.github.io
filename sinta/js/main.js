$(document).ready(function(){
	$('#openMenu').on('click', function(){
		$('#mobileMenu').show(200);
	});
	$('#closeMenu').on('click', function(){
		$('#mobileMenu').hide(200);
	});
	$('#mobileMenu .nav-list .nav-item .nav-link').on('click', function(){
		$('#mobileMenu').hide(300);
	});
});