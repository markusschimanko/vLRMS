// load the required modules
var express = require('express');
var app = express();

// set the view engine to ejs
app.use(express.static('public'))
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('Server running: 8080 is the magic port');