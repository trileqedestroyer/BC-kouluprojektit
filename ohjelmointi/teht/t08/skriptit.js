document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
function changeText(id) {
    id.innerHTML = "Hups!";
  }
function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

function mOver(obj) {
    obj.innerHTML = "kiitos"
}

function mOut(obj) {
    obj.innerHTML = "Hiiri päälleni!"
}