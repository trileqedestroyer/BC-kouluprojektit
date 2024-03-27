let text = "";
let y = document.getElementById("paikka");

function luvut() {
    y.innerHTML = "";
    for (let i = 1; i < 21; i++) {
        if(i % 5 == 0) {
            y.innerHTML += i + " " + "Jaollinen viidellä" + '<br>';

            
        }

        else {
            y.innerHTML +=  i + " " + '<br>';
        }
            
        console.log(i)
        
        
    }


    }