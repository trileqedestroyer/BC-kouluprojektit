function karvo(){
  let summa = 0;
  lkm = 0;
  let numerot = document.getElementById("num")
  do {
      luku = parseInt(prompt("Anna luku: "))
      if (isNaN(luku) == true){
          break
      }
      else if (luku != 0){
          numerot.innerHTML += luku + "<br>";
          summa += luku;
          console.log(summa)
          lkm++;
          console.log(lkm)
      }
      
  } while (luku != 0);

  kar = summa / lkm;
  document.getElementById("ka").innerHTML = "Keskiarvo: " + kar;

}
