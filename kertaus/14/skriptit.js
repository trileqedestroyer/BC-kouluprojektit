let ysade = prompt("Määritä säde:")
ympyranKeha((ysade))

function ympyranKeha(sade) {
    document.getElementById("demo").innerHTML = "Ympyrän, jonka säde on: " + ysade + ", Kehän pituus on: " + 2* Math.PI * sade
}