var Product = require('../models/product.model');

//GET - Show product details retrived by barcode serial
exports.getBySerial = function (req, res, next) {
  Product.find({ serial: req.params.serial }, function (err, product) {
    if (err) return next(err);
    res.send(product);
  })
}

//GET - Show product details retrived by product name req.params.name
exports.getByName = function (req, res, next) {
  Product.find({ name: "/"+"Cachantun"+"/"}, function (err, product) {
    if (err) return next(err);
    res.send(product);
  })
}

//GET - List all products
exports.list = function (req, res, next) {
  Product.find({}, function (err, product) {
    if (err) return next(err);
    res.send(product);
  })
}

//POST - Create a product
exports.add = function (req, res, next) {
  var product = new Product(req.body);
  console.log(req.body)
  product.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send(`Product ${req.body.name} Created successfully`)
  })
};

//PUT - Update a product
exports.update = function (req, res, next) {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
    if (err) return next(err);
    res.send(`Product ${req.body.name} udpated.`);
  });
}

//DELETE - Delete a product
exports.delete = function (req, res, next) {
  Product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send(`Product ${req.body.name} deleted successfully!`);
  })
};
