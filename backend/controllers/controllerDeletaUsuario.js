const meuCrud = require('../CRUD/meuCrud.js')

async function controllerDeletaUsuario(req,res){
    const crud = new meuCrud()
    try{
    await crud.deletaUsuario(req.query.id)
        return res.status(200).json({message:"Usuário deletado com sucesso!"})
    }
    catch(err){

    }
}

module.exports = controllerDeletaUsuario