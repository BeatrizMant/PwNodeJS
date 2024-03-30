import { Console } from 'console';
import http from 'http';


http.createServer((req, res) =>{

    let idade = 55;

    res.write(`<h1>Considerando que a idade seja ${idade}:</h1>`)

    if(idade < 18) {
        res.write(`<br><h1>Pessoa menor de idade!</h1>`)
    } else{
        res.write(`<br><h1>Pessoa maior de idade!</h1>`)
    }
""
        
    res.end()

}).listen(5000,()=>{console.log('App rodando na porta 5000')})