const mongoose = require('mongoose');

const cartsSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: String,
    price: Number,

});

const Cart = mongoose.model('carts', cartsSchema);

module.exports = Cart;