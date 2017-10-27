var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    passport = require('passport'),
    flash    = require('connect-flash'),
    morgan       = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser'),
    session      = require('express-session');


    User = require('./api/models/userModel'); //created model loading here


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/book-users');

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

// required for passport
app.use(session({ secret: 'booktrading' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use('/assets', express.static('assets'));

require('./api/routes/routes.js')(app, passport);
require('./config/passport')(passport); // pass passport for configuration

var routes = require('./api/routes/userRoutes'); //importing route
routes(app); //register the route



app.listen(port);

// app.use(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// });

console.log('API started on: ' + port);


