
$(document).ready(function(){
    $('.vid-link').attr('src', 'https://www.youtube.com/вцвцвцвцвцвц');
    $('#playVideo').on('click', function(){
        $('#video').show(300);
        $('.overlay').show(300);
        $('.vid-link').attr('src', 'https://www.youtube.com/embed/55AjIj_vjik');
    });
    $('.modal-close').on('click', function(){
        $('#video').hide(300);
        $('.vid-link').attr('src', 'https://www.youtube.com/вцвцвцвцвцвц');
        $('.overlay').hide(300);
    });
});