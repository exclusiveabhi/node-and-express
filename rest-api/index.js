const express = require('express')
const fs = require('fs') 
const server = express() 

//yaha data ko fs se read kiya dummyData.json ko is se JSON.parse fs.readFileSync
const jsonData = JSON.parse(fs.readFileSync('dummyData.json', 'utf-8'));
const products = jsonData.products;  



server.get('/products',(req,res)=>{
   
   res.json(products) //for display all products

})

//Create Api or / Post Api
server.post('/',(req,res)=>{
    products.push(req.body);
    res.status(201).json(req.body)
 
 })


//id vary sakta hai fixed nhi hai /Filter READ !
server.get('/products/:id',(req,res)=>{
const id = +req.params.id; //+ for converting string to number or req.params.id id url se milegi
const product = products.find(p=>p.id===id) // products ki products.id===json data ki id
    res.json(product) //for single specify products
 
 })


 

 //Update PUT API on particular id
 server.put('/products/:id',(req,res)=>{
    const id = +req.params.id; 
    const productIndex = products.findIndex(p=>p.id===id) 
    products.splice(productIndex,1,{...req.body, id:id})
    res.json(productIndex)
     
     })
     //PATCH is update type only update the sended things and rest thing as it is
     server.patch('/products/:id',(req,res)=>{
        const id = +req.params.id; 
        const productIndex = products.findIndex(p=>p.id===id) 
        const product = products[productIndex]
        products.splice(productIndex,1,{...product,...req.body, id:id})  // spread operator ...product,...req.body
        //product is old array and req.body is new array used to over write the old array with new data
        res.json(productIndex)
         
         })


    // DELETE
 server.delete('/products/:id',(req,res)=>{
    const id = +req.params.id; //url se id mil gyi
    const productIndex = products.findIndex(p=>p.id===id) // us id se data find kr liya 
    products.splice(productIndex,1) //usko delete kr diya!
    const product = products[productIndex] //index se deleted product nikal liya or usko response mai send kr diya
    res.json(product)
     
     })







server.listen(8080,()=>{
    console.log("http://localhost:8080")
}) 