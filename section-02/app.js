const express = require('express');
const bodyParser = require('body-parser'); //npm install --save body-parser

const app = express(); 

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    console.log("In another middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</form>');
});

app.post('/product', (req, res, next) => { //app.post only fires for POST requests
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log("In another middleware");
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);