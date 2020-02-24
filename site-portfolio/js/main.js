let
	lBtn = document.getElementById('lastBtn');
	lWindow = document.getElementById('lastProject');
	overlay = document.getElementById('overlay');
let
  cta = document.getElementsByClassName('header-cta');
  up = document.getElementById('up');

lBtn.onclick = function () {
	lWindow.style.display = 'flex'
	overlay.style.display = 'block'
	overlay.style.zIndex = '1'
}

cta.onclick = function () {
 up.style.display = 'flex'
}
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const body = anchor.getAttribute('href').substr(1)
    
    document.getElementById(body).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}