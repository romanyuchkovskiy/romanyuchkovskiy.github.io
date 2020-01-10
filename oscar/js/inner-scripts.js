let
	menuOn = document.getElementById('menuOpen');
	menuOff = document.getElementById('menuClose');
	menuList = document.getElementById('menuList');

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