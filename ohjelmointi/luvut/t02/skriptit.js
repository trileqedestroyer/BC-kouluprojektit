let maa = "";
let kortit = [];
for (let a=1; a<5; a++) {
  if (a==1) {
    maa="hearts";
  } else if (a==2) {
    maa = "clubs";
  } else if (a==3) {
    maa = "diams";
  } else {
    maa = "spades";
  }
  for (let x=1; x<14; x++) {
    let kortti = [maa, x];
    kortit.push(kortti);
   }
}

document.getElementById("kortit").innerHTML = JSON.stringify(kortit);

kortit = kortit.sort(function(a, b){return 0.5 - Math.random()});

document.getElementById("kortitseko").innerHTML = JSON.stringify(kortit);

document.getElementById("korttinumero1").innerHTML = kortit[0] [1];
if (kortit[0][0] == "hearts" || kortit[0][0] == "diams") {
  document.getElementById("korttikuvapun").innerHTML = "&" + kortit[0] [0] + ";";
} else {
  document.getElementById("korttikuvamus").innerHTML = "&" + kortit[0] [0] + ";";
}
document.getElementById("korttinumero2").innerHTML = kortit[0] [1];