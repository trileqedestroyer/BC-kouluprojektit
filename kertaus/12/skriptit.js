function merkkiJono() {
  let jono = prompt("Anna merkkijono: ")
  let jono2 = prompt("Anna toinen merkkijono: ")
  let text = "";

  if (jono.includes(jono2)) {
      document.getElementById("paikka").innerHTML = "On osa ensimmäistä.";
  }

  else if (jono2.includes(jono)) {
      document.getElementById("paikka").innerHTML = "On osa ensimmäistä.";
  }

  else {
      document.getElementById("paikka").innerHTML = "Ei ole osa ensimmäistä."
  }

}