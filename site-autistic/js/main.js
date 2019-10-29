let
	lowBtn = document.getElementById('lowPriceBtn')
	middleBtn = document.getElementById('middlePriceBtn')
	highBtn = document.getElementById('highPriceBtn')

	priceLow = document.getElementById('lowPrice')
	priceMiddle = document.getElementById('middlePrice')
	priceHigh = document.getElementById('highPrice')

priceLow.style.display = 'none'
middleBtn.classList.add('tab-active')
priceHigh.style.display = 'none'
lowBtn.onclick = function() {
	priceMiddle.style.display = 'none'
	middleBtn.classList.remove('tab-active')
	priceLow.style.display = 'block'
	this.classList.add('tab-active')
	highBtn.classList.remove('tab-active')
	priceHigh.style.display = 'none'
}
middleBtn.onclick = function() {
	priceMiddle.style.display = 'block'
	lowBtn.classList.remove('tab-active')
	priceLow.style.display = 'none'
	this.classList.add('tab-active')
	highBtn.classList.remove('tab-active')
	priceHigh.style.display = 'none'
}
highBtn.onclick = function() {
	priceMiddle.style.display = 'none'
	middleBtn.classList.remove('tab-active')
	priceHigh.style.display = 'block'
	this.classList.add('tab-active')
	lowBtn.classList.remove('tab-active')
	priceLow.style.display = 'none'
}