let luku = prompt("Anna luku:");
luku = parseInt(luku)
while (luku < 0) {
    alert("Virhe! Luku on pienepi, kuin 0!");
    luku = prompt("Anna luku:");
    luku = parseInt(luku)
}
if (luku > 0) {
    document.getElementById("syote").innerHTML = "Annoit luvun " + luku;
}

