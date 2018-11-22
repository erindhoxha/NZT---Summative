//SLIDER
$(".card-body").scrollTop();
$(".chat_icon").on('click', function() {
    $(".chat-popup").hide();
    $(".chat").slideToggle();
    $("body").toggleClass("overhidden");
    $(".chat").addClass("toggled");
})


  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  if (minutes.toFixed().length == 1) {
    minutes = "0" + minutes;
  }
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
    $(".answer").text("Hi " + inputValue.charAt(0).toUpperCase() + inputValue.slice(1) + ", are you interested for Accommodation or Transport?");
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
      $(".button-send").addClass('sentSecondMessageTransport');
      // ADD TRANSPORT STUFF HERE
      $(".first_card_2").css('display', 'flex');
      $(".thirdAnswer").text("Sweet, so you need Transportation... Could you let me know, for how many people?")
      $(".card-body").scrollTop(300);
    } else if (("accommodation").indexOf(inputValue) > -1 || ("accomodation").indexOf(inputValue) > -1 || ("acomodation").indexOf(inputValue) > -1 ) {
      $(".button-send").addClass('sentSecondMessageAccommodation');
      $(".first_card_2").css('display', 'flex');
      $(".card-body").scrollTop(1000);
      $(".thirdAnswer").text("Sweet, so you need Accommodation... Could you let me know, for how many people?")
      // Add accommodation stuff here
    } else {
      $(".first_card_2").css('display', 'flex');
      $(".thirdAnswer").text("Sorry, we don't have any answer for that. Please, fill the input on the website, or alternatively contact us.")
    // $(".button-send").addClass('sentFirstMessage');    
      $(".card-body").scrollTop(300);
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
            console.log(answer);
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
          } 
          else {
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
                  var answer = 1;
                  console.log(answer);
                  howManyPeople();
                } else if (("2 two").includes(inputValue)) {
                  var answer = 2;
                  console.log(answer);
                  howManyPeople();
                } else if (("3 three").includes(inputValue)) {
                  var answer = 3;
                  console.log(answer);
                  howManyPeople();
                } else if (("4 four").includes(inputValue)) {
                  var answer = 4;
                  console.log(answer);
                  howManyPeople();
                } else if (("5 five").includes(inputValue)) {
                  var answer = 5;
                  console.log(answer);
                  howManyPeople();
                } else if (("6 six").includes(inputValue)) {
                  var answer = 6;
                  console.log(answer);
                  howManyPeople();
                } 
                else {
                  $(".first_card_3").css('display', 'flex');
                  $(".card-body").scrollTop(600);
                  $(".fourthAnswer").text("Sorry, we can't understand that number, please type it again");
                }
        }

  function howManyPeople() {
    $(".first_card_3").css('display', 'flex');
    $(".fourthAnswer").text("Sweet, you've chosen: " + answer + " people. How many days do you wish to stay?");
    $(".card-body").scrollTop(600);
    $(".button-send").addClass('sentMessagePeople');
    $(".button-send").removeClass('sentThirdMessageAccommodation');
    $(".button-send").removeClass('sentThirdMessageTransport');
  }
}


function fourthAnswer() {
  $(".msg_time-sent").text(hours + ':' + minutes + mid);
  // SECOND ANSWER
  var inputValue = $(".type_msg").val().toLowerCase();
  // Third answer

  if ($(".button-send").hasClass("sentMessagePeople")) { 
    $(".user_card_4").css('display','flex');
    $(".fourthUserAnswer").text(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
    // $(".user_card_4").css('display', 'flex');
    // $(".thirdUserAnswer").removeClass('thirdUserAnswer');
  if (("1 one").includes(inputValue)) {
    var answer2 = 1;
    console.log(answer2);
  } else if (("2 two").includes(inputValue)) {
    var answer2 = 2;
    console.log(answer2);
    howManyDays();
  } else if (("3 three").includes(inputValue)) {
    var answer2 = 3;
    console.log(answer2);
    howManyDays();
  } else if (("4 four").includes(inputValue)) {
    var answer2 = 4;
    console.log(answer2);
    howManyDays();
  } else if (("5 five").includes(inputValue)) {
    var answer2 = 5;
    console.log(answer2);
    howManyDays();
  } else if (("6 six").includes(inputValue)) {
    var answer2 = 6;
    console.log(answer2);
    howManyDays();
  } else if (("7 seven").includes(inputValue)) {
    var answer2 = 7;
    console.log(answer2);
    howManyDays();
  } else if (("8 eight").includes(inputValue)) {
    var answer2 = 8;
    console.log(answer2);
    howManyDays();
  } else if (("9 nine").includes(inputValue)) {
    var answer2 = 9;
    console.log(answer2);
    howManyDays();
  } else if (("10 ten").includes(inputValue)) {
    var answer2 = 10;
    console.log(answer2);
    howManyDays();
  } else if (("11 eleven").includes(inputValue)) {
    var answer2 = 11;
    console.log(answer2);
    howManyDays();
  } else if (("12 twelve").includes(inputValue)) {
    var answer2 = 12;
    console.log(answer2);
    howManyDays();
  } else if (("13 thirteen").includes(inputValue)) {
    var answer2 = 13;
    console.log(answer2);
    howManyDays();
  } else if (("14 fourteen").includes(inputValue)) {
    var answer2 = 14;
    console.log(answer2);
    howManyDays();
  } else if (("15 fifteen").includes(inputValue)) {
    var answer2 = 15;
    console.log(answer2);
    howManyDays();
  } 
  function howManyDays() {
    $(".first_card_4").css('display', 'flex');
    $(".fifthAnswer").text("Sweet, you've chosen: " + answer2 + " days.");
    $(".card-body").scrollTop(1000);
    $(".button-send").removeClass('sentMessagePeople');
    } 
  }
}

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


function filter(typer, typeOfTransport) {
    for (var i = 0; i < transport.types.length; i++) {
      if (transport.types[i].class == typeOfTransport) {
      console.log(transport.types[i].class)
      $(typer).text("Hey, here is the results: ")
      }
    }
}


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}
// CHAT!!!

{/* <div id="typewriter"></div>

<script src='../../dist/core.js'></script>
<script type='text/javascript'>
  const typewriter = new Typewriter('#typewriter', {
    loop: true
  });

  typewriter.typeString('<strong>Human: </strong>')
    .typeString('Hello how are you?')
    .pauseFor(2500)
    .typeString('<br/>')
    .typeString('<strong>Bot: </strong>')
    .typeString('I am fine thanks, how are you?')
    .pauseFor(2500)
    .typeString('<br/>')
    .typeString('<strong>Human: </strong> ')
    .typeString('I am great!')
    .pauseFor(2500)
    .start(); */}