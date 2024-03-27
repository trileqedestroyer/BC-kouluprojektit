function merkkiJono() {
    let jono = prompt("Anna merkkijono: ")
    let jononPituus = jono.split(" ");
    let text = "";
    for(let i = 0; i < jononPituus.length; i++) {
        text += jononPituus[i] + "<br>";
    }
    
    document.getElementById("paikka").innerHTML = "Merkkijono rivettäin: " + text;
    document.getElementById("paikka2").innerHTML = "Merkkijonon pituus: " + jono.length;
}