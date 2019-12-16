$(document).ready(function(){
    $("button").click(function(){
      $.getJSON("https://rv0mnb6vnue9bds-db131219.adb.us-phoenix-1.oraclecloudapps.com/ords/wspace1/read/usuario/CJ", function(result){
        $.each(result, function(i, field){
          $("div").append(field + " ");
        });
      });
    });
  });