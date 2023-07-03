const meuCrud = require("../CRUD/meuCrud.js");
const jwt = require("jsonwebtoken");
const fs = require('fs');

async function controllerCadastrarColaborador(req, res) {
    const regexNome = /^(?=.{1,80}$)[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)+$/
    const regexRg = /^[A-Za-z0-9]{8,10}$/
    const regexCpf = /^[0-9]{11,11}$/

    if(!regexNome.test(req.body.nome)){
      return res.status(400).json({message:"O nome tem que ter no minimo um caractere espaço, e só pode ter letras de A-Z ou a-z!"})
    }

    if(!regexRg.test(req.body.rg)){
      return res.status(400).json({
        message: "Rg inválido(Digite apenas números e letras, no maximo 10 dígitos!)"
      })
    }

    if(!regexCpf.test(req.body.cpf)){
      return res.status(400).json({
        message: "Cpf inválido(Digite apenas números, 11 dígitos!)"
      })
    }
    
    const arquivo = req.file
    const caminhoTemporario = arquivo.path
    const crud = new meuCrud();
     const idUltimoColaborador = await crud.buscaIdUltimoColaborador()
     console.log(req.file.originalname)
     const caminhoDestino = './img/' + "imgsyst" + (idUltimoColaborador+1) + ".png";
     console.log(caminhoDestino)
     const a = await fs.rename(caminhoTemporario,caminhoDestino, async(erro)=>{
        if (erro) {
            return res.status(500).send('Erro ao salvar a imagem.');
          } else {
            await crud.cadastrarColaborador(req.body.nome,req.body.rg,req.body.cpf,req.body.spjAnoDp)
            return res.status(200).json({message:"funcio"})
          }
    })
     

    
}

module.exports = controllerCadastrarColaborador;