var Product = require('../models/product.model');

//GET - Show product details
exports.getProduct = function (req, res, next) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return next(err);
    res.send(product);
  })
}

//POST - Create a product
exports.addProduct = function (req, res, next) {
  var product = new Product(req.body);
  console.log(req.body)
  product.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Product Created successfully')
  })
};

//PUT - Update a product
exports.updateProduct = function (req, res, next) {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
    if (err) return next(err);
    res.send('Product udpated.');
  });
}

//DELETE - Delete a product
exports.deleteProduct = function (req, res, next) {
  Product.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
};
