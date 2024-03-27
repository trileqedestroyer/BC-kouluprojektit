let nimi = "Eliza";
let luku = 20;
document.getElementById("nimi").innerHTML = nimi;
document.getElementById("luku").innerHTML = luku;
let tulos = nimi + luku;
document.getElementById("tulos").innerHTML = tulos;
tulos = nimi + " " + (luku + luku);
document.getElementById("tulos2").innerHTML = tulos;
let luku1 = 20;
let luku2 = 21;
let totuus= (luku == luku1);
document.getElementById("totuus").innerHTML = totuus;
let totuus2 = (luku == luku2);
document.getElementById("totuus2").innerHTML = totuus2;
let mopot = ["Suzuki","Solifer","Honda"] ;
document.getElementById("mopot").innerHTML = mopot[0] + mopot[1];
let koira = {Nimi:"Moppe", laji:" sekarotuinen ", ika:"4", vari:" ruskea "};
document.getElementById("koira").innerHTML = "Koira nimeltä " + koira.Nimi + " on " + koira.laji + " ja sen ikä on " + koira.ika + " ja väri on " + koira.vari;


 

 