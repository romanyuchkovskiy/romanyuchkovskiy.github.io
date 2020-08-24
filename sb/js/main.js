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
        loop: true,
        navText: ['',''],
        responsiveClass: true,
        responsive: {
            320:{
                items: 1,
                nav: true,
                dots: false
            },
            578:{
                items: 1,
                nav: true,
                dots: false
            },
            1200:{
                items: 3,
                nav: true,
                dots: true
            }
        }
    });
    $('#openMobile').on('click', function(){
        $('#listMenu').show(300);
    });
    $('#closeMenu').on('click', function(){
        $('#listMenu').hide(300);
    });
    $('#listMenu .nav-list .nav-link').click(function(){
		$('#listMenu').hide(300);
	});
});