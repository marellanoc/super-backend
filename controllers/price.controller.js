var Product = require('../models/product.model');

exports.priceUpdate = function (req, res) {
  Price.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, price) {
    if (err) return next(err);
    res.send('Price Updated.');
  });
};
