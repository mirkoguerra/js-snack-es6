// mettendo tutto qui dentro, sono certo che il codice verrà eseguito quando il DOM è già stato caricato
$(document).ready(function(){

  // dato questo array di obj iniziale:
  // var arrayObj = [
  // {name: 'Poppy', type: 'tshirt', color: 'red'},
  // {name: 'Jumping', type: 'occhiali', color: 'blue'},
  // {name: 'CrissCross', type: 'scarpe', color: 'black'},
  // {name: 'Jenny', type: 'borsa', color: 'pink'},
  // ];
  // Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
  // una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

  // array di partenza
  const arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
  ];

  console.log('array di partenza', arrayObj);

  for (let i = 0; i < arrayObj.length; i++){
    $(".old-array").append(`<p>nome: ${arrayObj[i].name}, tipo: ${arrayObj[i].type}, colore: ${arrayObj[i].color}</p>`)
  }

  // funzione volta a generare una lettera casuale
  function randomLetter() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const lengthLetters = letters.length;
    let randomLetter = "";
    randomLetter = letters[Math.floor(Math.random()*lengthLetters)];
    return randomLetter;
  }

  // nuovo array, uguale al precedente, eccetto per il fatto che gli oggetti in esso contenuto hanno una proprietà aggiuntiva, "position", alla quale è assegnato come valore una lettera casuale
  const newArrayObj = arrayObj.map(element =>
  {
    let newObject = {
      ...element,
      position: randomLetter()
    }
    return newObject;
  });

  console.log('nuovo array', newArrayObj);

  for (let i = 0; i < newArrayObj.length; i++){
    $(".new-array").append(`<p>nome: ${newArrayObj[i].name}, tipo: ${newArrayObj[i].type}, colore: ${newArrayObj[i].color}, posizione: ${newArrayObj[i].position}</p>`)
  }

});
