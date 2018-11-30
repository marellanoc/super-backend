var Product = require('../models/product.model');
//GET - Show product id
exports.getScore = function (req, res, next) {

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
