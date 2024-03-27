function arvosana(){
  let arvosana_arv = "";
  let pisteet = document.getElementById("pisteet").value;
if ( pisteet >=0  && pisteet <=15) {
  arvosana_arv = "T1";
}
else if ( pisteet >= 16 && pisteet <=30) {
  arvosana_arv = "H3";
} 
else if (pisteet >= 31 && pisteet <= 40){
   arvosana_arv = "K5";
  }
  else {
    arvosana_arv ="Pistemäärä ei välillä 0-40.";
  }
  document.getElementById("vastaus").innerHTML = arvosana_arv;
}


function ale(){
  let alennus = 0;
  let anna_hinta = document.getElementById("anna_hinta").value;

if (anna_hinta > 100) {
  alennus = anna_hinta * 0.8;
}
else if (anna_hinta >= 50 && anna_hinta <=100) {
    alennus= anna_hinta * 0.9;
} 
else if (anna_hinta < 50) {
   alennus= anna_hinta;
   document.getElementById("ei").innerHTML = "Ei alennusta";
  }
  document.getElementById("alennus").innerHTML = alennus;
}