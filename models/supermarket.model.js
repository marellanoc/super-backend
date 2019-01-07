var mongoose = require('mongoose')
var Schema = mongoose.Schema

var supermarketShema = new Schema({
  name: String,
  picture: String,
  branches: [{
    address: String,
    location: String,
  }]
});

module.exports = mongoose.model('Supermarket', supermarketShema);
