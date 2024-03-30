// Modularização: Crie um programa que leia dois números e realize as seguintes operações com os mesmos: Adição, Subtração, Divisão, 
// Multiplicação e Potenciação. 
import inquirer from "inquirer";
import adicao from "./adicao.js";
import subtracao from "./subtracao.js";
import multiplicacao from "./multiplicacao.js";
import divisao from "./divisao.js";
import potencia from "./potencia.js";

const answers = inquirer.prompt([

    {
        message: 'Entre com o valor de A:',
        type: 'number',
        name: 'a'
           
    },

    {
        message: 'Entre com o valor de B:',
        type: 'number',
        name: 'b'
    },

    {
        type: "list", 
        name: "opção",
        choices: ["Adição", "Divisão", "Subtração",  "Multiplicação", "Potência"]
    }
])


answers.then((answers) => {
    if (answers["opção"] == "Adição") {
        console.log(adicao(answers.a, answers.b))

    } else if (answers["opção"] == "Divisão") {
        console.log(divisao(answers.a, answers.b))

    } else if (answers["opção"] == "Subtração") {
        console.log(subtracao(answers.a, answers.b))

    } else if (answers["opção"] == "Multiplicação"){
        console.log(multiplicacao(answers.a, answers.b))

    } else if (answers["opção"] == "Potência") {
        console.log(potencia(answers.a, answers.b))
    } else {
        console.log(`Opção inválida`)
    }

})

.catch((err)=> {
    console.log(err)
})





