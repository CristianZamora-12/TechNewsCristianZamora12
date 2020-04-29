//Requerir path
const path = require('path');

//Directorio views
const html = path.join(__dirname, '../views/index.html');

//Crear un objeto
const ctrl = {};

ctrl.index = (req, resp) =>{
  resp.sendFile(html);
};

module.exports = ctrl;
