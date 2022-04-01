const { add } = require("momento");
const mongoose = require("mongoose");
const mongooseConnection = require('../config.js');
const productModel = require('../Models/productModel.js');



class ProductServiceMongo {
    getAll = async () => {
        let products = await productModel.find();
        if (products) return { status: "success", payload: products };
        return { status: "error", message: "error" };
    };
    
      getById = async (id) => {
        let product = await productModel.findById(id);
        if (product) return { status: "success", payload: product };
        else return { status: "error", error: "Couldn't find product" };
    };
    
      add = async (product) => {
        let newProduct = await productModel.create(product);
        return {status: "success", payload: newProduct._id};
    };
    
      updateById = async (id, product) => {
        let updatedProduct = await productModel.findByIdAndUpdate(id, product);
        return {status: "success", payload: updatedProduct._id};
    };
    
      deleteProduct = async (id) => {
        let deletedProduct = await productService.findByIdAndDelete(id);
        return { status: "success", payload: deletedProduct };
    };
}

  
module.exports = ProductServiceMongo;