// mettendo tutto qui dentro, sono certo che il codice verrà eseguito quando il DOM è già stato caricato
$(document).ready(function(){

  // Partendo da un array semplice tipo:
  // var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
  // chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
  // quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

  // inizializzo un array con un insieme di nomi
  const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

  console.log('myArray', myArray);

  myArray.forEach(element => {
    $(".my-array").append(`<p>nome: ${element}</p>`);
  });

  // chiedo all'utente di inserire i due valori di input
  const min = parseInt(prompt("inserire un numero intero compreso tra 0 e 5"));
  const max = parseInt(prompt("inserire un numero intero maggiore o uguale del numero inserito precedentemente e minore o uguale a 5"));

  // creo il nuovo array, filtrato rispetto a quello di partenza
  const myNewArray = myArray.filter((element, index) => {
    if ((index >= min) && (index <= max)) {
      return element
    }
  });

  console.log('myNewArray', myNewArray);

  myNewArray.forEach(element => {
    $(".my-new-array").append(`<p>nome: ${element}</p>`);
  });

});
