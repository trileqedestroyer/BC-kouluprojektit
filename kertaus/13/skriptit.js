function ikaLaskuri() {
  var syote = document.getElementById("deitti").value;
  var pAika = new Date(syote);
  if(syote==null || syote=='') {
    document.getElementById("viesti").innerHTML = "**Valitse päivämäärä!**";  
    return false; 
  } else {
  var kuukausi = Date.now() - pAika.getTime();
  var ikaPaiva = new Date(kuukausi); 
  var vuosi = ikaPaiva.getUTCFullYear();
  var ika = Math.abs(vuosi - 1970);
  (document.getElementById("tulos").innerHTML =  
           "ikasi on: " + ika + " vuotta. ")
  }
}