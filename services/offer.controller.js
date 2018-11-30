var mongoose = require('mongoose')

exports.offerCreate = function (req, res) {
  let offer = new Offer(
    {
      id: req.body.id,
      ProductId: req.body.productId,
      SuperId: req.body.superId,
      OfferType: req.body.offerType,
      OfferInput: req.body.offerInput,
      EndDate: req.body.endDate
    }
  );

  offer.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Offer Created Successfully')
  })
};

exports.offerDetails = function (req, res) {
  Offer.findById(req.params.id, function (err, offer) {
    if (err) return next(err);
    res.send(offer);
  })
};

exports.offerUpdate = function (req, res) {
  Offer.findByIdAndUpdate(req.params.id, { $set: req.body },
    function (err, offer) {
      if (err) return next(err);
      res.send('Offer Updated Successfully');
    });
};
