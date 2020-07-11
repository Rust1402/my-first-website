$(document).ready(function(){
    $('.main-burger').click(function(event){
        $('.main-burger,.nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});