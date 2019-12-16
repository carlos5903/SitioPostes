function login() {
    var x = document.getElementById("password").value;
    var user = document.getElementById("user").value;
    document.getElementById("demo").innerHTML = user + x + "<br>";

    var usrJson;
    var pwdJson;
    var nomJson;


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            usrJson = document.getElementById("demo").innerHTML = myObj.usr_usr;
            nomJson = document.getElementById("demo2").innerHTML = myObj.usr_nom;
            pwdJson = document.getElementById("demo3").innerHTML = myObj.usr_pwd;
        }
    };
    xmlhttp.open("GET", "https://rv0mnb6vnue9bds-db131219.adb.us-phoenix-1.oraclecloudapps.com/ords/wspace1/read/usuario/" + user, true);
    xmlhttp.send();

    $(document).ready(function () {
        $("button").click(function () {

        });
    });






}