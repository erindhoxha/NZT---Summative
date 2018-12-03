
// WHEN INPUT PAYMENT - CREDIT CARD - ADD SPACE AFTER 4 LETTERS

document.querySelector('#card-number').addEventListener('keydown', (e) => {
  e.target.value = e.target.value.replace(/(\d{4})(\d+)/g, '$1 $2')
})
/* Jquery */
$(".card-number-input").css('width', '100%');
for (var i = 2; i < 5; i++) {
  $(".card-change" + i).hide();
}
$(".card-change").hide();

$('#card-number').keyup(function() {

  // VISA CARD
  if ($("#card-number").val().startsWith("4")) {
      $(".visa-card").css('transform', 'scale(1.3)');
      $(".card-number-input").css('width', '89%');
      $(".card-change").show(200);
  }else {
      $(".card-number-input").css('width', '100%');
      $(".card-change").hide();
      $(".visa-card").css('transform', 'scale(1)');
  }

  // MASTER CARD
  if ($("#card-number").val().startsWith("5")) {
      $(".master-card").css('transform', 'scale(1.3)');
      $(".card-number-input").css('width', '89%');
      $(".card-change2").show(200);
  }else {
      $(".master-card").css('transform', 'scale(1)');
      $(".card-change2").hide();
  }

  // DISCOVER CARD
  if ($("#card-number").val().startsWith("2")) {
      $(".discover-card").css('transform', 'scale(1.3)');
      $(".card-number-input").css('width', '89%');
      $(".card-change3").show(200);
  }else {
      $(".discover-card").css('transform', 'scale(1)');
      $(".card-change3").hide();
  }
  // AMERICAN EXPRESS CARD
  if ($("#card-number").val().startsWith("3")) {
      $(".american-express-card").css('transform', 'scale(1.3)');
      $(".card-number-input").css('width', '89%');
      $(".card-change4").show(200);
  } else {
      $(".american-express-card").css('transform', 'scale(1)');
      $(".card-change4").hide();
  }
  
$(this).val($(this).val().replace(/(\d{4})(\d+)/g, '$1 $2'))
});
$(".help-cvc-div").hide(0);

$(".help-cvc").on('mouseover', function() {
  $(".help-cvc-div").show(300);
})
$(".help-cvc").on('mouseout', function() {
  $(".help-cvc-div").hide(300);
})

var buttonPay = $(".btn-pay-end");

buttonPay.on('click', function() {
  if ($(".phone-input").val() != "" && $(".address-input").val() != "" && $(".email-input").val() != "" && $(".name-input").val() != "" && $(".card-number-input").val() != "" && $("#card-expiration-date").val() != "" && $("#card-expiration-date-to").val() != "" && $("#card-cvc").val() != "") {
      alertify.alert('Payment Successful!', 'Success! Your receipt will be sent into your email shortly.');
      $(".ajs-close").css('float', 'right');
      $(".hide-everything").hide();
      $(".receipt-container").show();
      $(".fade").hide();
      var oneDay = parseInt($(".total-price").text().slice(1));
      if (numberOfDays != "") {
        var oneDaySub = oneDay / numberOfDays;
         $(".amount").text(numberOfDays + " days x $" +  oneDaySub + " = " + $(".total-price").text());
      } else {
        var oneDaySub = oneDay / answer2;
        $(".amount").text(answer2 + " days x $" +  oneDaySub + " = " + $(".total-price").text());
      }
      $(".total-amount").text($(".total-price").text());
      $(".bookedStuff").text($(".modal-title").text());
      $(".modal-open").css('overflow', 'unset');
      $(".yourName").text($(".name-input").val());
      $(".yourPhone").text($(".prefix-input").val() + " - " + $(".phone-input").val());
      $(".yourEmail").text($(".email-input").val());
      $(".yourAddress").text($(".address-input").val());
      $(".btn-pay-end").attr('type', 'button');
  } else {
    $(".btn-pay-end").attr('type', 'submit');
  }


});
function printThePage() {
    window.print();
}

// DISABLE TEXT INPUT FROM INPUTS
var cardNumber = "#card-number";
var expFrom = "#card-expiration-date";
var expTo = "#card-expiration-date-to";
var cvcNumber = "#card-cvc";




function dontLetTextOnInputs(addIdOrClassHere) {
    document.querySelector(addIdOrClassHere).addEventListener("keypress", function (evt) {
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});
}

function isNumberKey(e) {
    var currentChar = parseInt(String.fromCharCode(e.keyCode), 10);
    if (!isNaN(currentChar)) {
        var nextValue = $(expFrom).val() + currentChar;
        if (parseInt(nextValue, 10) <= 12) return true;
    }
    return false;
}
