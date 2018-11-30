var mongoose = require('mongoose')

const Price = require('../models/price.model');

exports.priceUpdate = function (req, res) {
  Price.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, price) {
    if (err) return next(err);
    res.send('Price Updated.');
  });
};
