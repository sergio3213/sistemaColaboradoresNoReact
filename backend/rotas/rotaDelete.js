const express = require("express");
const controllerDeletaColaborador = require("../controllers/controllerDeletaColaborador");
const routerDelete = express.Router();
const middlewareLoginMasterQuery = require("../middlewareLogin/middlewareLoginMasterQuery")
routerDelete.delete("/deletaColaborador",middlewareLoginMasterQuery, controllerDeletaColaborador);

module.exports = routerDelete