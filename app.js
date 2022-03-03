const express = require ("express")
const app = express()
const path = require ("path")

app.listen (3000, () => {
    console.log ("servidor corriendo en el puerto 3000")
})

app.get ("/", (req,res) => {
    res.sendFile(path.resolve("./views/index.html"))
})