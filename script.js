function obliczKoszt() {

  let odbior = document.getElementById("odbior").value;
  let zwrot = document.getElementById("zwrot").value;
  let cena = document.getElementById("auto").value;

  let data1 = new Date(odbior);
  let data2 = new Date(zwrot);

  let roznica = data2 - data1;
  let dni = roznica / (1000 * 60 * 60 * 24);

  let koszt = dni * cena;

  if (dni > 5) {
    koszt = koszt * 0.9;
    document.getElementById("rabat").innerHTML =
      "Dodano rabat 10%";
  } else {
    document.getElementById("rabat").innerHTML = "";
  }

  document.getElementById("dni").innerHTML =
    "Ilość dni: " + dni;

  document.getElementById("koszt").innerHTML =
    "Koszt: " + koszt.toFixed(2) + " zł";
}