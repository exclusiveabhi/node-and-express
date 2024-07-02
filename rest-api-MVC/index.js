//Code same as rest-api but in function form in structure way!
//In MVC Model View Controller
const express = require("express");
//router bna diya server ki jagha use krenge!
const router = express.Router()
const server = express();
const productController  = require('./controller/product')
server.use('/api', router) // /api path or add kr diya middlware lga kr router pr hence link is http://localhost:8080/api/products/2



router
.post("/", productController.createProduct)

.get("/products/:id", productController.getProducts)

.put("/products/:id", productController.putProduct)
 
.patch("/products/:id", productController.patchProduct)

.delete("/products/:id", productController.deleteProduct)



//server kiss port pr chalega yaha define hai!
server.listen(8080, () => {
  console.log("http://localhost:8080");
});
