const express = require("express");
const routerPut = express.Router();
const controllerEditaColaboradores = require('../controllers/controllerEditaColaboradores.js')
const middlewareLoginMaster = require('../middlewareLogin/middlewareLoginMaster.js')
const multer = require('multer');
const controllerEditaUsuario = require ("../controllers/controllerEditaUsuario.js");
const middlewareLoginMasterQuery = require("../middlewareLogin/middlewareLoginMasterQuery.js");
const upload = multer({ dest: './' });

routerPut.put("/editaColaborador",upload.single('imagem'),middlewareLoginMaster, controllerEditaColaboradores);
routerPut.put("/editaUsuario",middlewareLoginMasterQuery,controllerEditaUsuario)

module.exports = routerPut