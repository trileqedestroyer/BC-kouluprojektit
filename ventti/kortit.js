let pakka = [['h', 1], ['h', 2], ['h', 3], ['h', 4], ['h', 5], ['h', 6], ['h', 7], ['h', 8], ['h', 9], ['h', 10], ['h', 11], ['h', 12], ['h', 13], 
            ['d', 1], ['d', 2], ['d', 3], ['d', 4], ['d', 5], ['d', 6], ['d', 7], ['d', 8], ['d', 9], ['d', 10], ['d', 11], ['d', 12], ['d', 13], 
            ['c', 1], ['c', 2], ['c', 3], ['c', 4], ['c', 5], ['c', 6], ['c', 7], ['c', 8], ['c', 9], ['c', 10], ['c', 11], ['c', 12], ['c', 13], 
            ['s', 1], ['s', 2], ['s', 3], ['s', 4], ['s', 5], ['s', 6], ['s', 7], ['s', 8], ['s', 9], ['s', 10], ['s', 11], ['s', 12], ['s', 13]];

//Sekoita pakka
pakka = shuffleArray(pakka);

let lkm = 0;
let summa = 0;
let kortit = document.querySelectorAll('.kortti');

//Pelaajan kortit
for (let i = 0; i < 2; i++) {
    let arvo = pakka[lkm][1];
    let maakoodi = pakka[lkm][0];
    summa += arvo;
    kortit[i].innerHTML = arvo + maakoodi;
    lkm++;
}
console.log(summa);

//Jos summa on 21, pelaaja voittaa
if (summa === 21) {
    console.log("Pelaaja voitti!");
}
//Jos summa on yli 21, pelaaja häviää
else if (summa > 21) {
    console.log("Pelaaja hävisi!");
}
//Muuten peli jatkuu
else {
    //Pelaaja voi valita nostavansa uuden kortin tai jäädä siihen
    //Pelaajan valinnan käsittely tähän
}

//Pelaaja voi valita nostavansa uuden kortin tai jäädä siihen
let valinta = prompt("Haluatko nostaa uuden kortin? (k/e)");
if (valinta === 'k') {
    let uusiKortti = kortit[2];
    let arvo = pakka[lkm][1];
    let maakoodi = pakka[lkm][0];
    summa += arvo;
    uusiKortti.innerHTML = arvo + maakoodi;
    lkm++;
    console.log(summa);
    //Tarkistetaan summa uudelleen
    if (summa === 21) {
        console.log("Pelaaja voitti!");
    }
    else if (summa > 21) {
        console.log("Pelaaja hävisi!");
    }
    //Poikkeus: jos pelaajalla on 5 korttia ja summa on alle 21, pelaaja voittaa
    else if (kortit.length === 5 && summa < 21) {
        console.log("Pelaaja voitti 5-kortin ventin!");
    }
    else {
        //Jatka peliä
    }
}
else if (valinta === 'e') {
    console.log("Pelaaja jäi tilanteeseen.");
    //Vuoro siirtyy jakajalle
    let jakajanSumma = 0;
    let jakajanKortit = [];
}
    while (jakajanSumma < summa && jakajanSumma <= 21 && jakajanKortit.length < 5) {
        let uusiKortti = kortit[jakajanKortit.length + 2];
        let arvo = pakka[lkm][1];
        let maakoodi = pakka[lkm][0];
        jakajanSumma += arvo;
        jakajanKortit.push(arvo + maakoodi);
        uusiKortti.innerHTML = arvo + maakoodi;
        lkm++;
    }
    console.log("Jakajan kortit: " + jakajanKortit);
    console.log("Jakajan summa: " + jakajanSumma);
    //Tarkistetaan kuka voitti
    if (jakajanSumma > 21) {
        console.log("Jakaja hävisi!");
    }
    else if (jakajanSumma >= summa || jakajanSumma === 21 || jakajanKortit.length === 5) {
        console.log("Jakaja voitti!");
    }
    else {
        console.log("Pelaaja voitti!");
    }
