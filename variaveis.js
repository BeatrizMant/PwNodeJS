// Crie um program que leia um número e apresente toda a tabuada dele mesmo até o 10
import inquirer from "inquirer";
var i=1;
const answers = inquirer.prompt([

    {
        message: 'Entre com o número que deseja ver a tabuada:',
        type: 'number',
        name: 'n'
    }
    
])


answers.then((answers) => {
    while (i <= 10) {
        let resposta = answers.n * i;
        console.log(`${answers.n} X ${i} = ${resposta}`)
        i++
    }
})

.catch((err)=> {
    console.log(err)
})

   

