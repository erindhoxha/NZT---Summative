

$(".btn-generate").on('click', function() { 
  console.log('hi');
  var diesel = 1.65;
  var petrol = 2.3;
  var fuelPriceTotal;

  var selectOption = $( ".fuel-select-dropdown option:selected" ).val();
  var selectOptionFuel = $( ".fuel-select-dropdown-fuel option:selected" ).val();
  var inputValue = $("#fuel-input").val();
  inputValue = parseInt(inputValue);
  console.log(inputValue);

  if (selectOptionFuel == "Petrol") {
    fuelPriceTotal = petrol;
    fuelName = "petrol";
  } else {
    fuelPriceTotal = diesel;
    fuelName = "diesel";
  }
  if ($("#fuel-input").val().length > 12) {
    $(".liter-price").text("Whoops, that's too many KM's.");
    return;
  }
  if ($("#fuel-input").val() != "") {

  if (selectOption == "Motorbike") {
    var val = Math.round(inputValue * 0.037 * 100) / 100;
    console.log(val);
    $('.fuel-liter').text("You will use "); 
    $(".fuel-total").text(val + "L");
    $(".liter-price").text("Will approximately cost: ");
    var total = val * fuelPriceTotal;
    total = Math.round(total);
    $(".fuel-total-price").text("$" + total); 
  }
  if (selectOption == "Small Car") {
    var val = Math.round(inputValue * 0.085 * 100) / 100;
    $('.fuel-liter').text("You will use "); 
    $(".fuel-total").text(val + "L of " + fuelName);
    $(".liter-price").text("Will approximately cost: ");
    var total = val * fuelPriceTotal;
    total = Math.round(total);
    $(".fuel-total-price").text("$" + total); 
  }
  if (selectOption == "Large Car") {
    var val = Math.round(inputValue * 0.097 * 100) / 100;
    $('.fuel-liter').text("You will use "); 
    $(".fuel-total").text(val + "L of " + fuelName);
    $(".liter-price").text("Will approximately cost: ");
    var total = val * fuelPriceTotal;
    total = Math.round(total);
    $(".fuel-total-price").text("$" + total); 
  }
  if (selectOption == "Motor Van") {
    var val = Math.round(inputValue * 0.17 * 100) / 100;
    $('.fuel-liter').text("You will use "); 
    $(".fuel-total").text(val + "L of " + fuelName);
    $(".liter-price").text("Will approximately cost: ");
    var total = val * fuelPriceTotal;
    total = Math.round(total);
    $(".fuel-total-price").text("$" + total); 
  }
}

});
