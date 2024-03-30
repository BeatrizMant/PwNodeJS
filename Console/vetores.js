//Crie um programa que leia um número inteiro e escreva o dobro quantas vezes o usuário dejesar

import inquirer from "inquirer"; 

function dobro(a){
    return a*2
}

var vetor = new Array();

const anwsers = inquirer.prompt([

    {
        message: 'Entre com um número inteiro: ',
        default: '1',
        type: 'number',
        name: 'valor'
    },

    {
        message: 'Quantas vezes você quer que o dobro seja escrito? ',
        default: '5',
        type: 'number',
        name: 'nVezes'
    }

])

anwsers.then(anwsers => {

    var inteiro = anwsers.valor;
    console.log(inteiro);

    var n = anwsers.nVezes;

    for(var i=0; i<n; i++){
        vetor[i] = dobro(inteiro);
        console.log(vetor[i]);
        inteiro = vetor[i];
    }



})

