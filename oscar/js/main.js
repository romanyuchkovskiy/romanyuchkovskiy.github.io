let
	playedBtn = document.getElementById('playBtn');
	tv = document.getElementById('mainTv');
	close = document.getElementById('close');
	overlay = document.getElementById('overlayWindow');
	menuOn = document.getElementById('menuOpen');
	menuOff = document.getElementById('menuClose');
	menuList = document.getElementById('menuList');

tv.style.cssText = 'width: 0; height: 0'

playedBtn.onclick = function() {
	tv.style.cssText = 'width: 100%; height: 100%'
	overlay.style.display = 'block'
}

close.onclick = function() {
	tv.style.cssText = 'width: 0; height: 0'
	overlay.style.display = 'none'
}

//мобильное меню - открыть\скрыть
menuOn.onclick = function() {
	menuList.style.display = 'flex'
	menuOn.style.display = 'none'
	console.log('cliiiick');
}
menuOff.onclick = function() {
	menuList.style.display = 'none'
	menuOn.style.display = 'block'
}
