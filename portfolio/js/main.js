$(document).ready(function(){
	$("a[href*='#']").mPageScroll2id();

	$("#order-layout").on('click', function(){
		$("#modal-1").show();
	 });
	 $("#order-build").on('click', function(){
		$("#modal-2").show();
	 });
	 $(".modal-close").on('click', function(){
	 	$("#modal-1").hide();
	 	$("#modal-2").hide();
	 });
});
