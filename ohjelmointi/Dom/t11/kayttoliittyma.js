'use strict';
class Peli{
    pelaaja;
    jakaja;
    pakka;

    constructor(){
        this.pelaaja = new Kasi("PELAAJA");
        this.jakaja = new Kasi("JAKAJA");
        this.pakka = new Pakka();
    }

    aloitaPeli() {
        this.lisaa(this.pelaaja)
        this.lisaa(this.pelaaja)
    }

    lisaaKortti(pelaaja){
        console.log(this.pakka)
        let kortti = this.pakka.otaKortti();
        console.log(kortti);
        pelaaja.lisaaKortti(kortti);
    }
    
    getCardHtml(maa, arvo){
        let vari  = "";
        
        if (maa == Maa.HERTTA.symboli || maa == Maa.RUUTU.symboli){
            vari = "red";
        }
        else{
            vari = "black"; 
        }
        let html = 
        "<div class='upper number'>" + arvo + "</div>"+
        "<div id='middle' class='middle "+ vari +"'>" + maa + "</div>"+
        "<div class='lower number'>" + arvo + "</div>";
        return html;

    }
    lisaa(pelaaja){
        this.lisaaKortti(pelaaja);
        console.log(pelaaja);
        let kortti = pelaaja.kortit[pelaaja.kortit.length -1];
        console.log(kortti)
        if (pelaaja.tyyppi === Kasi.pelaaja) {
            let elementId = document.getElementsByClassName('pelaaja')
            elementId[pelaaja.kortit.length-1].innerHTML = this.getCardHtml(kortti.maa, kortti.arvo);
            elementId[pelaaja.kortit.length-1].classList.add("kortti")
            console.log(elementId)
            
            if ((pelaaja.pisteet == 21) || (pelaaja.kortit.length == 5 && pelaaja.pisteet <= 21)){
                document.getElementById('kulku').innerHTML = "Voitit pelin!";
                nosta.removeEventListener('click', nostafunk);
                jaa.removeEventListener('click', jaafunk);
            }
            if (pelaaja.pisteet > 21){
                document.getElementById('kulku').innerHTML = "Havisit pelin!";
                nosta.removeEventListener('click', nostafunk);
                jaa.removeEventListener('click', jaafunk);
            } 
        } else if (pelaaja.tyyppi === Kasi.jakaja) {
            let elementtid = document.getElementsByClassName('jakaja');
            elementtid[pelaaja.kortit.length-1].innerHTML = this.getCardHtml(kortti.maa, kortti.arvo);
            elementtid[pelaaja.kortit.length-1].classList.add("kortti")
            
            
            if ((pelaaja.pisteet == 21) || (pelaaja.pisteet <= 21 && pelaaja.pisteet >= this.pelaaja.pisteet) || (pelaaja.kortit.length == 5 && pelaaja.pisteet <= 21)){
                document.getElementById('kulku').innerHTML = "Jakaja voitti pelin!";
                nosta.removeEventListener('click', nostafunk);
                jaa.removeEventListener('click', jaafunk);
            }
            if (pelaaja.pisteet > 21){
                document.getElementById('kulku').innerHTML = "Jakaja havisi pelin!";
                nosta.removeEventListener('click', nostafunk);
                jaa.removeEventListener('click', jaafunk);
            }
        }
        
    }
    
    jaa(jakaja){
        for (let i = 0; i < 5; i++) {
            if ((this.jakaja.pisteet >= 21) || (this.jakaja.pisteet > this.pelaaja.pisteet)) {
                break;
            } else {
                this.lisaa(this.jakaja)
                nosta.removeEventListener('click', nostafunk);
            }
        }
    }

}

let peli = new Peli();

let nosta = document.getElementById("nosta");
let jaa = document.getElementById("jaa");
let uus = document.getElementById("uus");



document.addEventListener('DOMContentLoaded', alusta);
function alusta() {
    peli.aloitaPeli();
}

nosta.addEventListener('click', nostafunk);
function nostafunk(){
    peli.lisaa(peli.pelaaja)
}

jaa.addEventListener('click', jaafunk);
function jaafunk(){
    peli.jaa(peli.jakaja)
    document.getElementById("nosta").disabled = true;
    jaa.removeEventListener('click', jaafunk);
}

uus.addEventListener('click', uusfunk);
function uusfunk() {
    location.reload(); 
    document.getElementById("nosta").disabled = false;
}

const myDiv = document.getElementById("nosta");
document.getElementById("nosta", myFunction);

function removeHandler() {
    document.getElementById("nosta", myFunction);
}

function myFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}