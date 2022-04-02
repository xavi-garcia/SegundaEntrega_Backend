const mongoose = require("mongoose");
const mongooseConnection = require('../config.js');
const ProductModel = require('../Models/productModel.js');



class ProductsManagerMongo {

    save = async () => {
      let product = new ProductModel({name:'Ratata', code:'6878', url:"http://localhost:8080/images/1645737180077.png", price:36, stock:2});
      await product.save();
      console.log(product)
    }

    getAll = async () => {
        let products = await ProductModel.find();
        if (products) return { status: "success", payload: products };
        console.log(products)
        return { status: "error", message: "error" };
    };
    
      getById = async (id) => {
        let product = await ProductModel.findById(id);
        if (product) return { status: "success", payload: product };
        else return { status: "error", error: "Couldn't find product" };
    };
    
      add = async (product) => {
        let newProduct = await ProductModel.create(product);
        return {status: "success", payload: newProduct._id};
    };
    
      updateById = async (id, product) => {
        let updatedProduct = await ProductModel.findByIdAndUpdate(id, product);
        return {status: "success", payload: updatedProduct._id};
    };
    
      deleteProduct = async (id) => {
        let deletedProduct = await ProductModel.findByIdAndDelete(id);
        return { status: "success", payload: deletedProduct };
    };

   
}

// const product = new productModel({
//   name:'Evee',
//   code:'5478',
//   url:"http://localhost:8080/images/1645737180077.png",
//   price:56,
//   stock:5,
// })

// product.save((err, document)=>{
//   if(err) console.log(err),
//   console.log(document)
// })


module.exports = ProductsManagerMongo;