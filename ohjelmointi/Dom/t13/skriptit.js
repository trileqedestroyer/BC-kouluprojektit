let piirtoalusta = document.getElementById('piirtoalusta');
let konteksti = piirtoalusta.getContext('2d');
konteksti.fillStyle = 'blue';
// x y lev kork
konteksti.fillRect(10, 10, 40, 50);
konteksti.fillStyle = 'orange';
konteksti.fillRect(200, 200, 100, 100);
konteksti.strokeStyle = 'black';
konteksti.lineWidth = 3;
konteksti.strokeRect(200, 200, 100, 100);