var express = require('express');
var router = express.Router();

const Trip = require('../modeles/trips')

router.get('/test', (req, res) => {
  Trip.find().then(
    data => res.json({infos : data})
  );
});

module.exports = router;
