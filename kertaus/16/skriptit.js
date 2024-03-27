function taulukonSuurin(taulukko) {
  return Math.max.apply(null, taulukko);

}
isoin = taulukonSuurin([87, 99, 897, 89896, 98765, 454]);
document.getElementById("suurin").innerHTML = "Taulukon suurin luku on " + isoin;