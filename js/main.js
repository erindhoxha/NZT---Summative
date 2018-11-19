
// $('body').css('overflow', 'hidden');
$('.btn-accomodation').on('click', function (){
    $('body').css('overflow','auto');
    $('html,body').animate({
    scrollTop: $(".container-result").offset().top},
    'slow');
});







/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

$(".btn-book").on('click', function() {
    $(".rating-container").empty();
    console.log($(this).closest(".card-wrapper").attr('data-nr'));
    var dataNr = $(this).closest(".card-wrapper").attr('data-nr');
    $("#theModal").attr('data-nr', dataNr);
    $(".modal-title").text(transport.types[dataNr].name);
    $(".modal-img").attr('src', "img/" + transport.types[dataNr].image);
    $(".modal-description").text(transport.types[dataNr].description);
    $(".price").text(' $' + transport.types[dataNr].price);
    $(".card-wrapper").find($(".rating")[dataNr]).clone().appendTo(".rating-container");
})









































