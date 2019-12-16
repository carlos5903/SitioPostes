function PopulateDropDownList() {
    //Build an array containing Customer records.
     var customers = {"items":[{"depto_cod":"GUA","depto_nom":"Guatemala"},{"depto_cod":"ESC","depto_nom":"Escuintla"},{"depto_cod":"SAC","depto_nom":"Sacatepequez"}],"first":{"$ref":"https://rv0mnb6vnue9bds-db131219.adb.us-phoenix-1.oraclecloudapps.com/ords/wspace1/read/departamento"}}
    
     var ddlCustomers = document.getElementById("ddlCustomers");
    
     //Add the Options to the DropDownList.
     for (var i = 0; i < customers.length; i++) {
         var option = document.createElement("OPTION");

         //Set Customer Name in Text part.
         option.innerHTML = customers[i].depto_cod;

         //Set CustomerId in Value part.
         option.value = customers[i].depto_nom;

         //Add the Option element to DropDownList.
         ddlCustomers.options.add(option);
     }
 }