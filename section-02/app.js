const path = require('path');

const express = require('express');
const bodyParser = require('body-parser'); //npm install --save body-parser
const app = express(); 

app.set('view engine', 'pug');
app.set('views', 'views'); // file path to templates

const rootDir = require('./util/path.js');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(3000);