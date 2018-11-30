var mongoose = require('mongoose')
var Schema = mongoose.Schema


var productShema = new Schema({
  serial: Number,
  name: String,
  brand: String,
  price: [{
    supermarket: String,
    value: Number,
    history: [{
      value: Number,
      offer: {
        active: Boolean,
        type: String,
        quantity: Number
      },
      date: Date,
    }],
  }],
  score: { avgStars: Number, stars: [] },
  picture: String
});

module.exports = mongoose.model('Product', productShema);
