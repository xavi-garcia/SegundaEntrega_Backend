const mongoose = require('mongoose');
const moment = require('moment')

const productCollection = 'Products';

const productSchema = new mongoose.Schema({
        name:{type: String, required: true},
        code:{type: String, required: true},
        url:{type: String, required: true},
        price:{type: Number, required: true},
        stock:{type: Number, required: true},
        timestamp:{type: moment, default: moment().format('MMMM Do YYYY, h:mm:ss a')},
        id:{type: Number, required: true},
});

const productService = mongoose.model(productCollection, productSchema);

module.exports = productService;