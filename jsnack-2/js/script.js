// mettendo tutto qui dentro, sono certo che il codice verrà eseguito quando il DOM è già stato caricato
$(document).ready(function(){

  // Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

  // creo un array contenente oggetti, i quali sono biciclette da corsa con chiavi nome e peso
  var biciclette = [
    {
      nome: "Graziella",
      peso: "15"
    },
    {
      nome: "Loretta",
      peso: "20"
    },
    {
      nome: "Florina",
      peso: "15"
    },
    {
      nome: "Gertrude",
      peso: "30"
    }
  ];

  console.log("array di tutte le biciclette", biciclette);

  // inizializzo l'array che conterrà la/e bicicletta/e con il peso minore
  var bicicletteLeggere = [biciclette[0]];

  // ciclo sull'array che contiene tutte le biciclette
  for (var i = 1; i < biciclette.length; i++) {

    if (biciclette[i].peso == bicicletteLeggere[0].peso) {
      bicicletteLeggere.push(biciclette[i]);
      // se il peso della bicicletta è uguale al peso del primo elemento delle biciclette leggere, aggiungo il peso della bicicletta all'array delle biciclette leggere
    } else if (biciclette[i].peso < bicicletteLeggere[0].peso) {
      bicicletteLeggere = [biciclette[i]];
      // se il peso della bicicletta è minore al peso del primo elemento delle biciclette leggere, svuoto l'array e ci metto la bicicletta più leggera
    }

  }

  console.log("array della/e bicicletta/e con il peso minore", bicicletteLeggere);

  // stampo a schermo l'array contenente la/e bicicletta/e con il peso minore
  for (var i = 0; i < bicicletteLeggere.length; i++) {
    $(".biciclette-leggere").append("<p>" + bicicletteLeggere[i].nome + "</p>");
  }
  // stampo a schermo il peso minore
  $(".peso-minore").append("Il peso delle bici con il peso minore è: " + bicicletteLeggere[0].peso);
});
