// mettendo tutto qui dentro, sono certo che il codice verrà eseguito quando il DOM è già stato caricato
$(document).ready(function(){

  // PARTE A
  // Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla Peso = 10
  var ball = {
    nome: "palla",
    peso: 10
  };

  console.log("creazione dell'oggetto ball", ball);

  for (var key in ball) {
    $(".a").append(key + ": " + ball[key] + "<br>");
  }

  // PARTE B
  // Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
  var ballWeight = parseInt(prompt("Inserire il peso della palla"));

  ball.peso = ballWeight;

  console.log("ball dopo che l'utente ha modificato il peso", ball);

  for (var key in ball) {
    $(".b").append(key + ": " + ball[key] + "<br>");
  }

});
