const express = require("express");
const routerPut = express.Router();
const controllerEditaColaboradores = require('../controllers/controllerEditaColaboradores.js')

const multer = require('multer');
const upload = multer({ dest: './' });

routerPut.put("/editaColaborador",upload.single('imagem'), controllerEditaColaboradores);


module.exports = routerPut