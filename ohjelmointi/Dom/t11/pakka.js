class Pakka {
    kortit;
    constructor() {
        this.kortit = this.luoPakka();
        this.sekoita();
    }

    sekoita(){ 
        this.kortit.sort(function(a, b){return 0.5 - Math.random()});
    }

    lisaaKortti(kortti){
        this.kortit.push(kortti);
    }

    otaKortti(){
        return this.kortit.shift();
    }

    luoPakka(){
        let kortit = [];
        let maa = [Maa.HERTTA.symboli, Maa.PATA.symboli, Maa.RISTI.symboli, Maa.RUUTU.symboli];
        for (let i = 0; i < maa.length; i++)
        {
            for (let x = 1; x <= 13; x++)
            {
                let kortti = new Kortti(maa[i], x)
                kortit.push(kortti)
            }
        }
        return kortit
    }
}