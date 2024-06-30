const express = require('express')
const server = express() 
//middleware server.use 

//next() se middleware forward krega request ko server pr

// type of middleware :-
//Application-level middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware

//neche wala application level middleware hai
server.use((req,res,next)=>{
 console.log(req.get('User-Agent'),req.ip, req.hostname)
 next()
})

const auth = (req, res ,next)=>{
    if(req.query.password == '1234'){
        next()
    }
    else{
     res.sendStatus(401)
    }
    
}

//type of endpoint in API
server.get('/', auth ,(req,res)=>{
    //uppar route middlware use kiya hai get pr
   res.json({type:"GET"})

})
server.put('/',(req,res)=>{
    res.json({type:"PUT"})
 
 })
 server.post('/',(req,res)=>{
    res.json({type:"POST"})
 
 })
 server.delete('/',(req,res)=>{
    res.json({type:"DELETE"})
 
 })
 server.patch('/',(req,res)=>{
    res.json({type:"PATCH"})
 
 })






server.listen(8080,()=>{
    console.log("http://localhost:8080")
}) 