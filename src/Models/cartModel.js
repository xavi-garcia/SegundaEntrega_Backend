const mongoose = require('mongoose');

const cartCollection = 'Cart';

const cartSchema = new mongoose.Schema({
	timestamp:{type: Date, default: Date.now()},
	products: { type: Array, required: true},
});

const cartService = mongoose.model(cartCollection, cartSchema);

module.exports = cartService;