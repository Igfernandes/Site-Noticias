const http = require('express');
const csg = require("consign");
const bdps = require('body-parser');
const vdt = require('express-validator')

const app = http();


app.set('view engine', 'ejs');
app.set('views', './inc/views');


app.use(http.static("./assets"));

app.use(bdps.urlencoded({extended: true}));
app.use(vdt());

csg()
    .include('inc/rout')
    .then('data/connect.js')
    .then('data/models')
    .then('data/controllers')
    .into(app);


module.exports = app;