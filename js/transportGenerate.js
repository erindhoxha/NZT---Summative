

$(".btn-generate").on('click', function() { 
  var petrol = 2.3;
  console.log('hi');
  var diesel = 1.65;
  var selectOption = $( ".fuel-select-dropdown option:selected" ).val();
  var inputValue = $("#fuel-input").val();
  inputValue = parseInt(inputValue);
  console.log(inputValue);
  if (selectOption == "Motorbike") {
    var val = Math.round(inputValue * 0.037 * 100) / 100;
    console.log(val);
    var literPrice = val * 
    $('.fuel-liter').text("You will use " + val + "L which will approximately cost you: " + literPrice); 
  }
  if (selectOption == "Small Car") {
    var val = Math.round(inputValue * 0.085 * 100) / 100;
    $('.fuel-liter').text("You will use " + val + "L which will approximately cost you: " + literPrice); 
  }
  if (selectOption == "Large Car") {
    var val = Math.round(inputValue * 0.097 * 100) / 100;
    $('.fuel-liter').text("You will use " + val + "L which will approximately cost you: " + literPrice); 
  }
  if (selectOption == "Motor Van") {
    var val = Math.round(inputValue * 0.17 * 100) / 100;
    $('.fuel-liter').text("You will use " + val + "L which will approximately cost you: "  + literPrice); 
  }
});
