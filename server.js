// используем библиотеку express
const express = require('express');
const bodyParser = require('body-parser');
// создаем объект express
const app = express();
// говорим, что мы раздаем папку public
app.use(bodyParser.urlencoded({ extended: true }));
require('./app/routes')(app);
app.use(express.static('public'));
// говорим, что запускаемся на порту 80
app.listen(80);
console.log("Server started at 80");