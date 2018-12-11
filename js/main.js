
 $(document).ready(function() {
     document.ontouchmove = function(e){
          e.preventDefault();
          };
 });

 input.onfocus = function () {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
};


$(".footer-links li a").on('click', function() {
    $(".footer-links");
    var whereToGo =  $(this).attr('href');
    console.log(whereToGo);
    $('html,body').animate({
        scrollTop: $(whereToGo).offset().top
    },
        'slow');
});



$(function () {
    setTimeout(function () {
        $('.nzt-container').fadeOut(500);
        $('.hide-everything').show();
    }, 2200);
});

var transpOrAcc = "";
var numberOfDays = "";
var totalPrice = "";
$(".alert").hide();
$('.btn-search').on('click', function () {
    var transportOrAccommodation = $("#accom-or-transport").val();
    var peopleValue = $("#people-search").val().slice(0, 1);
    peopleValue = parseInt(peopleValue);
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

    var firstDate = $("#datepicker").datepicker("getDate");
    var secondDate = $("#datepicker2").datepicker("getDate");
    if (firstDate == undefined || secondDate == undefined) {
        $(".alert").show();
    } else {
    numberOfDays = Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay));
    }
    if ($("#accom-or-transport").val() == "What do you need?") {
        $(".alert").show();
    }
    if (transportOrAccommodation == "Accommodation") {
    transpOrAcc = accommodation;
    } else {
    transpOrAcc = transport;
    }
    // console.log(transportOrAccommodation)
    // console.log(numberOfDays);
    // console.log(peopleValue);


    if (numberOfDays > 15 || firstDate >= secondDate) {
        $(".alert").show(500);
        $(".line").hide(500);
    } else {
        // $('body').css('overflow', 'auto');
        $(".alert").hide(500);
        $(".line").show(500);
        $('html,body').animate({
                scrollTop: $(".container-result").offset().top
            },
            'slow');
    }
    
    if (transportOrAccommodation == "Accommodation") {
        $("#card-container").empty();
        var info = document.getElementById('summative-template').innerHTML;
        var template = Handlebars.compile(info);
        var dataTemplate = template(accommodation);
        templateWrite = document.getElementById('card-container').innerHTML += dataTemplate;
        $(".fuel").hide();
        $(".fuel-generate").hide();
        $(".meals").show();
        var answerData = accommodation;
        
    } else if (transportOrAccommodation == "Transport") {
        $("#card-container").empty();
        var info = document.getElementById('summative-template').innerHTML;
        var template = Handlebars.compile(info);
        var dataTemplate = template(transport);
        templateWrite = document.getElementById('card-container').innerHTML += dataTemplate;
        $(".meals").hide();
        $(".fuel").show();
        $(".fuel-generate").show();
        var answerData = transport;
    }

    // FILTER THE CARDS - ADD THE CLASSES WHICH IS APPROPRIATE .daysd + .peoplep + card-wrap
    function doFiltering() {
        $(".card-wrap").hide();
        $(".card-wrap." + numberOfDays + "d." + peopleValue + "p").show();
    }
    doFiltering();


    $(".btn-book").on('click', function () {
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        $("#datepicker2").on('change', function () {

            $(".price-modal").text('Price: $' + answerData.types[dataNr].price * numberOfDays);
        });

        $(".modal-body").css('text-align', 'center');
        $(".rating-container").empty();
        // console.log($(this).closest(".card-wrapper").attr('data-nr'));
        var dataNr = $(this).closest(".card-wrapper").attr('data-nr');
        $("#theModal").attr('data-nr', dataNr);
        for (var i = 0; i < answerData.types[dataNr].images.length; i++) {
            $(".image-" + i).attr('src', "img/" + answerData.types[dataNr].images[i]);
        }
        $(".fuel-price").text(answerData.types[dataNr].approxFuelSpend);
        $(".price-modal").text('Price: $' + answerData.types[dataNr].price + " x " + numberOfDays + " days = $" + answerData.types[dataNr].price * numberOfDays);
        totalPrice = answerData.types[dataNr].price * numberOfDays;
        $(".modal-title").text(answerData.types[dataNr].name);
        $(".modal-description").text(answerData.types[dataNr].description);
        $(".card-wrapper").find($(".rating")[dataNr]).clone().appendTo(".rating-container");
        $(".modal-body .rating").addClass("modal-rating");
        $(".modal-body .rating").removeClass("rating");
        $(".modal-body .modal-rating .btn-review-modal").addClass('btn-review-modal-new');
        $(".modal-body .modal-rating .btn-review-modal").removeClass('btn-review-modal');
        if (answerData == accommodation) {
            $(".fuel-usage").text("");
            $(".fuel-usage").text(answerData.types[dataNr].people + " ");
            $(".fuel-usage").append('<i class="fas fa-user"></i>');
        for (var i = 0; i < $(".meals").length; i++) {
            $(".meals-image-" + i).attr('src', answerData.types[dataNr].mealsImage[i]);
         }
        }
        if (answerData == transport) {
        $(".fuel-usage").text(answerData.types[dataNr].fuel);
        }
        if (answerData.types[dataNr].value == undefined) {
            $(".special-modal").hide();
        } else {
        $(".special-modal").show();
        $(".special-modal").text(answerData.types[dataNr].value);
        }
        
            // console.log($(this).closest(".card-wrapper").attr('data-nr'));
            var dataNr = $(this).closest(".card-wrapper").attr('data-nr');
            for (var i = 0; i < $(".review").length; i++) {
                $(".review-" + i + "-text").text(answerData.types[dataNr].reviews[i]);
            }
            $(".modal-review-title").text(answerData.types[dataNr].name);

            $(".btn-exit").on('click', function() {
                $('#theModal').modal('hide');
            });
    })
    
    $(".btn-continue").on('click', function(){
        dontLetTextOnInputs(cardNumber);
        dontLetTextOnInputs(expFrom);
        dontLetTextOnInputs(expTo);
        dontLetTextOnInputs(cvcNumber);
        $("#card-coupon-code").val("");
        $("#card-coupon-code").css('border', '1px solid #ebebeb');
        $(".total-price").text('$' + totalPrice);
        clicked = false;
        $(".alert").hide();
    })

    totalPrice = parseInt(totalPrice);


     var clicked;

    $(".btn-add-to-cart.add-to-card-breakfast").on('click', function() {
        dontLetTextOnInputs(cardNumber);
        dontLetTextOnInputs(expFrom);
        dontLetTextOnInputs(expTo);
        dontLetTextOnInputs(cvcNumber);
        $(".alert").hide();
        $("#card-coupon-code").val("");
        $("#card-coupon-code").css('border', '1px solid #ebebeb');
        clicked = true;
        totalPriceAfter = totalPrice + 70;
        $(".total-price").text('$' + totalPrice + ' + $70 Breakfast option = $' + totalPriceAfter);
    });
    $(".btn-add-to-cart.add-to-card-lunch-dinner").on('click', function() {
        dontLetTextOnInputs(cardNumber);
        dontLetTextOnInputs(expFrom);
        dontLetTextOnInputs(expTo);
        dontLetTextOnInputs(cvcNumber);
        $(".alert").hide();
        $("#card-coupon-code").val("");
        $("#card-coupon-code").css('border', '1px solid #ebebeb');
        clicked = true;
        totalPriceAfter = totalPrice + 70;
        $(".total-price").text('$' + totalPrice + ' + $70 Lunch option = $' + totalPriceAfter);
    });

    $(".coupon-go").on('click', function(){
        if (clicked == true) {
        var totalPriceCoupon = totalPriceAfter * 0.2;
        var totalPriceSubtracted = totalPriceAfter - totalPriceCoupon;
        totalPriceSubtracted = parseInt(totalPriceSubtracted);
        totalPriceSubtracted = Math.floor(totalPriceSubtracted);  
        } else {
        var totalPriceCoupon = totalPrice * 0.2;
        var totalPriceSubtracted = totalPrice - totalPriceCoupon;
        totalPriceSubtracted = parseInt(totalPriceSubtracted);
        totalPriceSubtracted = Math.floor(totalPriceSubtracted);            
    }
        if ($("#card-coupon-code").val() == "YOOBEE20") {
        $(".success-coupon").show(300);
        if (clicked == true) {
            $(".total-price").text('$' + totalPriceAfter + "-20% = $" + totalPriceSubtracted);
        } else {
            $(".total-price").text('$' + totalPrice + "-20% = $" + totalPriceSubtracted);
        }
        $(".alert-coupon").hide(300);
        $(".success-coupon").show(300);
        $("#card-coupon-code").css('border', '2px solid #05C205');        
    } else {
        $(".success-coupon").hide(300);
        $(".alert-coupon").show(300);
        $("#card-coupon-code").css('border', '1px solid #ebebeb');   
        $(".total-price").text('$' + totalPrice);              
    }
    });

    $(".btn-review-modal").on('click', function () {
            // console.log($(this).closest(".card-wrapper").attr('data-nr'));
            var dataNr = $(this).closest(".card-wrapper").attr('data-nr');
            for (var i = 0; i < $(".review").length; i++) {
                $(".review-" + i + "-text").text(answerData.types[dataNr].reviews[i]);
            }
            $(".modal-review-title").text(answerData.types[dataNr].name);
    })
});

/* Demo purposes only */
$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);


$(".reload").on('click', function () {
    location.reload();
})
$(".close-btn").on('click', function () {
    $(".chat-popup").hide(500);
})


var types = "";
var newDate = new Date();
var alwaysNewDate = newDate.getFullYear();

$(".date-year").text(alwaysNewDate);



