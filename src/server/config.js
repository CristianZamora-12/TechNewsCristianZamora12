//Requerir Express
const express = require('express');

//Requerir Path
const path = require('path');

//Requerir Routes
const routes = require('../routes/index');

//Exportar la función app
module.exports= app =>{
  //Setting Server
  app.set('Views', path.join(__dirname, '../views'));

  //Setting Port
  app.set('Port', process.env.PORT || 4040);

  //Routes
  routes(app);

  //Static File
  app.use('/public', express.static(path.join(__dirname, '../public')));

  return app;

};
