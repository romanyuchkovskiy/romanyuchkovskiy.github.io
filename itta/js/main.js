let
	open = document.getElementById('openMenu');
	close = document.getElementById('closeMenu');
	menu = document.getElementById('menu');
	overlay = document.getElementById('menuBg');


open.onclick = function() {
	menu.style.top = '0'
	overlay.style.height = '100%'
}
close.onclick = function() {
	menu.style.top = '-10000px'
	overlay.style.height = '0'
}

// function smoothScroll(Element) {

// Element = document.getElementById(Element);
// 	var selectedPosX = 0;
// 	var selectedPosY = 0;
// 	while (Element != null) {
// 	    selectedPosX += Element.offsetLeft;
// 	    selectedPosY += Element.offsetTop;
// 	    Element = Element.offsetParent;
// 	}
// 	window.scrollTo(selectedPosX, selectedPosY);
// }