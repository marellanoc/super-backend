var mongoose = require('mongoose')

//GET - Show product id
exports.getProduct = function (req, res) {
  //'find' is an abstraction of 'find' method from mongodb
  const query = Product.findById(req.params.productId).exec()
  query.then((resource) => {

    if (!resource) {
      return next(errors.RESOURCE_NOT_FOUND())
    }

    return res.json(resource)
  })
    .catch((err) => {
      // send the error to the error handler
      return next(err)
    })
}

//PUT - Update product
exports.updateProduct = function (req, res) {
  productId = req.params.productId;
  name = req.params.name;
  brand = req.params.brand;
  barcode = req.params.barcode;
  picture = req.params.picture;
  res.json({ message: 'Updated product', ProductId: productId });
}
//POST - Add Product
exports.addProduct = function (req, res) {
  name = req.params.name;
  brand = req.params.brand;
  barcode = req.params.barcode;
  picture = req.params.picture;
  res.json({ message: 'Created product', ProductId: productId });
}
