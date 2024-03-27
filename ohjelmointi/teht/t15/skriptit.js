"use strict";
a = 3.14;
document.getElementById("virhe").innerHTML = a;
function tarkistaSposti() {
    let x = document.forms["form1"]["sosoite"].value;
    let patt = /@/;
    if (patt.test(x) != true) {
        alert("sähköposti väärässä muodossa (@-merkki puuttuu)")
    }
} 