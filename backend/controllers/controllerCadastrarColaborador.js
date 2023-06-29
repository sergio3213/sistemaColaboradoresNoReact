import meuCrud from "../CRUD/meuCrud.js";
import jwt from "jsonwebtoken";
import fs from 'fs';

async function controllerCadastrarColaborador(req, res) {
    const arquivo = req.file
    const caminhoTemporario = arquivo.path
    const caminhoDestino = './' + arquivo.originalname;

    const a = await fs.rename(caminhoTemporario,caminhoDestino,(erro)=>{
        if (erro) {
            res.status(500).send('Erro ao salvar a imagem.');
          } else {
            return res.status(200).json({message:"funcio"})
          }
    })
     
    
}

export default controllerCadastrarColaborador;