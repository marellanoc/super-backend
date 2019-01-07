/**
 ** We import all the libraries that we'll use
 **/
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//instance of express framework
var app = express()

//MongoDB database url. In this case, we have a db named 'users'
var url = 'mongodb://diegomartin:SUPER!pass@104.248.219.116:27017/super'

//We use bodyParser to provide fast json parsing of body data of the request
app.use(bodyParser.json())
app.use(cors())

//If we manage the root behaviour, we should implement this
app.get('/', function (request, response) {
  response.send('Service is up and ready')
})

//Connection to mongodb using mongoose

mongoose.connect(url, { useNewUrlParser: true })

//Here we declarate all models and controllers that our application will use

require('./models/product.model')
require('./models/supermarket.model')
var productController = require('./controllers/product.controller')
var supermarketController = require('./controllers/supermarket.controller')


// var priceController = require('./controller/price.controller')

//Router allow to us to easily match the endpoint with their respective controller
var api = express.Router()

//Product API
api.route('/product/serial/:serial').get(productController.getBySerial)
api.route('/product/name/:name').get(productController.getByName)
api.route('/product/').get(productController.list)
api.route('/product/').post(productController.add)
api.route('/product/:id').put(productController.update)
api.route('/product/add-price/:id').put(productController.addPrice)
api.route('/product/:id').delete(productController.delete)

//Supermarket API
api.route('/supermarket/name/:name').get(supermarketController.getByName)
api.route('/supermarket/logo/:name').get(supermarketController.getLogoByName)
api.route('/supermarket/').get(supermarketController.list)

//After we define our routes, we have to tell to express that we shall use our 'routes', starting over root
app.use('/', api)

//Server will listen over $PORT specified on first parameter
app.listen(3000, function () {
  console.log('Servidor inicializado en puerto 3000')
})
