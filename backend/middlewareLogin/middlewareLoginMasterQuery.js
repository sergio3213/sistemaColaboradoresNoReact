const meuCrud = require('../CRUD/meuCrud.js')
const jwt = require('jsonwebtoken')

async function middlewareLoginMasterQuery(req,res,next){
    const token = req.query.token;
    const secretPasswordJwt = "senhaFortissima319";
    const crud = new meuCrud()
    console.log('llllllllllll',req.query.token)
    jwt.verify(token, secretPasswordJwt, async (err, decoded) => {
        if (err) {
            return res.status(400).json({message:'Você precisa estar logado como usuário master para realizar essa operação!'});
        } else {
           const arrayUsuario = await crud.buscarUsuarioPorUsuarioEsenha(decoded.usuario,decoded.senha)
           if (arrayUsuario.length!==0){
            if(arrayUsuario[0].tipo==='1'){
                console.log("logado!")
                next()
            }else{
                return res.status(400).json({message:"Você precisa estar logado como usuario master para realizar essa operação!"})
            }
           }
        }
    });
    }

module.exports = middlewareLoginMasterQuery