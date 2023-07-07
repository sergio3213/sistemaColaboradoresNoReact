const meuCrud = require('../CRUD/meuCrud.js')

async function controllerDeletaColaborador(req, res) {
   const crud = new meuCrud()
   try{
    
    const nomeImagem = await crud.buscaColaboradorPorId(req.query.id)
    
    const caminhoDaImagem = await `./img/${nomeImagem[0][0].img}`;//AQUI ESTA O PROBLEMA
    await crud.deletaColaboradorPorId(req.query.id) 
    
    const fs = require("fs");
    
    await fs.unlink(caminhoDaImagem, (error) => {
        if (error) {
          res.status(400).json({message:'Erro ao deletar a imagem:'});
          
        }
        else{
          res.status(200).json({message:'Colaborador deletado com sucesso!'});
        }
      
        console.log('');
      });
    }
    catch(err){} 
}

module.exports = controllerDeletaColaborador