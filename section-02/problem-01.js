const express = require('express');

const app = express(); 

app.use('/users', (req, res, next) => {
    console.log("In users middleware");
    res.send('<h1>Hello User</h1>');
});

app.use('/', (req, res, next) => {
    console.log("This is the / middleware");
    res.send('<h1>I\'m the default!</h1>');
});

app.listen(3000);