$(".btn-sort-lowest").on('click', function () {
    types = transpOrAcc.types.sort(function (a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
    });
    var nearResult = { types };
    $("#card-container").empty();       
    var info = document.getElementById('summative-template').innerHTML;
    var template = Handlebars.compile(info);
    var dataTemplate = template(nearResult);
    var templateWrite = document.getElementById('card-container').innerHTML += dataTemplate;


    // MODAL FOR LOWEST

    $(".btn-book").on('click', function () {
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        $("#datepicker2").on('change', function () {
    
            $(".price-modal").text('Price: $' + transpOrAcc.types[dataNr].price * numberOfDays);
        });
    
        $(".modal-body").css('text-align', 'center');
        $(".rating-container").empty();
        // console.log($(this).closest(".card-wrapper").attr('data-nr'));
        var dataNr = $(this).closest(".card-wrapper").attr('data-nr');
        $("#theModal").attr('data-nr', dataNr);
        for (var i = 0; i < transpOrAcc.types[dataNr].images.length; i++) {
            $(".image-" + i).attr('src', "img/" + transpOrAcc.types[dataNr].images[i]);
        }
        $(".price-modal").text('Price: $' + transpOrAcc.types[dataNr].price + " x " + numberOfDays + " days = $" + transpOrAcc.types[dataNr].price * numberOfDays);
        $(".fuel-price").text(transpOrAcc.types[dataNr].approxFuelSpend);

        totalPrice = transpOrAcc.types[dataNr].price * numberOfDays;
        $(".modal-title").text(transpOrAcc.types[dataNr].name);
        $(".modal-description").text(transpOrAcc.types[dataNr].description);
        $(".card-wrapper").find($(".rating")[dataNr]).clone().appendTo(".rating-container");
        $(".modal-body .rating").addClass("modal-rating");
        $(".modal-body .rating").removeClass("rating");
        $(".modal-body .modal-rating .btn-review-modal").addClass('btn-review-modal-new');
        $(".modal-body .modal-rating .btn-review-modal").removeClass('btn-review-modal');

        if (transpOrAcc == accommodation) {
            $(".fuel-usage").text("");
            $(".fuel-usage").text(transpOrAcc.types[dataNr].people + " ");
            $(".fuel-usage").append('<i class="fas fa-user"></i>');
            $(".fuel").hide();
        for (var i = 0; i < $(".meals").length; i++) {
            $(".meals-image-" + i).attr('src', transpOrAcc.types[dataNr].mealsImage[i]);
         }
        }

        
        if (transpOrAcc == transport) {
        $(".fuel-usage").text(transpOrAcc.types[dataNr].fuel);
        $(".meals").hide();
        }
        if (transpOrAcc.types[dataNr].value == undefined) {
            $(".special-modal").hide();
        } else {
        $(".special-modal").show();
        $(".special-modal").text(transpOrAcc.types[dataNr].value);
        }

            // console.log($(this).closest(".card-wrapper").attr('data-nr'));
            var dataNr = $(this).closest(".card-wrapper").attr('data-nr');
            for (var i = 0; i < $(".review").length; i++) {
                $(".review-" + i + "-text").text(transpOrAcc.types[dataNr].reviews[i]);
            }
            $(".modal-review-title").text(transpOrAcc.types[dataNr].name);

            $(".btn-exit").on('click', function() {
                $('#theModal').modal('hide');
            });
    })


    $(".btn-continue").on('click', function(){
        $("#card-coupon-code").val("");
        $("#card-coupon-code").css('border', '1px solid #ebebeb');
        $(".total-price").text('$' + totalPrice);
        clicked = false;
        $(".alert").hide();
    })

    totalPrice = parseInt(totalPrice);


     var clicked;

    $(".btn-add-to-cart.add-to-card-breakfast").on('click', function() {
        $(".alert").hide();
        $("#card-coupon-code").val("");
        $("#card-coupon-code").css('border', '1px solid #ebebeb');
        clicked = true;
        totalPriceAfter = totalPrice + 70;
        $(".total-price").text('$' + totalPrice + ' + $70 Breakfast option = $' + totalPriceAfter);
    });
    $(".btn-add-to-cart.add-to-card-lunch-dinner").on('click', function() {
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
    }
    });


    
        $(".btn-review-modal").on('click', function () {
            // console.log($(this).closest(".card-wrapper").attr('data-nr'));
            var dataNr = $(this).closest(".card-wrapper").attr('data-nr');
            for (var i = 0; i < $(".review").length; i++) {
                $(".review-" + i + "-text").text(transpOrAcc.types[dataNr].reviews[i]);
            }   $(".modal-review-title").text(transpOrAcc.types[dataNr].name);
        })
    // MODAL FOR LOWEST
         
})

