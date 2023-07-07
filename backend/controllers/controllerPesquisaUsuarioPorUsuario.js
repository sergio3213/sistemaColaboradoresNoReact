const meuCrud = require("../CRUD/meuCrud.js");
async function controllerPesquisaUsuarioPorUsuario(req, res) {
  const crud = new meuCrud();
  console.log(req.query.usuario)
  const usuarios = await crud.buscarUsuarioPorUsuario(req.query.usuario)
  console.log(usuarios)
  res.status(200).json(usuarios);
}

module.exports = controllerPesquisaUsuarioPorUsuario;
