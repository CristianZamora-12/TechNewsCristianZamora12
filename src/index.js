//Requerir Express
const express = require('express');

//Requerir http
const http = require('http');

//Requerir config.js
const config = require('./server/config');

//Asignarle a app las funciones de Express
const app = config(express());

//Starting Server
app.listen(app.get('Port'), () => {
  console.log("Server on port", app.get('Port'));
});
