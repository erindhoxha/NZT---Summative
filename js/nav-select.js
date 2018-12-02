
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
            else if ($(this).scrollTop() > 700 && $(".card-wrap").length != 0) {
                $('.follow-up-input').fadeIn();
            } else {
                $('.follow-up-input').fadeOut();
            }
        });
    });

});


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        $("#follow-up-input").css('top', '0px');
        document.getElementById("follow-up-input").style.transition = "0.3s ease";
    } else {
        $("#follow-up-input").css('top', '-60px');
    }
    prevScrollpos = currentScrollPos;
}


$(document).on('resize, ready', function () {
    // Add class if screen size equals
    var $window = $(window),
        $navbar = $('#navbar-lg');

    function resize() {

        if ($window.width() < 768) {
            scrollWindow();
            return $navbar.attr('id', 'navbar');
            /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
        } else if ($window.width() > 768) {
            return $navbar.attr('id', 'navbar-lg');
        }
    }
    $window.resize(resize).trigger('resize');
});


function scrollWindow() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0px";
            document.getElementById("navbar").style.transition = "0.3s ease";
        } else {
            document.getElementById("navbar").style.top = "-57px";
        }
        prevScrollpos = currentScrollPos;
    }
}
