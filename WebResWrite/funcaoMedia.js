import { Console } from 'console';
import http from 'http';

    function media(a, b, c, d){
        return (a + b + c + d)/4
    }

http.createServer((req, res) =>{
    
    let nota1 = 1;
    let nota2 = 7;
    let nota3 = 5;
    let nota4 = 10;

    let mediaFinal = media(nota1, nota2, nota3, nota4);

    res.write(`<h1>Considerando as notas ${nota1}, ${nota2}, ${nota3} e ${nota4}, obtidas nos 4 bimestres, a media do aluno: ${mediaFinal}</h1>`)

        
    res.end()

}).listen(5050,()=>{console.log('App rodando na porta 5050')})
