function tulokset() {
    let a1 = Number(document.getElementById("a1").value);
    let b1 = Number(document.getElementById("b1").value);
    summa = a1 + b1;
    ero = a1 - b1;
    tulo = a1 * b1;
    jako = a1 / b1;
    a2 = "";

    switch ((a1 < 1 || a1 > 10) || (b1 < 1 || b1 > 10)) {
        case true:
            window.alert("Luvun tulee olla 1-10 väliltä!");
            break


        default:

            if (a1 < b1) {
                pieni = a1 + 1;
                iso = b1;

            }
            else {
                iso = a1;
                pieni = b1 + 1;
            }

            while (pieni < iso) {
                a2 = a2 + " " + pieni;
                pieni++;
            }
            for (pieni = a1; pieni <= b1; pieni++) {
                
               a2 += pieni + " " + pieni;   
            }

            document.getElementById("luvut").innerHTML = a2 + " " + iso;
            document.getElementById("summa").innerHTML = "Summa: " + summa;
            document.getElementById("ero").innerHTML = "Erotus: " + ero;
            document.getElementById("tulo").innerHTML = "Tulo: " + tulo;
            document.getElementById("jako").innerHTML = "Jakolasku: " + jako;
    }
}
function tyhjenna() {
    document.getElementById("form1").reset();
    document.getElementById("luvut").innerHTML = "";
    document.getElementById("summa").innerHTML = "";
    document.getElementById("ero").innerHTML = "";
    document.getElementById("tulo").innerHTML = "";
    document.getElementById("jako").innerHTML = ""
}

