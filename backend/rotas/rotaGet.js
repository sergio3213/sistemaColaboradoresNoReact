const express = require("express");
const routerGet = express.Router();

const controllerLogin = require("../controllers/controllerLogin.js");
const controllerPesquisaColaboradorPorNome = require("../controllers/controllerPesquisaColaboradorPorNome.js")
const controllerPesquisaColaboradorPorRg = require("../controllers/pesquisaColaboradorPorRg.js")
const controllerPesquisaColaboradorPorCpf = require("../controllers/controllerPesquisaColaboradorPorCpf.js")
routerGet.get("/login", controllerLogin);
routerGet.get("/colaboradoresPorNome", controllerPesquisaColaboradorPorNome);
routerGet.get("/colaboradoresPorRg",controllerPesquisaColaboradorPorRg)
routerGet.get("/colaboradoresPorCpf",controllerPesquisaColaboradorPorCpf)

module.exports = routerGet