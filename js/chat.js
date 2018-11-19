//SLIDER
$(".card-body").scrollTop();
$(".chat_icon").on('click', function() {
    $(".chat").slideToggle();
    $("body").toggleClass("overhidden");
    $(".chat").addClass("toggled");
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

$(".msg_time").text(hours + ':' + minutes + mid);

$(".first_card").hide();
$(".user_card").hide();

$(".button-send").on('click', function() {
  $(".msg_time-sent").text(hours + ':' + minutes + mid);

    // SECOND ANSWER
    var inputValue = $(".type_msg").val().toLowerCase();
    if ($(".button-send").hasClass("sentFirstMessage")) {
    $(".user_card_2").css('display', 'flex');
    $(".secondAnswer").text(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
    $(".secondAnswer").addClass("secondAnswerAnswered");
    $(".secondAnswer").removeClass("secondAnswer");
    if (("transport").indexOf(inputValue) > -1) {
      // ADD TRANSPORT STUFF HERE
      $(".first_card_2").css('display', 'flex');
      $(".thirdAnswer").text("Sweet, so you need Transportation... Could you let me know, for how many people?")
      $(".card-body").scrollTop(300);

    } else if (("accommodation").indexOf(inputValue) > -1 || ("accomodation").indexOf(inputValue) > -1 || ("acomodation").indexOf(inputValue) > -1 ) {
      $(".first_card_2").css('display', 'flex');
      $(".thirdAnswer").text("Sweet, so you need Accommodation... Could you let me know, for how many people?")
      $(".card-body").scrollTop(300);
      // Add accommodation stuff here
    } else {
      $(".first_card_2").css('display', 'flex');
      $(".thirdAnswer").text("Sorry, we don't have any answer for that. Please, fill the input on the website, or alternatively contact us.")
      $(".card-body").scrollTop(300);
    }
    }
    // SECOND ANSWER

    // FIRST ANSWER
    $(".user_card").css('display', 'flex');
    $(".user-answer").text(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
    $(".first_card").css('display', 'flex');
    $(".answer").text("Hi " + inputValue.charAt(0).toUpperCase() + inputValue.slice(1) + ", are you interested for Accommodation or Transport?");
    $(".type_msg").val("");
    $(".button-send").addClass('sentFirstMessage');
    $(".answer").removeClass('answer');
    $(".user-answer").addClass('firstAnswer');
    $(".user-answer").removeClass('user-answer');
    // FIRST ANSWER
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