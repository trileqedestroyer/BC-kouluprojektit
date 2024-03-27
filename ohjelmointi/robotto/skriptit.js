function kaskyt() {
    let kasky = document.getElementById("kasky").value;
    console.log(kasky)

    if (kasky == "robotto.wave();") {
        document.getElementById("kuva").innerHTML="<img class='wave' src='wave1.png' >" + "<img class='wave' src='wave2.png' >";
        w3.slideshow(".wave", 100);
        document.getElementById("stand").style.display= "none";
        return
    }

    else if (kasky == "robotto.jump();") {
        document.getElementById("kuva").innerHTML="<img class='jump' src='jump1.png' >" + "<img class='jump' src='robotto.png' >";
        w3.slideshow(".jump", 270);
        document.getElementById("stand").style.display= "none";
        return
    }
    else if (kasky == "robotto.walk();") {
        document.getElementById("kuva").innerHTML="<img class='walk' src='walk1.png' >" + "<img class='walk' src='walk2.png'>";
        w3.slideshow(".walk", 400);
        document.getElementById("stand").style.display= "none";
        return
    }
    else {
        alert ("Syntax error!");
    }

}

function pois() {
    document.getElementById("kuva").innerHTML = "";
    document.getElementById("stand").style.display="block";
    document.getElementById("kasky").value = "";
}