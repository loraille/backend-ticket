var express = require('express');
var router = express.Router();
const moment = require('moment');
const Cart = require('../modeles/carts')

router.get('/checkCart', (req,res) =>{
    Cart.find()
    .then(data => res.json({data}))
})


router.post('/cartTrip', (req, res) =>{
        const newCart = new Cart({
            departure: req.body.departure,
            arrival: req.body.arrival,
            date: req.body.date,
            price: req.body.price,
        });
        newCart.save()
        .then(data => {
            res.json({ data });
        });
});



router.delete("/:departure/:arrival/:date/:price", (req, res) => {
    Cart.deleteOne({ 
        departure: req.params.departure, 
        arrival: req.params.arrival, 
        date: req.params.date, 
        price: req.params.price
    })
        .then(data =>{ 
            if (data) {
                res.json({ message: "yes" })
                // Cart.find().then(data => {
                // res.json({data : data,  message: 'Supprimer' }); 
                // })
            } else {
                res.json({ error: "Try again" });
            }
        })

});



module.exports = router;
