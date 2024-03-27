'use strict';
(function () {
    let piirtoalusta;
    let konteksti;
    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
        piirtoalusta = document.getElementById('piirtoalusta');
        konteksti = piirtoalusta.getContext('2d');
        //x y leveys korkeus vari
        piirra(10, 10, 50, 10, 'red');
        piirra(50, 300, 200, 30, 'red');
        piirra(150, 200, 50, 50, 'orange');
        piirra(50, 100, 60, 60, 'blue');
        piirra(200, 100, 60, 60, 'blue');
        konteksti.font = '40pt Serif';
        konteksti.fillStyle = 'green';
        konteksti.fillText('Naama', 150, 40);
        piirra(290, 160, 100, 100, 'orange');
        konteksti.font = '80pt Serif';
        konteksti.strokeStyle = 'green';
        konteksti.strokeText('X', 300, 250);
    }
    function piirra(x, y, leveys, korkeus, vari) {
        konteksti.fillStyle = vari;
        konteksti.fillRect(x, y, leveys, korkeus);
        konteksti.strokeStyle = 'blue';
        konteksti.lineWidth = 3;
        konteksti.strokeRect(x, y, leveys, korkeus);
    }
})();
 