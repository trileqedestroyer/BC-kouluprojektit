function arvosana(){
  let arvosana_arv = "";
  let arvo = document.getElementById("pisteet").value;
if ( arvo >=0 ) {
  arvosana_arv = "positiivinen";
}
if ( arvo <= 0 ) {
  arvosana_arv = "negatiivinen";
} 
else {
  arvosana_arv = "positiivinen";
 }
 document.getElementById("vastaus").innerHTML = arvosana_arv;
}
