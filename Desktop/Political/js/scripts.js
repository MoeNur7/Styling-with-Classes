$(document).ready (function() {
    $("form#Politic").submit(function(event) {
      event.preventDefault();
       const user = $("input#user").val();
       const belief= $("input[name='belief']:checked").val();
//$ ("input#belief").val() ;
       console.log(belief);

       $("#name1").text(user);
       $("#belief").text(belief);
       $("#conclusion").show();
       event.preventDefault();

    });
});