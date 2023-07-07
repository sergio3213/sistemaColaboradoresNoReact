const meuCrud = require('../CRUD/meuCrud.js')
async function controllerEditaUsuario(req,res){
    console.log(req.query)
    const crud = new meuCrud() 
    try{
        await crud.editaUsuario(req.query.id, req.query.usuario, req.query.senha, req.query.tipo)
        return res.status(200).json({message:"Usuario editado com sucesso!"})
    }
    catch(err){
        return res.status(400).json({message:"Erro ao editar o usuário!"})
    }
    
}

module.exports = controllerEditaUsuario