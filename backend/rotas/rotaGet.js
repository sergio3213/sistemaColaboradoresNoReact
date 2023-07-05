const express = require("express");
const routerGet = express.Router();

const controllerLogin = require("../controllers/controllerLogin.js");
const controllerPesquisaColaboradorPorNome = require("../controllers/controllerPesquisaColaboradorPorNome.js")
const controllerPesquisaColaboradorPorRg = require("../controllers/pesquisaColaboradorPorRg.js")
routerGet.get("/login", controllerLogin);
routerGet.get("/colaboradoresPorNome", controllerPesquisaColaboradorPorNome);
routerGet.get("/colaboradoresPorRg",controllerPesquisaColaboradorPorRg)

module.exports = routerGet