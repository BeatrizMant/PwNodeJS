const container = document.getElementById("opcoes");


function novoCard() {
    const nomeBike = document.getElementById("nomeBike").value;
    const tipoBike = document.getElementById("tipoBike").value;
    const valorBike = document.getElementById("valorBike").value;

    alert('Bike cadastrada no sistema com sucesso!');

    let novoCard = document.createElement('div');
    novoCard.classList.add('card');
    novoCard.innerHTML = `
        <img id="imgB" src"./img/bikeBlack.png" alt="">
        <div class="info">
            <h2 id="nomeB">${nomeBike}</h2>
            <p id="tipoB"><b>Tipo: </b>${tipoBike}</p>
            <p id="valorB"><b id="preco">R$ ${valorBike}</b> por hora</p>
            <button id="verMais">Ver mais</button>
        </div>
    `;
    
    console.log(nomeBike + ", " + tipoBike + ", " + valorBike);

    container.appendChild(novoCard);
}

