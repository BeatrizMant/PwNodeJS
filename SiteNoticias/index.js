import express from 'express'
import path from 'path'


const app = express()

app.use(express.static('public'))

// Inicio 
app.get('/', function (req, res) {
  let end = path.resolve('./view/index.html')
  res.sendFile(end)
})

// Sugestões 
app.get('/sugestoes', function (req, res) {
  let end = path.resolve('./view/sugestoes.html')
  res.sendFile(end)
})

// Séries
app.get('/series', function (req, res) {
  let end = path.resolve('./view/series.html')
  res.sendFile(end)
})

// Novelas
app.get('/novelas', function (req, res) {
  let end = path.resolve('./view/novelas.html')
  res.sendFile(end)
  
})

// Filmes
app.get('/filmes', function (req, res) {
  let end = path.resolve('./view/filmes.html')
  res.sendFile(end)
})





app.listen(3000, ()=>{console.log("Funcionando na porta 3000")})