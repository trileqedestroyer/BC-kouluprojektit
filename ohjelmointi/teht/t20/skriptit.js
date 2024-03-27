class Lemmikki {
  constructor(laji, vari, vuosi) {
    this.laji = laji;
    this.vari = vari;
    this.vuosi = vuosi;

  }
  laji1() {
    let laji2 = "koira"();
    return laji2.getElementById() - this.laji;
  }
  vari1() {
    let vari2 = "ruskea"();
    return vari2.getElementById() - this.vari;
  }

  ika() {
    let date = new Date();
    return date.getFullYear() - this.vuosi;
  }
}

let koira = new Lemmikki("Koira","ruskea", 2013);
document.getElementById("demo").innerHTML =
"Lemmikkini on " + koira.laji + ", se on " + koira.vari + " ja iältään " + koira.ika() + " vuotta." ;