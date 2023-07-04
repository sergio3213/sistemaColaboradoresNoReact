const meuCrud = require('../CRUD/meuCrud.js')

async function controllerEditaColaboradores(req, res) {
    const crud = new meuCrud();
    
    console.log('aaa',req.file)

    const fs = require('fs');
    const caminhoDoArquivo = `./img/imgsyst${req.body.id}.${req.body.extensao}`;
    console.log("hhh",caminhoDoArquivo)
    
    
    
    
    fs.unlink(caminhoDoArquivo, (err) => {
    if (err) {
        console.error('Ocorreu um erro ao deletar o arquivo:', err);
        return;
    }



    const arquivo=req.file
    const caminhoTemporario = arquivo.path
    const caminhoDestino = './img/' + "imgsyst" + (req.body.id) +'.'+ arquivo.mimetype.slice(-3)
      

    const arquivoCriacao = fs.rename(caminhoTemporario,caminhoDestino, async(erro)=>{
        if (erro) {
            return res.status(500).send('Erro ao salvar a imagem.');
          } else {
            const nomeImagem=`imgsyst${req.body.id}.${req.body.extensao}`
            const result= await crud.editaColaborador(req.body.nome, req.body.rg, req.body.cpf, req.body.spjanodp, nomeImagem, req.body.id)
    
            return res.status(200).json({message:"funcio"})
          }
    })
    



    console.log('Arquivo deletado com sucesso.');
    });

             
}

module.exports = controllerEditaColaboradores