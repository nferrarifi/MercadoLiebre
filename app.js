const express = require ("express")
const app = express()
const path = require ("path")

const PORT = process.env.PORT || 3000;

app.use(express.static("public"))

app.listen (3000, () => {
    console.log ("servidor corriendo en el puerto 3000")

})



app.get ("/", (req,res) => {
    res.sendFile(path.resolve("./views/index.html"))
})

app.get ("/register", (req,res) => {
    res.sendFile(path.resolve("./views/register.html"))
})

app.get ("/login", (req,res) => {
    res.sendFile(path.resolve("./views/login.html"))
})