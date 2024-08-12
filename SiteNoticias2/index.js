import express from "express"
import exphbs from "express-handlebars"


const app = express()


app.engine('handlebars', exphbs.engine())
app.set("view engine", "handlebars")


app.use(express.static("public"))

// Inicio 
app.get("/", (req, res) =>{
  
  res.render("index")

})

//brasil
app.get("/brasil", (req, res) =>{
  
  res.render("brasil")
  
})
//argentina
app.get("/argentina", (req, res) =>{
  
  res.render("argentina")
  
})

//eua
app.get("/eua", (req, res) =>{
  
  res.render("eua")
  
})

//mexico
app.get("/mexico", (req, res) =>{
  
  res.render("mexico")
  
})

//canada
app.get("/canada", (req, res) =>{
  
  res.render("canada")
  
})




app.listen(4000, ()=>{console.log("Funcionando na porta 4000")})