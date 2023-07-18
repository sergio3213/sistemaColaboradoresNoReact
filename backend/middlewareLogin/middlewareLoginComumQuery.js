const meuCrud = require('../CRUD/meuCrud.js')
const jwt = require('jsonwebtoken')
async function middlewareLoginComumQuery(req,res,next){
    const token = req.query.token;
    const secretPasswordJwt = "senhaFortissima319";
    const crud = new meuCrud()
    jwt.verify(token, secretPasswordJwt, async (err, decoded) => {
        if (err) {
            return res.status(400).json({message:'Você precisa estar logado para realizar essa operação!'});
        } else {
           const arrayUsuario = await crud.buscarUsuarioPorUsuarioExact(decoded.usuario)
           if (arrayUsuario.length!==0){
            next()
           }else{
            return res.status(400).json({message:"Você precisa estar logado para realizar essa operação!"})
           }
        }
    });
    }

module.exports = middlewareLoginComumQuery