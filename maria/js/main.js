$('#toggleMenu').click(function(){
	if($(this).hasClass('active--btn')){
	    $(this).removeClass('active--btn');
	    $('#mobileMenu').removeClass('active--btn');
	}else{
	    $(this).addClass('active--btn');
	    $('#mobileMenu').addClass('active--btn');
	}
});
$('.concerts-tab').click(function() {
var id = $(this).attr('data-tab'), // 1
    content = $('.concerts-list[data-tab="'+ id +'"]'); // 2

  $('.concerts-tab.current').removeClass('current'); // 1
     $(this).addClass('current'); // 2
     
    $('.concerts-list.active--content-tab').removeClass('active--content-tab'); // 3
     content.addClass('active--content-tab'); // 4
});
$(document).ready(function(){
    const navOffset = $('#header').offset().top + 30;
    const navHeight = $('#header').height();
    const navHeightAdmin = $('#header').height();
    $(window).scroll(function(){
        const scrolled = $(this).scrollTop();
        const headerHeight = $('#header').height() + 'px';
        if(scrolled > 0) {
            $('#header').addClass('nav-fixed');  
        } else if (scrolled <= navOffset){
            $('#header').removeClass('nav-fixed');
        }
    });
});