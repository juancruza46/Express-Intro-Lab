// Load express
const express = require('express');
const path = require('path');

//require todo database
const orderDb = require('./data/order-db');

// Create our express app
const app = express();

//configure the app (app.set)
app.set('view engine', 'ejs' );
app.set('views', path.join(__dirname, 'views'));

//Mount middleware (app.use)

//Mount routes


// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.redirect('/orders');
});

app.get('/home', function (req, res) {
  res.render('home');
});

app.get('/orders', function(req, res){
    const orders = orderDb.getAll();
    res.render('orders/index', {orders});
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});