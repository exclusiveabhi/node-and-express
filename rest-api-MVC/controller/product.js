const fs = require("fs");
const jsonData = JSON.parse(fs.readFileSync("dummyData.json", "utf-8"));
const products = jsonData.products; //products name ka array ka dummyData.json mai!



//to get all products data
exports.allProducts = (req, res) => {
  res.json(products);
};
//Create Api or / Post Api
exports.createProduct = (req, res) => {
  products.push(req.body);
  res.status(201).json(req.body);
};
//id vary sakta hai fixed nhi hai /Filter READ !
exports.getProducts = (req, res) => {
  const id = +req.params.id; //+ for converting string to number or req.params.id id url se milegi
  const product = products.find((p) => p.id === id); // products ki products.id===json data ki id
  res.json(product); //for single specify products
};
//Update PUT API on particular id
exports.putProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.json(productIndex);
};

//PATCH is update type only update the sended things and rest thing as it is
exports.patchProduct = (req, res) => {
  const id = +req.params.id; //id li
  const productIndex = products.findIndex((p) => p.id === id); //find kiya
  const product = products[productIndex]; // purana array kiya
  products.splice(productIndex, 1, { ...product, ...req.body, id: id }); // spread operator ...product,...req.body
  //product is old array and req.body is new array used to over write the old array with new data
  res.json(productIndex);
};
// DELETE
exports.deleteProduct = (req, res) => {
  const id = +req.params.id; //url se id mil gyi
  const productIndex = products.findIndex((p) => p.id === id); // us id se data find kr liya
  products.splice(productIndex, 1); //usko delete kr diya!
  const product = products[productIndex]; //index se deleted product nikal liya or usko response mai send kr diya
  res.json(product);
};
