function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();    
}

const listaDeTeclas = document.querySelectorAll('.tecla');
const listaDeAudios = document.querySelectorAll('audio');

let contador = 0;

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSom;

    contador = contador+1;

    console.log(contador);
}