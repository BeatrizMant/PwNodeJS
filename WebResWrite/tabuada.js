// Variaveis - Crie um programa que apresente toda a tabuada do 1 até o 10

import { Console } from 'console';
import http from 'http';

http.createServer((req, res) =>{

    var n = 1

    for (let tab = 1; tab < 11; tab++) {
        res.write(`<h1>Tabuada do ${tab}</h1>`)
        for (let i=1; i <= 10; i++) {
            let resposta = n * i;
            res.write(`<h2>${n} X ${i} = ${resposta}</h2>`)
        }
        n++
    }
        
    res.end()

}).listen(5002,()=>{console.log('App rodando na porta 5002')})