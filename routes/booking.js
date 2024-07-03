var express = require('express');
var router = express.Router();
const moment = require('moment');
const Booking = require('../modeles/bookings')

router.get('/checkBooking', (req,res)=>{
    Booking.find()
    .then(data => {
        if(data){
            res.json({data})
        }else{
            res.json({error :"Essaie encore"})
        }
    })
})


router.post('/purchase', (req, res) =>{
    const newBooking = new Booking({
        departure: req.body.departure,
        arrival: req.body.arrival,
        date: req.body.date,
        price: req.body.price,
    });
    newBooking.save()
    .then(data => {
        res.json({ data });
    });
})



module.exports = router;