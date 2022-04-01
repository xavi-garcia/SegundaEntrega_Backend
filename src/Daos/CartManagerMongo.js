const mongoose = require("mongoose");
const mongooseConnection = require('../config.js');
const cartModel = require('../Models/cartModel.js');



class CartServiceMongo {
    createCart = async (cart) => {
      try {
        let newCart = await cartModel.create(cart);
        return { status: "success", payload: newCart._id};
      } catch (error) {
        return { status: "error", message: error};
      }
    };
  
    getCartById = async (id) => {
      let cart = await cartModel.findById(id);
      if (cart) return { status: "success", payload: cart };
      else return { status: "error", error: "Null" };
    };

    deleteCartById = async (id) => {
        if (!id) return { status: "error", error: "incorrect id" };
        let deletedCart = await cartModel.findByIdAndDelete(id);
        return { status: "success", payload: deletedCart};
    };
  
    addProduct = async (id, product) => {
      let cart = await cartModel.findById(id);
      if (cart) {
        cart.product.push(product);
        await cart.save();
        return { status: "success", message: "Product added" };
      } else return { status: "error", error: "Couldn't add product" };
    };
  
    deleteProductById = async (id, productId) => {
      let cart = await cartModel.findById(id);
      if (cart) {
        cart.product.splice(cart.product.indexOf(productId), 1);
        await cart.save();
        return { status: "success", message: "Product deleted" };
      } else return { status: "error", error: "Couldn't delete product" };
    };
  }
  
  module.exports = CartServiceMongo;