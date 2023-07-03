const meuCrud = require('../CRUD/meuCrud.js')

async function controllerEditaColaboradores(req, res) {
    const crud = new meuCrud();
    const result= await crud.editaColaborador(req.body.nome, req.body.rg, req.body.cpf, req.body.spjanodp, req.body.id)
    console.log(result)        
}

module.exports = controllerEditaColaboradores