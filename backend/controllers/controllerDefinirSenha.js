
const meuCrud = require("../CRUD/meuCrud.js")
const jwt = require('jsonwebtoken');
const secretPasswordJwt = "senhaFortissima319";

const jwtConfig = {
    expiresIn: "1d",
    algorithm: "HS256",
  };

  
const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S^'"]{8,}$/;  
async function controllerDefinirSenha(req,res){
    if (!regexSenha.test(req.query.senha)) {
        return res.status(400).json({
          message:
          ` Senha deve ter pelo menos 8 caracteres
           Senha deve conter pelo menos uma letra maiúscula
           Senha deve conter pelo menos uma letra minúscula
           Senha deve conter pelo menos um número
           Senha pode conter caracteres especiais
           NÃO são permitidas aspas simples e duplas
           `,
        });
      }
    const crud = new meuCrud()
    try{
        const usuarioSalvo = await crud.definirSenhaUsuarioComum(req.query.senha, req.query.id)    
    
        const decoded = await jwt.decode(req.query.token)
    
        const novoToken = {
            usuario: decoded.usuario,
            senha: req.query.senha,
            tipo: decoded.tipo,
            id: decoded.id,
            primeiroLogin:'1'
        }

        const tokenCoded = jwt.sign(novoToken,secretPasswordJwt,jwtConfig)  
        
        return res.status(200).json({message:"Senha salva com sucesso!",token:tokenCoded})
    }catch(err){
        console.log(err)
        return res.status(400).json({message:"Erro ao salvar a nova senha!"})
    }
}

module.exports = controllerDefinirSenha