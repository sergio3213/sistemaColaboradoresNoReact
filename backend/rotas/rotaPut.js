const express = require("express");
const routerPut = express.Router();
const controllerEditaColaboradores = require('../controllers/controllerEditaColaboradores.js')

routerPut.put("/editaColaborador", controllerEditaColaboradores);


module.exports = routerPut