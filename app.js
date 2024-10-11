console.log("starting...");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload = require('express-fileupload');

var userRouter = require('./routes/user');
var adminRouter = require('./routes/admin');
var { engine } = require('express-handlebars');

var app = express();
var db = require('./config/connection');

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layout/',
    partialsDir: __dirname + '/views/partials'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

// Connect to the database
db.connect((err) => {
    if (err) {
        console.log("Connection Error: " + err);
    } else {
        console.log("Database Connected to port 27017");

        // Move the router initialization and server start here
        app.use('/', userRouter);
        app.use('/admin', adminRouter);
        console.log("after routers");

        // Start the server after successful DB connection
        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    }
});
