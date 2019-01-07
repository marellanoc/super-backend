var Supermarket = require('../models/supermarket.model');

//GET - Show supermarket details retrived by supermarket name
exports.getByName = function (req, res, next) {
  Supermarket.find({ name: req.params.name }, function (err, supermarket) {
    if (err) return next(err);
    res.send(supermarket);
  })
}

//GET - Show supermarket logo retrived by supermarket name
exports.getLogoByName = function (req, res, next) {
    Supermarket.findOne({ name: req.params.name }, function (err, supermarket) {
      if (err) return next(err);
      res.send(supermarket.picture);
    })
  }


//GET - List all supermarket
exports.list = function (req, res, next) {
  Supermarket.find({}, function (err, supermarket) {
    if (err) return next(err);
    res.send(supermarket);
  })
}

//PUT - Update a supermarket
exports.update = function (req, res, next) {
  Supermarket.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, supermarket) {
    if (err) return next(err);
    res.send(`supermarket ${req.body.name} udpated.`);
  });
}