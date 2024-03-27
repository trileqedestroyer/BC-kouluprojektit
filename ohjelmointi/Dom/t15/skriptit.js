'use strict';
(function () {
    let piirtoalusta;
    let konteksti;
    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
        piirtoalusta = document.getElementById('piirtoalusta');
        konteksti = piirtoalusta.getContext('2d');

        piirra(100, 90, 205, 205, 'cyan')
        piirraSuorakaide('suu', 150, 250, 100, 25, false);
        piirraSuorakaide('silma', 120, 110, 50, 50, true);
        piirraSuorakaide('silma', 230, 110, 50, 50, true);
        piirraSuorakaide('nena', 190, 190, 23, 23, true)

    }
    function piirra(x, y, leveys, korkeus, vari) {
        konteksti.fillStyle = vari;
        konteksti.fillRect(x, y, leveys, korkeus);
        konteksti.strokeStyle = 'orange';
        konteksti.lineWidth = 5;
        konteksti.strokeRect(x, y, leveys, korkeus);
    }
    const tyylit = {
        suu: { vari: 'red', viiva: 'orange', viivanLeveys: 5 },
        silma: { vari: 'white', viiva: 'black', viivanLeveys: 2 },
        nena: { vari: 'blue', viiva: 'orange', viivanLeveys: 5 },
    }
    function piirraSuorakaide(osa, x, y, lev, kork, onReuna = true) {
        konteksti.save();
        konteksti.fillStyle = tyylit[osa].vari;
        konteksti.fillRect(x, y, lev, kork);
        if (onReuna) {
            konteksti.lineWidth = tyylit[osa].viivanLeveys;
            konteksti.strokeStyle = tyylit[osa].viiva;
            konteksti.strokeRect(x, y, lev, kork);
        }
        konteksti.restore();
    }
})();