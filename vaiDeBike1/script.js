import express from "express"
import exphbs from "express-handlebars"
//import mysql from "mysql"

//import conexao from "./DAO/conexao.js"

const app = express()
app.use(express.static("public"))

const hbs = exphbs.create({
  partialsDir: ["views/partials"]
})


app.engine('handlebars', exphbs.engine())
app.set("view engine", "handlebars")


app.use(
  express.urlencoded({
      extended: true
  })
)

app.use(express.json())



// login 
app.get("/login", (req, res) =>{
  
  res.render("login")

})

// login 
app.get("/cadastro", (req, res) =>{
  
  res.render("cadastro")

})


// login 
app.get("/inicio", (req, res) =>{
  
  res.render("inicio")

})


app.listen(4040, () => console.log("Funcionando na porta 4040"))

/*
const conn = conexao()

conn.connect((err)=> {
  if(err){
    console.log(err)
  } else{
    console.log("A conexão está funcionando")
    app.listen(4040, () => console.log("Funcionando na porta 4040"))
  }


})
*/