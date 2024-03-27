function merkkiJono() {
    let jono = prompt("Anna merkkijono: ")

    document.getElementById("paikka").innerHTML = jono.toLowerCase();
    document.getElementById("paikka2").innerHTML = jono.toUpperCase();
}