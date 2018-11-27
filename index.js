import path from 'path'
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const PORT = process.env.NODE_ENV || 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
var engine = require('ejs-locals');
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use((req, res, next) => {
    res.locals.sharee = {
        url: req.originalUrl
    }
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

    next();
});


app.use(function (req, res, next) {
    res.locals.shareall = {
        url: req.originalUrl
    }
    next();
})

app.use('/admin', function (req, res, next) {
    res.locals.shareall = {
        mdun: 'admin'
    }
    next();
})
import adminRouter from './routers/admin'
app.use('/admin', adminRouter);
import masterRouter from './routers/master'
app.use('/master', function (req, res, next) {
    res.locals.shareall = {
        mdun: 'master'
    }
    next();
})
app.use('/master', masterRouter);

import indexRouter from './routers/index'
app.use('/', indexRouter);

app.listen(PORT, (err) => {
    if(err) 
        return console.log(err);
    console.log('Server listening on: ' + PORT);
})
