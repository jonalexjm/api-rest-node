'use strict'


//requires
const express = require('express');
var bodyParser = require('body-parser');

//ejecutar express
const app = express();

//cargar archivos de rutas

//Middlewares
app.use(bodyParser.urlencoded({bodyParser:false}));
app.use(bodyParser.json());

//CORS

//Reescribir rutas

/* app.get('/prueba ', (req, res) =>  {
    return res.status(200).send({
        nombre : 'john alexander jimenez',
        message : 'hola mundo desde backend con Node'
    });
  }); */

  app.get('/prueba',(req, res) => {

    res.status(200).send({
        nombre : 'john alexander jimenez',
        message : 'hola mundo desde backend con Node'
    });
  });




//Exportar modulo
module.exports = app;