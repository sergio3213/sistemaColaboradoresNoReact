const express = require("express");
const controllerDeletaColaborador = require("../controllers/controllerDeletaColaborador");
const routerDelete = express.Router();

routerDelete.delete("/deletaColaborador", controllerDeletaColaborador);

module.exports = routerDelete