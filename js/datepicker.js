$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#datepicker" )
        .datepicker({
          numberOfMonths: 1,
          minDate: 0,
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#datepicker2" ).datepicker({
        defaultDate: "+1w",
        minDate: 0,
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );

$("#datepicker").on('click', function() {
  if ($("#ui-datepicker-div").css('display') == 'block') {
    $("#ui-datepicker-div").hide();
  } else {
    $("#ui-datepicker-div").show();
  }
})
