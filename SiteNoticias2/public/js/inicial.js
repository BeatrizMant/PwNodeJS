const box = document.querySelector(".container2");
const imagens = document.querySelector(".imagens");

let contador = 0;

function slider() {
    contador++;


    if (contador >= 5) {
        contador = 0;
    }

    /* Animação */
    box.style.transform = `translateX(${-contador * 1000}px)`;
}

setInterval(slider , 2600);
