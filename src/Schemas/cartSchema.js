const mongoose = require('mongoose');

const cartCollection = 'Cart'

const cartSchema = new mongoose.Schema({
	timestamp:{type: moment, default: moment().format('MMMM Do YYYY, h:mm:ss a')},
	products: { type: Array, required: true},
});

const cartService = mongoose.model(cartCollection, cartSchema);

module.exports = cartService;