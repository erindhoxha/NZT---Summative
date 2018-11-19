
// $('body').css('overflow', 'hidden');
$('.btn-accomodation').on('click', function (){
    $('body').css('overflow','auto');
    $('html,body').animate({
    scrollTop: $(".container-result").offset().top},
    'slow');
});
















































