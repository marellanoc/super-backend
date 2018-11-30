/**
 ** We import all the libraries that we'll use
 **/
var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//instance of express framework
var app = express()

//MongoDB database url. In this case, we have a db named 'users'
var url = 'mongodb://diegomartin:SUPER!pass@104.248.219.116:27017/super'

//We use bodyParser to provide fast json parsing of body data of the request
app.use(bodyParser.json())

//If we manage the root behaviour, we should implement this
app.get('/', function (request, response) {
  response.send('Service is up and ready')
})

//Connection to mongodb using mongoose

mongoose.connect(url, { useNewUrlParser: true })

//Here we declarate all models and controllers that our application will use

require('./models/product.model')
require('./models/supermarket.model')
var scoreController = require('./services/score.controller')
var productController = require('./services/product.controller')
var offerController = require('./services/offer.controller')


// var priceController = require('./controller/price.controller')

//Router allow to us to easily match the endpoint with their respective controller
var api = express.Router()

api.route('/score/:productId').get(scoreController.getScore)

api.route('/offer/:id').get(offerController.offerDetails)
api.route('/offer/create').post(offerController.offerCreate)
api.route('/offer/update').put(offerController.offerUpdate)

api.route('/product/update').put(productController.updateProduct)
api.route('/product/:productId').get(productController.getProduct)
api.route('/product/create').post(productController.addProduct)


//After we define our routes, we have to tell to express that we shall use our 'routes', starting over root
app.use('/', api)

//Server will listen over $PORT specified on first parameter
app.listen(3000, function () {
  console.log('Servidor inicializado en puerto 3000')
})
