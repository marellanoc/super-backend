var mongoose = require('mongoose')
var Schema = mongoose.Schema

var supermarketShema = new Schema({
  name: String,
  address: String,
  logo: String,
});

module.exports = mongoose.model('Supermarket', supermarketShema);
