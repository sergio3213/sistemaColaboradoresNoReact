import express from "express";
import controllerCadastraUsuarios from "../controllers/controllerCadastraUsuario.js";
const routerPost = express.Router();

import controllerCadastrarColaborador from "../controllers/controllerCadastrarColaborador.js";

import multer from "multer"; 

const upload = multer({ dest: './' });


routerPost.post("/cadastrarUsuario", controllerCadastraUsuarios);
routerPost.post("/cadastrarColaborador", upload.single('imagem'), controllerCadastrarColaborador);
export default routerPost