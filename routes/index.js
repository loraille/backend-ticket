var express = require('express');
var router = express.Router();
const moment = require('moment');
const Trip = require('../modeles/trips')


router.post('/searchTrip', (req, res) => {
  const { departure, arrival, date } = req.body;

   Trip.find({
     departure: departure,
     arrival: arrival,
     date: {
       $gte: moment(date).startOf('day'),
       $lte: moment(date).endOf('day')
     }
  }).then(trips => 
    res.json({ trips }));
  })

module.exports = router;
