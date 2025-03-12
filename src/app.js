import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  var sujeto = [
    "Mi abuelo borracho",
    "La tía chiflada de mi primo",
    "Mi vecino extraterrestre",
    "El gato parlante de mi mamá",
    "Un ninja en sandalias"
  ];

  var accion = [
    "se comió",
    "desintegró",
    "robó",
    "prendió fuego",
    "transformó en confeti"
  ];

  var cosa = [
    "mis deberes intergalácticos",
    "mi celular a prueba de bombas",
    "mi computadora",
    "mi colección de memes épicos",
    "mi sándwich gourmet"
  ];

  var lugar = [
    "en la estación espacial de mi abuela",
    "en la escuela de magia",
    "en el supermercado embrujado",
    "en la calle llena de caracoles bailarines",
    "en un universo paralelo de chatarra"
  ];

  function GeneradorExcusas() {
    return `${sujeto[Math.floor(Math.random() * sujeto.length)]} ${accion[Math.floor(Math.random() * accion.length)]} ${cosa[Math.floor(Math.random() * cosa.length)]} ${lugar[Math.floor(Math.random() * lugar.length)]}`;
  }

  function insertarExcusa() {
    var parrafo = document.querySelector('.excusagenerada');                            //asignamos la variable parrafo al parrafo de excusa generada
    parrafo.innerText = GeneradorExcusas();                                             //le asignamos al parrafo de excusa generada el valor de la función GeneradorExcusas
  }

  document.addEventListener('DOMContentLoaded', function () {                             //cuando recargue la pagina llamamos a la función insertarExcusa
    insertarExcusa();
  });

  var boton = document.getElementById('botonexcusa');                                     //asignamos la variable boton al boton de excusa
  boton.addEventListener('click', function () {                                           //cuando se haga click en el boton de excusa llamamos a la función insertarExcusa   
    insertarExcusa();
  });















  
  // Añadimos boton e imput para añadir nuevas frases.

  var botonAñadirFrase = document.getElementById('botonAñadirFrase');                     //asignamos la variable botonAñadirFrase al boton de añadir frase
  botonAñadirFrase.addEventListener('click', function () {                                //añadimos un evento al boton de añadir frase
    var nuevaFrase = document.getElementById('nuevaFrase').value;                       //asignamos la variable nuevaFrase al valor del input de nueva frase
    var selectorDeFrases = document.getElementById('selectorFrases');                   //asignamos la variable selectorDeFrases al selector de frases
    if (nuevaFrase) {                                                                   //si nuevaFrase es verdadero
      switch (selectorDeFrases.value) {                                               //hacemos un switch con el valor del selector de frases                            
        case 'sujeto':
          sujeto.push(nuevaFrase);                                                //añadimos la nueva frase al array sujeto
          break;
        case 'accion':
          accion.push(nuevaFrase);                                                //añadimos la nueva frase al array accion                   
          break;
        case 'cosa':
          cosa.push(nuevaFrase);                                                        //añadimos la nueva frase al array cosa
          break;
        case 'lugar':
          lugar.push(nuevaFrase);                                                       //añadimos la nueva frase al array lugar
          break;
        default:
          break;
      }
      document.getElementById('nuevaFrase').value = '';
    }                                                                                   //limpiamos el input de nueva frase
  });
};
