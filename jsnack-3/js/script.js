// mettendo tutto qui dentro, sono certo che il codice verrà eseguito quando il DOM è già stato caricato
$(document).ready(function(){

  // Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza. Calcolare perimetro e area.

  // considero il caso in cui base e altezza corrispondono ai due cateti, perché se la base fosse l'ipotenusa, l'esercizio dovrebbe essere impostato in tutt'altro modo, ossia ricavando la lunghezza dei cateti a partire dall'ipotenusa e dall'altezza, grazie al Teorema di Euclide, così da poterne calcolare il perimetro

  // inizializzo l'oggetto triangolo rettangolo, assegnandogli le chiavi base e altezza
  var triangoloRettangolo = {
    base: 10,
    altezza: 20
  };

  console.log("oggetto triangolo rettangolo:", triangoloRettangolo);

  $(".dati").append("In un trangolo rettangolo, dati una base di " + triangoloRettangolo["base"] + " e un'altezza di " + triangoloRettangolo["altezza"] + ":");

  // inizializzo la variabile che contiene l'area relativa all'oggetto triangolo rettangolo
  var area = (triangoloRettangolo["base"] * triangoloRettangolo["altezza"]) / 2;

  console.log("area del triangolo rettangolo:", area);

  $(".area").append("L'area del triangolo rettangolo è: " + area);

  var quadratoIpotenusa = (triangoloRettangolo["base"] ** 2) + (triangoloRettangolo["altezza"] ** 2);

  console.log("il quadrato dell'ipotenusa è:", quadratoIpotenusa);

  $(".quadrato-ipotenusa").append("Il quadrato dell'ipotenusa è: " + quadratoIpotenusa);

  function roundTo(value, places) {
     var power = Math.pow(10, places);
     return Math.round(value * power) / power;
  }

  var ipotenusa = roundTo((quadratoIpotenusa ** 0.5), 2);

  $(".ipotenusa").append("L'ipotenusa è: " + ipotenusa);

  console.log("l'ipotenusa è:", ipotenusa);

  var perimetro = triangoloRettangolo["base"] + triangoloRettangolo["altezza"] + ipotenusa;

  console.log("il perimetro è:", perimetro);

  $(".perimetro").append("Il perimetro è: " + perimetro);

});
