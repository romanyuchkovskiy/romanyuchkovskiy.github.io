let
	playedBtn = document.getElementById('playBtn');
	tv = document.getElementById('mainTv');
	close = document.getElementById('close');
	overlay = document.getElementById('overlayWindow');


playedBtn.onclick = function() {
	tv.style.cssText = 'width: 100%; height: 100%'
	overlay.style.display = 'block'
}

close.onclick = function() {
	tv.style.cssText = 'width: 0; height: 0'
	overlay.style.display = 'none'
}