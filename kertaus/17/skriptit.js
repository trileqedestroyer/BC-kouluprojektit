function laskeArvot() {
    let a = document.getElementById("l1").value
    a = parseInt(a)
    let b = document.getElementById("l2").value
    b = parseInt(b)
    let select = document.getElementById("laskutoimitus")
    let valinta = select.options[select.selectedIndex].value
    if (valinta == "+") {
        document.getElementById("tulos").value = a + b
    }
    else if (valinta == "-") {
        document.getElementById("tulos").value = a - b
    }
    else if (valinta == "*") {
        document.getElementById("tulos").value = a * b
    }
    else if (valinta == "/") {
        document.getElementById("tulos").value = a/b
    }
}