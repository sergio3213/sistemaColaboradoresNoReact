import meuCrud from "../CRUD/meuCrud.js";
import jwt from "jsonwebtoken";
import fs from 'fs';

async function controllerCadastrarColaborador(req, res) {
    console.log(req.body.nome)
    const arquivo = req.file
    const caminhoTemporario = arquivo.path
    const caminhoDestino = './' + arquivo.originalname;
    const crud = new meuCrud();
     
    const a = await fs.rename(caminhoTemporario,caminhoDestino, async(erro)=>{
        if (erro) {
            res.status(500).send('Erro ao salvar a imagem.');
          } else {
            await crud.cadastrarColaborador(req.body.nome,req.body.rg,req.body.cpf,req.body.spjAnoDp)
            return res.status(200).json({message:"funcio"})
          }

    
    })
     

    
}

export default controllerCadastrarColaborador;