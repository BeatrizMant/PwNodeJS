// Crie um programa que calcule algumas potências de base que variem de 1 até a 5, e com expoente que também variem de 1 até 5

import { Console } from 'console';
import http from 'http';
import potenciacao from "./potenciacao.js";

http.createServer((req, res) =>{

    var resultado = 0;

    for (var base = 1; base <= 5; base++) {
        res.write(`<h1>Potencias de ${base}:</h1>`)
        for (var expoente = 1; expoente <= 10; expoente++) {
            resultado = potenciacao(base, expoente)
            res.write(`<h2>${base} ^ ${expoente} = ${resultado}</h2>`)
            
        }
        
    }
        
    res.end()

}).listen(5016,()=>{console.log('App rodando na porta 5016')})

//res.write(`<h2>${base} ^ ${expoente} = potenciacao(base, expoente)</h2>`)""