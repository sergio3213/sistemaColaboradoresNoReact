  const meuCrud = require("../CRUD/meuCrud.js");
  const jwt = require("jsonwebtoken");
  const fs = require('fs');

  async function controllerCadastrarColaborador(req, res) {
      const regexNome = /^(?=[^'"]{1,80}$)[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)+$/
      const regexTelefone = /^\+\d{2} \(\d{2}\) \d{5}-\d{4}$/
      const regexRg = /^(?!.*['"])[A-Za-z0-9]{8,10}$/
      const regexCpf = /^(?!.*['"])[0-9]{11}$/
      const regexSpjAnoDp = /^[a-zA-Z0-9/_-]{7,24}$/

      
      if(req.file === undefined){
        return res.status(400).json({message:"Você precisa escolher uma imagem!"})
      }
      if(req.file.mimetype.slice(-3)!=="jpg" && req.file.mimetype.slice(-3)!=="peg" && req.file.mimetype.slice(-3)!=="png" && req.file.mimetype.slice(-4)!=="JPEG" && req.file.mimetype.slice(-4)!=="jpeg" ){
        return res.status(400).json({message:"Apenas arquivos png, jpg são suportados!"})
      }
      
      if(!regexNome.test(req.body.nome)){
        return res.status(400).json({message:"O nome tem que ter no minimo um caractere espaço, e só pode ter letras de A-Z ou a-z!"})
      }

      if(!regexTelefone.test(req.body.telefone)){
        return res.status(400).json({message:"O telefone está em um formato incorreto!"})
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

      if(!regexSpjAnoDp.test(req.body.spjAnoDp)){
        return res.status(400).json({
          message: "Campo Spj/Ano/Dp inválido(Digite apenas letras ,números e '/', no mínimo 10 dígitos e no máximo 24 dígitos!)"
        })
      }
      
      const arquivo = await req.file
      const caminhoTemporario = arquivo.path
      const crud = new meuCrud();
      const idUltimoColaborador = await crud.buscaIdUltimoColaborador()
      

      console.log('gggggggggggggggggggggggGGG',arquivo)
      const caminhoDestino = './img/' + "imgsyst" + (idUltimoColaborador+1) +'.'+ arquivo.originalname.slice(-3)
      const arquivoCriacao = await fs.rename(caminhoTemporario,caminhoDestino, async(erro)=>{
          if (erro) {
              return res.status(500).send('Erro ao salvar a imagem.');
            } else {
              console.log('NNNNNNNN')
      
              await crud.cadastrarColaborador(req.body.nome,req.body.telefone,req.body.rg,req.body.cpf,req.body.spjAnoDp, arquivo.originalname.slice(-3))
              return res.status(200).json({message:"Usuário cadastrado com sucesso!"})
            }
      })
      
    
      

  }

  module.exports = controllerCadastrarColaborador;