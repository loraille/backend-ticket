var express = require('express');
const Trip = require('../modeles/trips')
var router = express.Router();
const moment = require('moment');


// router.post('/searchTrip', (req, res) => {
//   const { departure, arrival, date } = req.body;
//   const utcDate = moment.utc(date).toISOString();

//    Trip.find({
//      departure: departure,
//      arrival: arrival,
//      date: {
//        $gte: moment(utcDate).toDate(),
//        $lt: moment(utcDate).add(1, 'days').toDate() 
//      }
//   }).then(trips => 
//     res.json({ trips: trips }));
//   })

  router.get('/searchTrip', (req, res) => {
    const searchDate = new Date(req.params.date); 
    const startDate = new Date(searchDate.getFullYear(), searchDate.getMonth(), searchDate.getDate());
    const endDate = new Date(searchDate.getFullYear(), searchDate.getMonth(), searchDate.getDate() + 1);
    const departure = req.params.departure;
    const arrival = req.params.arrival

     Trip.find( { date: { $gte: startDate, $lt: endDate }, departure: departure, arrival: arrival})
     .then(trips => 
      res.json({ trips: trips }));
    })


    // const test = "2024-07-02T09:52:43.005Z"
    // let test2 = new Date (test).getFullYear().
     // Recherche de documents en utilisant seulement la date
  

 /* pour tableau
   let departure = new Date(infos.departure);
   let arrival = new Date(infos.arrival);
   for (let time of data) {
    const hour = new Date(time).getHours()
    const minutes = new Date(time).getMinutes();

    const dateObject = new Date(dateString);
     Trip.find({date: {
    $gte: new Date('2023-01-01'),
    $lt: new Date('2023-02-01')
    })
 */

    /* const dateString = req.body.date; 
  const dateObject = new Date(dateString);
  Trip.find({ date: dateObject}
    ).then(
    data => res.json({infos : data})
  );*/












module.exports = router;
