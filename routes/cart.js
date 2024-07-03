var express = require('express');
var router = express.Router();
const moment = require('moment');
const Cart = require('../modeles/carts')

// router.get('/checkCart', (req,res) =>{
//     Cart.findOne({ departure: req.body.dipar })

// })



// router.post('/cartTrip', (req, res) =>{

//     cart.findOne({ idCopy: id })
//     .then((data) => {//on regarde dans cart su l'id n'existe deja pas
//         if (!data) {
//             trip.findById(id).then((data) => {
//                 const newcart = new cart({
//                     departure: data.departure,
//                     arrival: data.arrival,
//                     date: data.date,
//                     price: data.price,
//                     idCopy: data.id,
//                 });
//                 newcart.save()
//                 .then(() => {
//                 cart.find().then(data => {
//                 console.log(data);
//                     });
//                 });
//             })
//         }
//     })
// })


module.exports = router;