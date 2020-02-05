const express = require('express');
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.json(cars);
    }) 
    .catch(err => {
        res.status(500).json({
            Message: 'No record found'
        })
    })
});

router.post('/add', (req, res) => {
    const carData = req.body;
    db('cars').insert(carData)
      .then(ids => {
        db('cars').where({ id: ids[0] })
          .then(newCarEntry => {
            res.status(201).json({
                Message: 'Successfully added', newCarEntry});
          });
      })
      .catch(err => {
        console.log('POST error', err);
        res.status(500).json({ message: "Failed to store data" });
      });
  });
  
module.exports = router;

