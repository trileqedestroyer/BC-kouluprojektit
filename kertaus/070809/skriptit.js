let taulukko = ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu"];
taulukko.push("toukokuu");
taulukko.push("kesäkuu");
for (let i = 0; i < taulukko.length; i++) {
    document.getElementById("kuukaudet").innerHTML = taulukko.join(" ja "), taulukko.sort();
}


