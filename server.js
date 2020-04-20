'use strict'


//requires
const express = require('express');
var bodyParser = require('body-parser');

//ejecutar express
const app = express();

//cargar archivos de rutas

var user_routes = require('./routes/user');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//Reescribir rutas

app.use('/api', user_routes);
//Exportar modulo
module.exports = app;