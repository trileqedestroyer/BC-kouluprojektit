function Lisaa(){
    let kappale = document.createElement("p");
    let lause = document.createTextNode("Moi, maailma!");
    kappale.appendChild(lause);
    document.body.appendChild(lause);
}

function Poista(){
    let lapsi = document.getElementById("p1");
    lapsi.parentNode.removeChild(lapsi);
}

function Muuta(){
    let elementti = document.getElementById("p1");
    let teksti = elementti.innerHTML;
    elementti.innerHTML = "Moro!";
}