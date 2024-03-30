import { Console } from 'console';
import http from 'http'; 

http.createServer((req, res) =>{

    function dobro(a){
        return a*2
    }
    
    var vetor = new Array();

    let valor = 6;
    let n = 8;
    

    res.write(`<h1>Este programa vai exibir o dobro do ultimo valor apresentado ${n} vezes, iniciando-se no numero ${valor}:</h1>`)

    res.write(`$valor`)

    for(var i=0; i<n; i++){
        vetor[i] = dobro(valor);
        res.write(vetor[i]);
        valor = vetor[i];
    }
    
        
    res.end()

}).listen(5010,()=>{console.log('App rodando na porta 5010')})

