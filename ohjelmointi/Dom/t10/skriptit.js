(function () {
    class Henkilo {
        constructor(nimi, svuosi) {
          this.nimi = nimi;
          this.svuosi = svuosi;
        }
        ika(x) {
          return x - this.svuosi; // laskee iÃ¤n jos annettu vuosi on oikein
        }

      }
      
      let pvm = new Date(); // haetaan tÃ¤mÃ¤nhetkinen pÃ¤ivÃ¤mÃ¤Ã¤rÃ¤
      let vuosi = pvm.getFullYear(); // otetaan pÃ¤ivÃ¤mÃ¤Ã¤rÃ¤stÃ¤ tÃ¤ydet vuodet
      
      let jokunen = new Henkilo("Jaska", 2000); // luodaan uusi olio ja annetaan arvot
      console.log(`${jokunen.nimi} on ${jokunen.ika(vuosi)}-vuotias`);
})();
(function () {
    // luodaan luokka Henkilo
    class Henkilo {
    constructor(nimi) {
      this.nimi = nimi;
    }
    esittely() {
      return `Hei, nimeni on ${this.nimi}`;
    }
  }
   
  // luodaan luokka Opiskelija joka perii ominaisuuksia Henkilolta
  class Opiskelija extends Henkilo {
    constructor(nimi, numero) {
      super(nimi);
      this.numero = numero;
    }
    tiedot() {
      return `${this.esittely()} ja opiskelijanumeroni on ${this.numero}`;
    }
  }
   
  let ekaOpiskelija = new Opiskelija("K", 12);
  console.log(ekaOpiskelija.tiedot()); // pitÃ¤isi tulostaa Hei, nimeni on K ja opiskelijanumeroni on 12
})();
(function () {
    // luodaan luokka Henkilo
    class Henkilo {
    constructor(nimi) {
      this._nimi = nimi; // usein laitetaan etuliite _ tÃ¤hÃ¤n koska kentÃ¤n nimi ei voi olla sama kuin getterin tai setterin
    }
    get nimi() {
      return this._nimi;
    }
    set nimi(x) {
      this._nimi = x;
    }
  }
   
  let jaska = new Henkilo("Jaska");
  console.log(jaska._nimi);
})();
(function () {
    // luodaan luokka Henkilo
    class Henkilo {
    constructor(nimi) {
      this.nimi = nimi;
    }
    static moi() {
      return `Moi!`;
    }
  }
   
  let jaska = new Henkilo("Jaska");
  console.log(Henkilo.moi()); // tÃ¤mÃ¤ toimii
  //console.log(jaska.moi()); // tÃ¤mÃ¤ ei
})();