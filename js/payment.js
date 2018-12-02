
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

var buttonPay = $(".btn-pay");

buttonPay.on('click', function() {
  if ($(".card-number-input").val() != "" && $("#card-expiration-date").val() != "" && $("#card-expiration-date-to").val() != "" && $("#card-cvc").val() != "") {
      alertify.alert('Payment Successful!', 'Success! Your receipt will be sent into your email shortly.');
      $(".ajs-close").css('float', 'right');
  }
});
