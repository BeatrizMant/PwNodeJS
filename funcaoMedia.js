//Crie um programa que leia três notas de um aluno e calcule a média dele

import inquirer from "inquirer"; 

function media(a, b, c){
    return (a + b + c)/3
}

const anwsers = inquirer.prompt([

    {
        message: 'Entre com a primeira nota: ',
        default: '0',
        type: 'number',
        name: 'nota1'
    },

    {
        message: 'Entre com a segunda nota: ',
        default: '0',
        type: 'number',
        name: 'nota2'
    },

    {
        message: 'Entre com a terceira nota: ',
        default: '0',
        type: 'number',
        name: 'nota3'
    }

])

anwsers.then(anwsers => {
    let mediaFinal = media(anwsers.nota1, anwsers.nota2, anwsers.nota3);
    console.log(`A média é ${mediaFinal}`);
})