var answer = "";
var answer2 = "";
var answerData = "";

//SLIDER
var selector = ".card-wrap";
$(".card-body").scrollTop();
$(".chat_icon").on('click', function () {
  $(".chat-popup").hide();
  $(".chat").slideToggle();
  $(".chat").addClass("toggled");
})

var hours = new Date().getHours();
var minutes = new Date().getMinutes();
if (minutes.toFixed().length == 1) {
  minutes = "0" + minutes;
}
var mid = 'am';
if (hours == 0) { //At 00 hours we need to show 12 am
  hours = 12;
} else if (hours > 12) {
  hours = hours % 12;
  mid = 'pm';
}

$(".msg_time").text(hours + ':' + minutes + mid);

$(".first_card").hide();
$(".user_card").hide();


$(".button-send").on('click', function () {
  var answer;
  var answer2;
  fourthAnswer();
  thirdAnswer();
  secondAnswer();
  firstAnswer();
  console.log(answer);
  console.log(answer2);
})

function firstAnswer() {

  $(".msg_time-sent").text(hours + ':' + minutes + mid);
  // SECOND ANSWER
  var inputValue = $(".type_msg").val().toLowerCase();
  // FIRST ANSWER
  $(".user_card").css('visibility', 'visible');
  $(".first_card").css('display', 'flex');
  $(".user_card").fadeIn(300);
  $(".user-answer").text(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
  $(".first_card").css('visibility', 'visible');
  $(".first_card").css('display', 'flex');
  $(".first_card").fadeIn(300);
  var name = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
  // var nameWithColours = name.fontcolor('green');
  $(".answer").text("Hi " + name + ", are you interested for Accommodation or Transport?");
  $(".type_msg").val("");
  if ($(".button-send").hasClass('classSentFirstMessage')) {
    // do nothing
  } else {
    $(".button-send").addClass('sentFirstMessage');
  }
  $(".answer").removeClass('answer');
  $(".button-send").addClass('classSentFirstMessage');
  $(".user-answer").addClass('firstAnswer');
  $(".user-answer").removeClass('user-answer');
  // FIRST ANSWER
}

function secondAnswer() {


  $(".msg_time-sent").text(hours + ':' + minutes + mid);
  // SECOND ANSWER
  var inputValue = $(".type_msg").val().toLowerCase();

  if ($(".button-send").hasClass("sentFirstMessage")) {
    $(".button-send").removeClass('sentFirstMessage');
    $(".user_card_2").css('visibility', 'visible');
    $(".user_card_2").fadeIn(300);
    $(".secondAnswer").text(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
    if (("transport").indexOf(inputValue) > -1) {
      $("#card-container").empty();
      var info = document.getElementById('summative-template').innerHTML;
      var template = Handlebars.compile(info);
      var dataTemplate = template(transport);
      var templateWrite = document.getElementById('card-container').innerHTML += dataTemplate;
      answerData = transport;
      transpOrAcc = transport;
      $(".meals").hide();
      
      $(".button-send").addClass('sentSecondMessageTransport');
      // ADD TRANSPORT STUFF HERE
      $(".first_card_2").css('display', 'flex');
      $(".thirdAnswer").text("Sweet, so you need Transportation... Could you let me know, for how many people?")
      $(".card-body").scrollTop(1000);
    } else if (("accommodation").indexOf(inputValue) > -1 || ("accomodation").indexOf(inputValue) > -1 || ("acomodation").indexOf(inputValue) > -1) {

      $("#card-container").empty();
      var info = document.getElementById('summative-template').innerHTML;
      var template = Handlebars.compile(info);
      var dataTemplate = template(accommodation);
      var templateWrite = document.getElementById('card-container').innerHTML += dataTemplate;
      answerData = accommodation;
      transpOrAcc = accommodation;
      $(".fuel").hide();

      $(".button-send").addClass('sentSecondMessageAccommodation');
      $(".first_card_2").css('display', 'flex');
      $(".thirdAnswer").text("Sweet, so you need Accommodation... Could you let me know, for how many people?")
      $(".card-body").scrollTop(1000);
      // Add accommodation stuff here
    } else {
      $(".first_card_2").css('display', 'flex');
      $(".thirdAnswer").text("Sorry, we don't have any answer for that. Please, fill the input on the website, or alternatively contact us.")
      // $(".button-send").addClass('sentFirstMessage');    
      $(".card-body").scrollTop(1000);
    }
  }
  // SECOND ANSWER
}


function thirdAnswer() {
  $(".msg_time-sent").text(hours + ':' + minutes + mid);
  // SECOND ANSWER
  var inputValue = $(".type_msg").val().toLowerCase();
  // Third answer

  if ($(".button-send").hasClass("sentSecondMessageTransport")) {
    $(".button-send").removeClass("sentSecondMessageTransport");
    $(".user_card_3").css('display', 'flex');
    $(".thirdUserAnswer").text(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
    // $(".thirdUserAnswer").removeClass('thirdUserAnswer');
    $(".button-send").addClass('sentThirdMessageTransport');
    // DO STUFF FOR TRANSPORT HERE
    if (("1 one").includes(inputValue)) {
      answer = 1;
      howManyPeople();
    } else if (("2 two").includes(inputValue)) {
      answer = 2;
      howManyPeople();
    } else if (("3 three").includes(inputValue)) {
      answer = 3;
      howManyPeople();
    } else if (("4 four").includes(inputValue)) {
      answer = 4;
      howManyPeople();
    } else if (("5 five").includes(inputValue)) {
      answer = 5;
      howManyPeople();
    } else if (("6 six").includes(inputValue)) {
      answer = 6;
      howManyPeople();
    } else {
      $(".first_card_3").css('display', 'flex');
      $(".card-body").scrollTop(1000);
      $(".fourthAnswer").text("Sorry, we can't understand that number, please type it again");
    }

  } else if ($(".button-send").hasClass("sentSecondMessageAccommodation")) {
    $(".button-send").removeClass("sentSecondMessageAccommodation");
    $(".button-send").removeClass('sentFirstMessage');
    $(".user_card_3").css('display', 'flex');
    $(".thirdUserAnswer").text(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
    $(".thirdUserAnswer").removeClass('thirdUserAnswer');
    $(".button-send").addClass('sentThirdMessageAccommodation');
    // DO STUFF FOR ACCOMMODATION HERE
    if (("1 one").includes(inputValue)) {
      answer = 1;
      howManyPeople();
    } else if (("2 two").includes(inputValue)) {
      answer = 2;
      howManyPeople();
    } else if (("3 three").includes(inputValue)) {
      answer = 3;
      howManyPeople();
    } else if (("4 four").includes(inputValue)) {
      answer = 4;
      howManyPeople();
    } else if (("5 five").includes(inputValue)) {
      answer = 5;
      howManyPeople();
    } else if (("6 six").includes(inputValue)) {
      answer = 6;
      howManyPeople();
    } else {
      $(".first_card_3").css('display', 'flex');
      $(".card-body").scrollTop(1000);
      $(".fourthAnswer").text("Sorry, we can't understand that number, please input in the website your options.");
    }
  }

  function howManyPeople() {
    $(".first_card_3").css('display', 'flex');
    var name = $(".firstAnswer").text();
    $(".fourthAnswer").text("Ok cool " + name + ", you've chosen: " + answer + " people. How many days do you wish to stay?");
    var people = answer;
    $(".card-body").scrollTop(1000);
    $(".button-send").addClass('sentMessagePeople');
    $(".button-send").removeClass('sentThirdMessageAccommodation');
    $(".button-send").removeClass('sentThirdMessageTransport');
    selector += "." + answer + "p";
    $(".card-wrap").hide();
    $(selector).show()
  }
}

function fourthAnswer() {
  $(".msg_time-sent").text(hours + ':' + minutes + mid);
  // SECOND ANSWER
  var inputValue = $(".type_msg").val().toLowerCase();
  // Third answer

  if ($(".button-send").hasClass("sentMessagePeople")) {
    $(".user_card_4").css('display', 'flex');
    $(".fourthUserAnswer").text(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
    // $(".user_card_4").css('display', 'flex');
    // $(".thirdUserAnswer").removeClass('thirdUserAnswer');

    // HARDCODING

    if (("1 one").includes(inputValue)) {
      answer2 = 1;
      howManyDays();
    } else if (("2 two").includes(inputValue)) {
      answer2 = 2;
      howManyDays();
    } else if (("3 three").includes(inputValue)) {
      answer2 = 3;
      howManyDays();
    } else if (("4 four").includes(inputValue)) {
      answer2 = 4;
      howManyDays();
    } else if (("5 five").includes(inputValue)) {
      answer2 = 5;
      howManyDays();
    } else if (("6 six").includes(inputValue)) {
      answer2 = 6;
      howManyDays();
    } else if (("7 seven").includes(inputValue)) {
      answer2 = 7;
      howManyDays();
    } else if (("8 eight").includes(inputValue)) {
      answer2 = 8;
      howManyDays();
    } else if (("9 nine").includes(inputValue)) {
      answer2 = 9;
      howManyDays();
    } else if (("10 ten").includes(inputValue)) {
      answer2 = 10;
      howManyDays();
    } else if (("11 eleven").includes(inputValue)) {
      answer2 = 11;
      howManyDays();
    } else if (("12 twelve").includes(inputValue)) {
      answer2 = 12;
      howManyDays();
    } else if (("13 thirteen").includes(inputValue)) {
      answer2 = 13;
      howManyDays();
    } else if (("14 fourteen").includes(inputValue)) {
      answer2 = 14;
      howManyDays();
    } else if (("15 fifteen").includes(inputValue)) {
      answer2 = 15;
      howManyDays();
    }

    function howManyDays() {
      $(".first_card_4").css('display', 'flex');
      $(".fifthAnswer").text("Sweet, you've chosen: " + answer2 + " days. By the answer you've given us, we'll send you through the results.");
      $(".card-body").scrollTop(1000);
      $("body").css('cursor', 'wait');
      $(function () {
        setTimeout(function () {
            $('.nzt-container').fadeIn(100);
            $('.hide-everything').fadeOut(500);
        },3200);
    });


    $(function () {
      setTimeout(function () {
          $('.nzt-container').fadeOut(500);
          $('.hide-everything').fadeIn(100);
          $("body").css('cursor', 'default');
      },4200);
  });

      $(".button-send").removeClass('sentMessagePeople');

      setTimeout(goToPageWithResults, 4300)
       selector += "." + answer2 + "d";
      $(".card-wrap").hide();
      $(selector).show()
    }
  }
}

// Get the input field
var input = $("#type_msg");
// Execute a function when the user releases a key on the keyboard
$("#type_msg").on("keyup", function (event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    $(".button-send").click();
  }
});


function filter(typer, typeOfTransport) {
  for (var i = 0; i < transport.types.length; i++) {
    if (transport.types[i].class == typeOfTransport) {
      console.log(transport.types[i].class)
      $(typer).text("Hey, here is the results: ")
    }
  }
}

function goToPageWithResults() {
  $(".chat").hide(500);
  $('html,body').animate({
      scrollTop: $(".container-result").offset().top
    },
    'slow');
    
    $(".btn-book").on('click', function () {
      var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      $("#datepicker2").on('change', function () {
    
          $(".price-modal").text('Price: $' + answerData.types[dataNr].price * answer2);
      });
    
      $(".modal-body").css('text-align', 'center');
      $(".rating-container").empty();
      console.log($(this).closest(".card-wrapper").attr('data-nr'));
      var dataNr = $(this).closest(".card-wrapper").attr('data-nr');
      $("#theModal").attr('data-nr', dataNr);
      for (var i = 0; i < answerData.types[dataNr].images.length; i++) {
          $(".image-" + i).attr('src', "img/" + answerData.types[dataNr].images[i]);
      }
      $(".price-modal").text('Price: $' + answerData.types[dataNr].price + " x " + answer2 + " days = $" + answerData.types[dataNr].price * answer2);
      totalPrice = answerData.types[dataNr].price * answer2;
      $(".modal-title").text(answerData.types[dataNr].name);
      $(".modal-description").text(answerData.types[dataNr].description);
      $(".card-wrapper").find($(".rating")[dataNr]).clone().appendTo(".rating-container");
      $(".modal-body .rating").addClass("modal-rating");
      $(".modal-body .rating").removeClass("rating");
      if (answerData == accommodation) {
          $(".fuel-usage").text(answerData.types[dataNr].people + " ");
          $(".fuel-usage").append('<i class="fas fa-user"></i>');
        for (var i = 0; i < $(".meals").length; i++) {
          $(".meals-image-" + i).attr('src', answerData.types[dataNr].mealsImage[i]);
        }
      }

      if (transpOrAcc == transport) {
        $(".fuel-usage").text(transpOrAcc.types[dataNr].fuel);
      }

      if (answerData.types[dataNr].value == undefined) {
        $(".special-modal").hide();
      } else {
      $(".special-modal").show();
      $(".special-modal").text(answerData.types[dataNr].value);
      }
        console.log($(this).closest(".card-wrapper").attr('data-nr'));
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
      $("#card-coupon-code").val("");
      $("#card-coupon-code").css('border', '1px solid #ebebeb');
      $(".total-price").text('$' + totalPrice);
      clicked = false;
      $(".alert").hide();
  })

  totalPrice = parseInt(totalPrice);


   var clicked;

  $(".btn-add-to-cart.add-to-card-breakfast").on('click', function() {
      $("#card-coupon-code").val("");
      $("#card-coupon-code").css('border', '1px solid #ebebeb');
      $(".alert").hide();
      clicked = true;
      totalPriceAfter = totalPrice + 70;
      $(".total-price").text('$' + totalPrice + ' + $70 Breakfast option = $' + totalPriceAfter);
      $("#card-coupon-code").css('border', '1px solid #ebebeb');        
  });
  $(".btn-add-to-cart.add-to-card-lunch-dinner").on('click', function() {
      $("#card-coupon-code").val("");
      $("#card-coupon-code").css('border', '1px solid #ebebeb');
      $(".alert").hide();
      clicked = true;
      totalPriceAfter = totalPrice + 70;
      $(".total-price").text('$' + totalPrice + ' + $70 Lunch option = $' + totalPriceAfter);
      $("#card-coupon-code").css('border', '1px solid #ebebeb');        
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
    if (clicked == true) {
        $(".total-price").text('$' + totalPriceAfter + "-20% = $" + totalPriceSubtracted);  
    } else {
        $(".total-price").text('$' + totalPrice + "-20% = $" + totalPriceSubtracted);              
    }
        $("#card-coupon-code").css('border', '2px solid #05C205');        
    }
});


    $(".btn-review-modal").on('click', function () {
      console.log($(this).closest(".card-wrapper").attr('data-nr'));
      var dataNr = $(this).closest(".card-wrapper").attr('data-nr');
      for (var i = 0; i < $(".review").length; i++) {
        $(".review-" + i + "-text").text(answerData.types[dataNr].reviews[i]);
      }
      $(".modal-review-title").text(answerData.types[dataNr].name);
    })
}





