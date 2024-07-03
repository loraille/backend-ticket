const mongoose = require('mongoose');

const bookingsSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: String,
    price: Number,

});

const Booking = mongoose.model('bookings', bookingsSchema);

module.exports = Booking;