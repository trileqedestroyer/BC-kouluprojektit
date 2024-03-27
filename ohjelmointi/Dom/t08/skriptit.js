
(function () {

  document.addEventListener('DOMContentLoaded', alusta);
  function alusta() {

      let form = document.getElementById("luvut");
      let nimilabel = document.createElement("label");
      nimilabel.setAttribute("for", "nimi");
      nimilabel.innerHTML = "Nimi: ";
      document.getElementById("luvut").appendChild(nimilabel);
      let nimi = document.createElement("input");
      nimi.setAttribute("type", "text");
      nimi.setAttribute("id", "nimi");
      nimi.setAttribute("name", "nimi");
      nimi.setAttribute("onblur", "tilinumero()");
      document.getElementById("luvut").appendChild(nimi);
      let brk = document.createElement("br");
      form.appendChild(brk);
  }

})();

function tilinumero() {
  let form = document.getElementById("luvut");
  let tililabel = document.createElement("label");
  tililabel.setAttribute("for", "tnro");
  tililabel.innerHTML = "Tilinumero (tasan 13 merkkiä): ";
  document.getElementById("luvut").appendChild(tililabel);
  let tnro = document.createElement("input");
  tnro.setAttribute("type", "text");
  tnro.setAttribute("name", "tnro");
  tnro.setAttribute("onblur", "tosi(tnro.value)")
  document.getElementById("luvut").appendChild(tnro);
  let brk = document.createElement('br');
  form.appendChild(brk);
}

function tosi(x) {
  let pituus = x.length;
  if (pituus == 13) {
      annaSumma();
  }
}

function annaSumma() {
  let form = document.getElementById("luvut");
  let sumlabel = document.createElement("label");
  sumlabel.setAttribute("for", "summa");
  sumlabel.innerHTML = "Siirrettävä summa: ";
  document.getElementById("luvut").appendChild(sumlabel);
  let summa = document.createElement("input");
  summa.setAttribute("type", "range");
  summa.setAttribute("id", "summa");
  summa.setAttribute("name", "summa");
  summa.setAttribute("min", "1");
  summa.setAttribute("max", "100");
  summa.setAttribute("value", "50");
  document.getElementById("luvut").appendChild(summa);
  let brk = document.createElement("br");
  form.appendChild(brk);
  let valitse = document.getElementById("summa");
  brk = document.createElement("br");
  form.appendChild(brk);
  let tulos = document.createElement("p");
  form.appendChild(tulos);
  tulos.innerHTML = "Summa on" + valitse.value;
  valitse.oninput = function () {
      tulos.innerHTML = "Summa on: " + this.value;

  }
  brk = document.createElement("br");
  form.appendChild(brk);

  let nappi = document.createElement("input");
  nappi.setAttribute("type", "submit");
  nappi.setAttribute("value", "Lähetä");
  document.getElementById("luvut").appendChild(nappi);
  summa.addEventListener("input", naytaSumma)
  function naytaSumma(){
      summa.innerHTML = "Summa on " + summa.value;
  }



}