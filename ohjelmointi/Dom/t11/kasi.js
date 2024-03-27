class Kasi extends Pakka{
    tyyppi = "";
    static pelaaja = "PELAAJA"
    static jakaja = "JAKAJA"

    constructor(tyyppi){
        super();
        this.tyyppi = tyyppi
        this.kortit = [];
    }

    get pisteet() {
        return this.summa();
    }

    summa(){
        let pisteet = 0;
        for(let i = 0; i < this.kortit.length; i++){
            pisteet += this.kortit[i].arvo;
        }

        return pisteet
    }
}