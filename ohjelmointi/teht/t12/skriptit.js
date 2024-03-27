function tarkistaLomake() {
    let x = document.forms["lomake"]["etunimi"].value;
    if (x == "") {
      alert("Etunimi pitää antaa");
      return false;
    }
  }