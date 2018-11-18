//SLIDER

$(".chat_icon").on('click', function() {
    $(".chat").slideToggle();
    $("body").toggleClass("overhidden");
})

  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var mid='am';
  if(hours==0){ //At 00 hours we need to show 12 am
  hours=12;
  }
  else if(hours>12)
  {
  hours=hours%12;
  mid='pm';
  }
  alert (hours + ':' + minutes + mid);

$(".msg_time").text();

$(".first_card").hide();
$(".user_card").hide();

$(".button-send").on('click', function() {



    var inputValue = $(".type_msg").val();
    if ($(".button-send").hasClass("sentFirstMessage")) {
    $(".secondAnswer").text(inputValue);
    }
    $(".user_card").css('display', 'flex');
    $(".user-answer").text(inputValue);

    $(".first_card").css('display', 'flex');
    $(".answer").text("Hi " + inputValue + ", are you interested for Accomodation or Transport?");
    $(".type_msg").val("");
    $(".button-send").addClass('sentFirstMessage');

    $(".answer").removeClass('answer');
    $(".user-answer").addClass('firstAnswer');
    $(".user-answer").removeClass('user-answer');
})


// Get the input field
var input = $("#type_msg");
// Execute a function when the user releases a key on the keyboard
$("#type_msg").on("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    $(".button-send").click();
  }
});