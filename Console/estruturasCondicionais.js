// Estruturas Condicionais (if e else): Crie um programa que leia a idade do usuário e apresente se ele é maior ou menor de idade.
import inquirer from "inquirer";

const answers = inquirer.prompt([

    {
        message: 'Entre com a sua idade:',
        type: 'number',
        name: 'idade'
           
    }

])


answers.then((answers) => {
    if (answers.idade < 18) {
        console.log(`Você é menor de idade!`)
    } else {
        console.log(`Você é maior de idade!`)
    }

})

.catch((err)=> {
    console.log(err)
})
