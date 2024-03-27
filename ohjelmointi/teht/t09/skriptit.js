let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
let sln = txt.length;
document.getElementById("aakkoset").innerHTML = sln;

let teksti = "Ohjelmistokehittäjä osaa ohjelmoida, hyödyntää rajapintoja, käsitellä tietoa sekä käyttää versionhallintaa. Ohjelmistokehitystiimin jäsenenä toimiessaan hän kommunikoi asiakkaan kanssa, suunnittelee ohjelmiston toteutuksen ja varmistaa toteutettavien toimintojen laadun.";
let pos = teksti.indexOf("ohjelmoida");
document.getElementById("sana").innerHTML = pos;
let res = teksti.slice(0, 107);
document.getElementById("alku").innerHTML = res;
let rep = teksti.slice(107);
document.getElementById("loppu").innerHTML = rep;
function buttonClicked(){
    let uus = res.replace("versionhallintaa", "versionhallintaa (esimerkiksi Github)");
    document.getElementById("alku").innerHTML = uus;
}
