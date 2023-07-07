const express = require("express");
const routerPut = express.Router();
const controllerEditaColaboradores = require('../controllers/controllerEditaColaboradores.js')
const middlewareLoginMaster = require('../middlewareLogin/middlewareLoginMaster.js')
const multer = require('multer');
const upload = multer({ dest: './' });

routerPut.put("/editaColaborador",upload.single('imagem'),middlewareLoginMaster, controllerEditaColaboradores);


module.exports = routerPut