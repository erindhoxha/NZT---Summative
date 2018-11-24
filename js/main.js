// $('body').css('overflow', 'hidden');
$('.btn-accomodation').on('click', function () {
    // $('body').css('overflow', 'auto');
    $('html,body').animate({
            scrollTop: $(".container-result").offset().top
        },
        'slow');


    var info = document.getElementById('summative-template').innerHTML;
    var template = Handlebars.compile(info);
    var dataTemplate = template(transport);
    var templateWrite = document.getElementById('card-container').innerHTML += dataTemplate;
});




/* Demo purposes only */
$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);


/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('select').each(function () {
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

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

    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function () {
            $(this).removeClass('active').next('ul.select-options').hide();
            $(".z__index").toggleClass('z___index');
            $(".z__index").css('z-index', '0');
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
        $(".z__index").toggleClass('z___index');
    });

    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide(500);
        //console.log($this.val());
    });

    $(document).click(function () {
        $styledSelect.removeClass('active');
        $(".z__index").removeClass('z___index');
        $list.hide(500);
    });

});

$(".btn-book").on('click', function () {

    

    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    $("#datepicker2").on('change', function() {
     console.log("Hello");
     var firstDate = $( "#datepicker").datepicker( "getDate" )
     var secondDate = $( "#datepicker2").datepicker( "getDate" )
     var numberOfDays = Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay));
     console.log(numberOfDays);
     $(".price-modal").text('Price: $' + transport.types[dataNr].price * numberOfDays);
    });

    $(".modal-body").css('text-align', 'center');
    $(".rating-container").empty();
    console.log($(this).closest(".card-wrapper").attr('data-nr'));
    var dataNr = $(this).closest(".card-wrapper").attr('data-nr');
    $("#theModal").attr('data-nr', dataNr);
    for (var i = 0; i < transport.types[dataNr].images.length; i++) {
        $(".image-" + i).attr('src', "img/" + transport.types[dataNr].images[i]);
    }
    $(".modal-title").text(transport.types[dataNr].name);
    $(".modal-description").text(transport.types[dataNr].description);
    $(".card-wrapper").find($(".rating")[dataNr]).clone().appendTo(".rating-container");
})


    $(document).ready(function () {
        // hide .navbar first
        $(".follow-up-input").hide();
        // fade in .navbar
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 3000) {
                    $('.follow-up-input').fadeOut();
                }
                // set distance user needs to scroll before we start fadeIn
               else if ($(this).scrollTop() > 500) {
                    $('.follow-up-input').fadeIn();   
                } else {
                    $('.follow-up-input').fadeOut();
                }
            });
        });

    });


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("follow-up-input").style.top = "0";
    document.getElementById("follow-up-input").style.transition = "0.3s ease";
  } else {
    document.getElementById("follow-up-input").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}
$(".reload").on('click', function() {
    location.reload();
})
  $(".close-btn").on('click', function() {
      $(".chat-popup").hide(500);
  })

  $( function() {
    $( "#datepicker" ).datepicker();
  } );
  
  $( function() {
    $( "#datepicker2" ).datepicker();
  } );

var dateToday = new Date(); 

$("#datepicker").datepicker({
    dateFormat: 'dd-mm-yy',
    minDate: dateToday
});
$("#datepicker2").datepicker({
    dateFormat: 'dd-mm-yy',
    minDate: dateToday
});


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.transition = "0.3s ease";
  } else {
    document.getElementById("navbar").style.top = "-55px";
  }
  prevScrollpos = currentScrollPos;
}

$(document).on('resize, ready', function() {
    // Add class if screen size equals
    var $window = $(window),
    $navbar = $('#navbar-lg');
   
    function resize() {
   
       if ($window.width() < 768) {
         return $navbar.attr('id', 'navbar');
       } else if ($window.width() > 768) {
        return $navbar.attr('id', 'navbar-lg');        
       }
     }
     $window.resize(resize).trigger('resize');
   });
   
   var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
   var numberOfDays;
   $("#datepicker2").on('change', function() {
    console.log("Hello");
    var firstDate = $( "#datepicker").datepicker( "getDate" )
    var secondDate = $( "#datepicker2").datepicker( "getDate" )
    var numberOfDays = Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay));
    console.log(numberOfDays);
   });
