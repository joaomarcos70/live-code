const express = require('express')

const app = express()


app.use(express.json())

const port = 3000

app.listen(port, ()=>{
    console.log("servidor rodando na porta :", port);   
})

module.exports = app