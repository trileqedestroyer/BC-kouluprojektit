let nimet = ["Tapio", "Leela", "Matti", "Antti"];
document.getElementById("taul").innerHTML = nimet;
document.getElementById("demo").innerHTML = nimet[2];
document.getElementById("pituus").innerHTML = nimet.length;
let vika = nimet[nimet.length-1];
document.getElementById("vika").innerHTML = vika;
nimet.push("Pekka");
document.getElementById("demo2").innerHTML = nimet;
document.getElementById("vali").innerHTML = nimet.join(" ");
nimet.splice(2,2);
nimet.splice(2,0, "Liisa", "Laila");
document.getElementById("demo3").innerHTML = nimet;
nimet.sort();
document.getElementById("aakkos").innerHTML = nimet;
let numerot = [1,7,45,32,27,86];
document.getElementById("num").innerHTML = numerot;
numerot.sort(function(a,b){return a-b});
document.getElementById("num2").innerHTML = numerot;
numerot.sort(function(a, b){return 0.5 - Math.random()});
document.getElementById("seka").innerHTML = numerot;
function MyArrayMin(arr){
    return Math.min.apply(null,arr);
}
document.getElementById("demo4").innerHTML = MyArrayMin(numerot);
function MyArrayMax(arr){
    return Math.max.apply(null,arr);
}
document.getElementById("demo5").innerHTML = MyArrayMax(numerot);