const express = require("express");
const routerGet = express.Router();

const controllerLogin = require("../controllers/controllerLogin.js");
const controllerPesquisaColaboradorPorNome = require("../controllers/controllerPesquisaColaboradorPorNome.js")

routerGet.get("/login", controllerLogin);
routerGet.get("/colaboradoresPorNome", controllerPesquisaColaboradorPorNome);


module.exports = routerGet