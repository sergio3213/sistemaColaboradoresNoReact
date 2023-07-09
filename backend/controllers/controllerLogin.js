const meuCrud = require("../CRUD/meuCrud.js");
const jwt = require("jsonwebtoken");

const secretPasswordJwt = "senhaFortissima319";

const jwtConfig = {
  expiresIn: "1d",
  algorithm: "HS256",
};


async function controllerLogin(req, res) {
    const crud = new meuCrud()
    const expressaoRegularUsuario = /^[a-zA-Z0-9_]+$/
    const expressaoRegularSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,30}$/
    console.log(req.query)

    if(!expressaoRegularUsuario.test(req.query.usuario)){
        return res.status(400).json({message:'Apenas letras e números são permitidos no campo usuario!'})
    }

    if(!expressaoRegularSenha.test(req.query.senha)){
        return res.status(400).json({message:'Campo senha inválido'})
    }

    const usuario = await crud.buscarUsuarioPorUsuarioEsenha(req.query.usuario, req.query.senha)
    
    if(usuario.length===0){
        return res.status(400).json({message:'usuario ou senha incorreto!'})
    }

    const payload = {usuario:req.query.usuario,senha:req.query.senha,tipo:usuario[0].tipo}
    const token = jwt.sign( payload, secretPasswordJwt, jwtConfig)
   
    
    
    res.status(200).json(token)
}

module.exports = controllerLogin;