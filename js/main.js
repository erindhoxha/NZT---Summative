
// TRANSPORT
  var transport = { 
    Motorbike: {
        name: "Motorbike",
        "Minimum People": 1,
        "Maximum People": 1,
        Price: 109,
        "Minimum Days": 1,
        "Maximum Days": 5,
        Fuel: "3.7l/100m"
    },
    "Small Car": {
        name: "Small Car",
        "Minimum People": 1,
        "Maximum People": 2,
        Price: 129,
        "Minimum Days": 1,
        "Maximum Days": 10,
        Fuel: "8.5l/100km"
    },
    "Large Car": {
        name: "Large Car",
        "Minimum People": 1,
        "Maximum People": 5,
        Price: 144,
        "Minimum Days": 3,
        "Maximum Days": 10,
        Fuel: "9.7l/100km"
    },
    "Motor Home": {
        name: "Motor Home",
        "Minimum People": 2,
        "Maximum People": 6,
        Price: 200,
        "Minimum Days": 2,
        "Maximum Days": 15,
        Fuel: "17l/100km"
    }
}

// TRANSPORT
var accommodation = {
    Hotel: {
        name: "Hotel",
        "Minimum People": 1,
        "Maximum People": 2,
        Price: 157,
        "Minimum Days": 1,
        "Maximum Days": 5,
    },
    Hostel: {
        name: "Hostel",
        "Minimum People": 1,
        "Maximum People": 1,
        Price: 30,
        "Minimum Days": 1,
        "Maximum Days": 10,
    },
    Motel: {
        name: "Motel",
        "Minimum People": 1,
        "Maximum People": 5,
        Price: 144,
        "Minimum Days": 3,
        "Maximum Days": 10,
    },
    House: {
        name: "House",
        "Minimum People": 2,
        "Maximum People": 6,
        Price: 200,
        "Minimum Days": 2,
        "Maximum Days": 15,
    }
}

//SLIDER

$(".chat_icon").on('click', function() {
    $(".chat").slideToggle();
    $("body").toggleClass("overhidden");
})

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



var d = new Date();
var hours = d.getHours();
var minutes = d.getMinutes(); 
var minutesDouble = (d.getMinutes()<10?'0':'') + d.getMinutes();
var seconds = d.getSeconds(); 

//First Statement


















































