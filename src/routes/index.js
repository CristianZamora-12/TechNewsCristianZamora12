//Requerir Express
const express = require('express');

//Requerir router del modulo Express
const routes = express.Router();

//Requerir los controllers
const home = require('../controllers/home');

module.exports = app => {
  //Conseguir la raiz
  routes.get('/', home.index);

  //Utilizar los Routes
  app.use(routes);
};
