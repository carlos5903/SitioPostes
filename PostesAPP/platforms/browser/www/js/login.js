function login() {
var usrJson, userform;	
var x = document.getElementById("password").value;
var user = document.getElementById("user");
userform = user.value.toUpperCase();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.usr_usr;
        document.getElementById("demo2").innerHTML = myObj.usr_nom;
        document.getElementById("demo3").innerHTML = myObj.usr_pwd;
        usrJson = myObj.usr_usr.toString(8)
    }
    console.log(usrJson === userform)

    console.log(userform)
    console.log(usrJson)
};
xmlhttp.open("GET", "https://rv0mnb6vnue9bds-db131219.adb.us-phoenix-1.oraclecloudapps.com/ords/wspace1/read/usuario/" + userform, true);
xmlhttp.send();
}

