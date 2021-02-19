$(document).ready(function(){
	$('.testi-slider').owlCarousel({
		items: 3,
		nav: true,
		dots: true,
		center: true,
		loop: true,
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
	$('#ctaTrigger').on('click', function(event){
		event.preventDefault();
		$('.modal').show(100);
		$('.modal-content').show(100);
	});
	$('#modalClose').on('click', function(event){
		event.preventDefault();
		$('.modal').hide(100);
		$('.modal-content').hide(100);
	});
	$('#openNav').on('click', function(){
		$('.mob-menu-wrp').show(200);
		$('section').css('z-index', 'unset');
		$('footer').css('z-index', 'unset');
		$('.testi').css('display', 'none');
	});
	$('#closeMenu').on('click', function(){
		$('.mob-menu-wrp').hide(200);
		$('section').css('z-index', '1');
		$('footer').css('z-index', '1');
		$('.testi').css('display', 'block');
	});
	$('.mobile-menu .nav-list .nav-link').on('click', function(){
		$('.mob-menu-wrp').hide(200);
		$('section').css('z-index', '1');
		$('footer').css('z-index', '1');
		$('.testi').css('display', 'block');
	});
});
jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var dqv = $(".modal-content"); // тут указываем ID элемента
        var dqvm = $(".modal"); // тут указываем ID элемента
        if (!dqv.is(e.target) // если клик был не по нашему блоку
            && dqv.has(e.target).length === 0) { // и не по его дочерним элементам
            dqv.hide(); // скрываем его
 			dqvm.hide(); // скрываем его
        }
    });
});
