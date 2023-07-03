const express = require("express");
const controllerCadastraUsuarios = require("../controllers/controllerCadastraUsuario.js");
const routerPost = express.Router();

const controllerCadastrarColaborador = require("../controllers/controllerCadastrarColaborador.js");

const multer = require("multer"); 

const upload = multer({ dest: './' });


routerPost.post("/cadastrarUsuario", controllerCadastraUsuarios);
routerPost.post("/cadastrarColaborador", upload.single('imagem'), controllerCadastrarColaborador);
module.exports = routerPost