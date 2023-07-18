const express = require("express");
const controllerDeletaColaborador = require("../controllers/controllerDeletaColaborador");
const routerDelete = express.Router();
const middlewareLoginMasterQuery = require("../middlewareLogin/middlewareLoginMasterQuery")
const controllerDeletaUsuario = require("../controllers/controllerDeletaUsuario.js")
routerDelete.delete("/deletaColaborador",middlewareLoginMasterQuery, controllerDeletaColaborador);
routerDelete.delete("/deletaUsuario",middlewareLoginMasterQuery,controllerDeletaUsuario)

module.exports = routerDelete