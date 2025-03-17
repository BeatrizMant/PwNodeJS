// const url = "http://localhost:5000/"
// const resp = await fetch(url) 
// const retorno = resp.json()
// console.log(retorno)


// const options = {
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },

//     method: "POST",
//     body: JSON.stringify({a: 1, b: 2})
// }



// const url = "http://localhost:5000/";
// fetch(url)
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .catch(err => console.error("Erro ao conectar:", err));



// calculadora

let conta = document.getElementById("conta");
let valores = "";
let sinal = "";


function receberValor(value) {
    //Inclementar valor
    valores += value;
    conta.textContent = valores;
    
}

function receberSinal(value) {
    if (valores === "" && value !== ",") {
        return "";
    }

    if(value === "%") {
        valores = valores / 100;
        conta.textContent = valores;
        return valores.substring(0, valores.length-1);
    }

    if (value === "apagar") {
        valores = valores.slice(0, -1); // Remover o último digíto
    } else {
        //Inclementar valor
        valores += value;
    }

    conta.textContent = valores;
}


function somar() {
    try {
        
        // Substituição do sinal de potenciação
        let expressao = valores
            .replace(/\^/g, '**')

        let resultado = eval(expressao); 

        if (!Number.isInteger(resultado)) {
            resultado = resultado.toFixed(2);
        }

        valores = resultado;
        conta.textContent = valores;
    } catch(error) {
        conta.textContent = "Erro";
        valores = "";
    }
}


function limpar() {
    valores = "";
    return conta.textContent = "";
}

