function login() {
    var usrJson;	
var x = document.getElementById("password").value;
var user = document.getElementById("user");
usrJson = user.value.toUpperCase();

var pwdJson;
var nomJson;


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.usr_usr;
        document.getElementById("demo2").innerHTML = myObj.usr_nom;
        document.getElementById("demo3").innerHTML = myObj.usr_pwd;
    }
};
xmlhttp.open("GET", "https://rv0mnb6vnue9bds-db131219.adb.us-phoenix-1.oraclecloudapps.com/ords/wspace1/read/usuario/" + usrJson, true);
xmlhttp.send();
}
