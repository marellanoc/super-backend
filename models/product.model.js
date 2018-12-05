var mongoose = require('mongoose')
var Schema = mongoose.Schema


var productShema = new Schema({
  serial: Number,
  name: String,
  brand: String,
  price: [{
    supermarketName: String,
    value: Number,
    history: [{
      value: Number,
      offer: {
        active: Boolean,
        type: String,
        quantity: Number
      },
      date: Date
    }]
  }],
  score: { avgStars: Number, stars: [] },
  picture: String
});

module.exports = mongoose.model('Product', productShema, 'products');


/*

{
  "serial": 123,
  "name": "String",
  "brand": "String",
  "price": [{
    "supermarketName": "String",
    "value": 123,
    "history": [{
      "value": 123,
      "offer": {
        "active": 1,
        "type": "String",
        "quantity": 123
      },
      "date": 1/1/2001,
    }],
  }],
  "score": { "avgStars": 123, "stars": [] },
  "picture": "String"
}

*/
