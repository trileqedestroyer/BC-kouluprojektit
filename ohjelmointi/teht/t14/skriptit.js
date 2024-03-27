function luvut2(){
  let luku = Number(document.getElementById("luku1").value);
  eka = 0;
  printtaus = "";
  while (eka <= luku){
      printtaus = printtaus + eka + " ";
      eka = eka + 2;
  }

  document.getElementById("luvut").innerHTML = printtaus;
}

function summa1(){
  x = 0;
  karv = 0;
  summa = 0;
  promptl = prompt("Anna luku: ")
  while (promptl != -1){
      x++;
      summa += parseInt(promptl);
      promptl = prompt("Anna luku: ");
  }
  if (x != 0){
      karv = summa / x;
  }
 document.getElementById("vastaus").innerHTML = "Summa: " + summa + " Keskiarvo: " + karv;

  
}