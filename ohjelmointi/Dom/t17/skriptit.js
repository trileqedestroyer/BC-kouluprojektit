'use strict';
(function () {
    let piirtoalusta;

    const tyylit = {
        suu: { vari: 'pink', viiva: 'pink', viivanLeveys: 0 },
        silma: { vari: 'white', viiva: 'black', viivanLeveys: 2 },
        iris: { vari: 'black', viiva: 'black', viivanleveys: 0 },
        nena: { vari: 'green', viiva: 'black', viivanLeveys: 5 },
        tausta: { vari: 'blue', viiva: 'black', viivanLeveys: 5 }
    };

    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
        piirtoalusta = document.getElementById('piirtoalusta');
        let konteksti = piirtoalusta.getContext('2d');
        let naama = new Naama(tyylit);
        naama.piirra(konteksti);
        konteksti.strokeStyle = 'red';
        konteksti.font = '40pt Serif';
        konteksti.strokeText("Haijy naama", 100, 360);
    }
    class Naama {
        constructor(tyylit) {
            this.tyylit = tyylit;
        }

        piirra(konteksti) {
            this.piirraSuorakaide(konteksti, 'tausta', 100, 100, 200, 200, true);
            this.piirraSuorakaide(konteksti, 'suu', 150, 250, 100, 25, false);
            this.piirraSuorakaide(konteksti, 'nena', 190, 200, 20, 20);
            this.piirraSilma(konteksti, 'silma', 155, 155, 25);
            this.piirraSilma(konteksti, 'silma', 255, 155, 25);
            this.piirraSilma(konteksti, 'iris', 156, 155, 12);
            this.piirraSilma(konteksti, 'iris', 255, 155, 12);
            this.piirraKulmakarva(konteksti, 110, 130);
            this.piirraKulmakarva(konteksti, 210, 130);
        }

        piirraKulmakarva(konteksti, alkuX, alkuY) {
            konteksti.beginPath();
            konteksti.moveTo(alkuX, alkuY);
            konteksti.lineTo(alkuX + 45, alkuY - 20);
            konteksti.lineTo(alkuX + 80, alkuY);
            konteksti.lineWidth = 3;
            konteksti.stroke();
        }

        piirraSilma(konteksti, osa, x, y, sade) {
            konteksti.save();
            konteksti.beginPath();
            konteksti.fillStyle = this.tyylit[osa].vari;
            konteksti.arc(x, y, sade, 0, 2 * Math.PI);
            konteksti.fill();
            if (this.tyylit[osa].viivanLeveys > 0) {
                konteksti.lineWidth = this.tyylit[osa].viivanLeveys;
                konteksti.strokeStyle = this.tyylit[osa].viiva;
                konteksti.stroke();

            }
            
            konteksti.restore();
        }
    
        piirraSuorakaide(konteksti, osa, x, y, lev, kork) {
            konteksti.save();
            konteksti.fillStyle = this.tyylit[osa].vari;
            konteksti.fillRect(x, y, lev, kork);
            if (this.tyylit[osa].viivanLeveys > 0) {
                konteksti.lineWidth = this.tyylit[osa].viivanLeveys;
                konteksti.strokeStyle = this.tyylit[osa].viiva;
                konteksti.strokeRect(x, y, lev, kork);
            }
            konteksti.restore();
        }
    }
})();