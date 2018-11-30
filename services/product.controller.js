var mongoose = require('mongoose')

//GET - Show product id
exports.getProduct = function (req, res) {
  //'find' is an abstraction of 'find' method from mongodb
  id = req.params.productId;
  res.json({
    name: 'Galletas de Mantequilla',
    productId: id,
    brand: 'Costa',
    barcode: 7802215505294,
    picture: 'idPicture'
  });
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
