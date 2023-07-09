const meuCrud = require("../CRUD/meuCrud.js");
const regexUsuario = /^[a-zA-Z0-9_]+$/
async function controllerPesquisaUsuarioPorUsuario(req, res) {
  
  const crud = new meuCrud();
  console.log(req.query.usuario)
  if(!regexUsuario.test(req.query.usuario)){
    return res.status(400).json({message: "Apenas letras, números e underline são permitidos no campo de pesquisa! E não pode estar vazio!"});
  
  }
  const usuarios = await crud.buscarUsuarioPorUsuario(req.query.usuario)
  console.log(usuarios)
  res.status(200).json(usuarios);
}

module.exports = controllerPesquisaUsuarioPorUsuario;
