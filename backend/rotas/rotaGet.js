const express = require("express");
const routerGet = express.Router();

const controllerLogin = require("../controllers/controllerLogin.js");
const controllerPesquisaColaboradorPorNome = require("../controllers/controllerPesquisaColaboradorPorNome.js")
const controllerPesquisaColaboradorPorRg = require("../controllers/pesquisaColaboradorPorRg.js")
const controllerPesquisaColaboradorPorCpf = require("../controllers/controllerPesquisaColaboradorPorCpf.js")
const controllerPesquisaUsuarioPorUsuario = require("../controllers/controllerPesquisaUsuarioPorUsuario.js")
const middlewareLoginComumQuery = require("../middlewareLogin/middlewareLoginComumQuery.js")
const middlewareLoginMasterQuery = require('../middlewareLogin/middlewareLoginMasterQuery.js')
routerGet.get("/login", controllerLogin);
routerGet.get("/colaboradoresPorNome", middlewareLoginComumQuery, controllerPesquisaColaboradorPorNome);
routerGet.get("/colaboradoresPorRg",middlewareLoginComumQuery,controllerPesquisaColaboradorPorRg)
routerGet.get("/colaboradoresPorCpf",middlewareLoginComumQuery,controllerPesquisaColaboradorPorCpf)

routerGet.get("/buscarUsuarioPorUsuario",middlewareLoginMasterQuery,controllerPesquisaUsuarioPorUsuario)


module.exports = routerGet