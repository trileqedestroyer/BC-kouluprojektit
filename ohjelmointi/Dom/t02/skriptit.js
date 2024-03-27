function myFunction() {
    let selainvalinta = document.getElementsByName('selain');
    let tulos = "";
    let valittu;
    for (var i = 0; i < selainvalinta.length; i++) {
        tulos += selainvalinta[i].value + " ";
        if (selainvalinta[i].checked) {
            valittu = selainvalinta[i].value;
        }
    }
    document.getElementById("valitsit").innerHTML = "Valitsit selaimen " + valittu;
}