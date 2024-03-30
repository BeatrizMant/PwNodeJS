// Estruturas de repetição - fatorial
// Ex: 5! = 5*4*3*2*1 = 120

import { Console } from 'console';
import http from 'http';

http.createServer((req, res) =>{

    var n = 1
    var i = 5

    res.write(`<h1>Esse programa apresenta o calculo do fatorial do numero 5:</h1>`);

    while (i != 1) {
        n = i * n
        i--
        if (i == 1) {
            res.write(` ${i} = ${n}`)
        } else {
            res.write(` ${i} *`)
        }
    }

        
    res.end()

}).listen(5000,()=>{console.log('App rodando na porta 5000')})


