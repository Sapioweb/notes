var express = require('express')
var engine = require('ejs-blocks')
var bugsnag = require('bugsnag')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var dotenv = require('dotenv')

var app = express()

// Load .env
dotenv.load();

// Inject routes
var routes = require('./app/routes/routes')

// Create bugsnag instance
bugsnag.register(process.env.BUGSNAG_API_KEY)
app.use(bugsnag.requestHandler)
app.use(bugsnag.errorHandler)

// Connect to mongodb instance
mongoose.connect('mongodb://' + process.env.DATABASE_USER + ':' + process.env.DATABASE_PASSWORD + '@' + process.env.DATABASE_HOST);

// Parse request body to recieve ajax data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views',__dirname + '/views')

// set the view engine to ejs
app.engine('ejs', engine)
app.set('view engine', 'ejs')

// public folder to store assets
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/node_modules'))

// routes for app
app.use('/', routes)

// listen on port 3000
app.listen(3000)
