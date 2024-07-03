const mongoose = require('mongoose');

const cartsSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number,
    copyId: String,

});

const Cart = mongoose.model('carts', cartsSchema);

module.exports = Cart;