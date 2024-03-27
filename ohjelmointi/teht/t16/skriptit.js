function myFunction() {
  let message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try {
    if(x == "") throw "tyhjä";
    if(isNaN(x)) throw "ei numero";
    x = Number(x);
    if(x < 0) throw "liian pieni";
    if(x > 100) throw "liian suuri";
  }
  catch(err) {
    message.innerHTML = "Syötetty tieto on " + err;
  }
}
