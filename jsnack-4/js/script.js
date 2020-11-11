// mettendo tutto qui dentro, sono certo che il codice verrà eseguito quando il DOM è già stato caricato
$(document).ready(function(){

  // PARTE A
  // Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
  // Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

  var nomeSquadra = [];

  for (var i = 0; i <= 2; i++) {
    nomeSquadra[i] = prompt("inserire il nome della squadra");
  }  

  var squadre = [
    {
      nome: nomeSquadra[0],
      puntiFatti: 0,
      falliSubiti: 0
    },
    {
      nome: nomeSquadra[1],
      puntiFatti: 0,
      falliSubiti: 0
    },
    {
      nome: nomeSquadra[2],
      puntiFatti: 0,
      falliSubiti: 0
    },
  ];

  // console.log(squadre);

  //PARTE B
  // Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti

  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (var i = 0; i < squadre.length; i++) {
    squadre[i]["puntiFatti"] = getRandomInt(0, 50)
    squadre[i]["falliSubiti"] = getRandomInt(0, 100)
    $(".squadre").append("nome: " + squadre[i]["nome"] + "<br>");
    $(".squadre").append("punti fatti: " + squadre[i]["puntiFatti"] + "<br>");
    $(".squadre").append("falli subiti: " + squadre[i]["falliSubiti"] + "<br>");
  }

  // console.log(squadre);

});
