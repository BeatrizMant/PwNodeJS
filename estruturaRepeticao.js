// Laço de repetição: Crie um programa que calcule e apresente o fatorial de um número inteiro apresentado pelo usuário.
// Ex: 5! = 5*4*3*2*1 = 120
import inquirer from "inquirer";

var n=1;
const answers = inquirer.prompt([

    {
        message: 'Digite um número inteiro: ',
        type: 'number',
        name: 'i'
           
    }
])


answers.then((answers) => {
    while (answers.i != 1) {
        n = answers.i * n
        answers.i--
    }

    console.log(`O valor final é de: ${n}`)
})

.catch((err)=> {
    console.log(err)
})

   

