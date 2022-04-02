const ProductsManagerMongo = require("./ProductsManagerMongo");
const CartManagerMongo = require("./CartManagerMongo");

const ProductsManager = require("./ProductsManager");
const CartManager = require("./CartManager");

const fs = require("fs");

const DB = "mongo";

let productDAO;
let cartDAO;

switch (DB) {
  case "mongo":
    productDAO = new ProductsManagerMongo();
    cartDAO = new CartManagerMongo();
    break;
  case "fs":
    productDAO = new ProductsManager();
    cartDAO = new CartManager();
    break;
  default:
    break;
}

module.exports = { productDAO, cartDAO };


productDAO.getById()