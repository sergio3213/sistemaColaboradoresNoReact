const express = require("express");
const controllerCadastraUsuarios = require("../controllers/controllerCadastraUsuario.js");
const middlewareLoginMaster = require("../middlewareLogin/middlewareLoginMaster.js")
const routerPost = express.Router();

const controllerCadastrarColaborador = require("../controllers/controllerCadastrarColaborador.js");

const multer = require("multer"); 

const upload = multer({ dest: './' });


routerPost.post("/cadastrarUsuario",middlewareLoginMaster, controllerCadastraUsuarios);
routerPost.post("/cadastrarColaborador", upload.single('imagem'), middlewareLoginMaster, controllerCadastrarColaborador);
module.exports = routerPost