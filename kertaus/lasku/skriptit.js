function tarkistaTili() {
    let tilinum = "FI000000000000";
    let tilinro = document.getElementById("tilinro").value;
    let nimi = "Jaakko";
    let nimi2 = document.getElementById("nimi").value;


    if (tilinro == tilinum && nimi2 == nimi) {
        document.getElementById("oikein").innerHTML = "Oikein!";
        document.getElementById("piilota").style.display = "block";
    }
    if (tilinro == "" && nimi2 == "") {
        document.getElementById("tyhja").innerHTML = "Syötä nimesi ja tilinumerosi!";
    }
    if (tilinro != tilinum && nimi2 != nimi) {
        document.getElementById("molväärin").innerHTML = "Tilinumero väärin!";
        document.getElementById("molväärin2").innerHTML = "Nimi väärin!";
    }
    if (tilinro != tilinum && nimi2 == nimi) {
        document.getElementById("tiliväärin").innerHTML = "Tilinumero väärin!";
    }
    if (tilinro == tilinum && nimi2 != nimi) {
        document.getElementById("nimiväärin").innerHTML = "Nimi väärin!";
    }
}






function avainluku() {
    let aluku = "1234";
    let asana = document.getElementById("aluku").value;

    if (aluku == asana) {
        document.getElementById("aoikein").innerHTML = "Availuku oikein, lasku suoritettu!";
        console.log("Oikein!")
    }
    if (aluku != asana) {
        document.getElementById("avÃ¤Ã¤rin").innerHTML = "Avainluku väärin!";


        console.log("Väärin!")
    }
    
}
