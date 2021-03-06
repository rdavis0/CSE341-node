const path = require('path');

const express = require('express');
const bodyParser = require('body-parser'); //npm install --save body-parser
const expressHbs = require('express-handlebars');

const app = express(); 

// For Handlebars
// app.engine(
//     'hbs', 
//     expressHbs({
//         layoutsDir: 'views/layouts/', 
//         defaultLayout: 'main-layout',
//         extname: 'hbs'
//     })
// );

app.set('view engine', 'ejs');
app.set('views', 'views'); // file path to templates

const rootDir = require('./util/path.js');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);