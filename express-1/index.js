// const { isUtf8 } = require('buffer')
// const fs = require('fs')
const express = require('express') // import
const server = express() //sever ko call kiya express mai just


server.get('/',(req,res)=>{
    res.send("<h1>Hello from Express</h1>")
    //res.json() for json data
    // res.sendStatus(404)
})






server.listen(8080,()=>{
    console.log("Server started on port 8080")
}) // on port it listen
