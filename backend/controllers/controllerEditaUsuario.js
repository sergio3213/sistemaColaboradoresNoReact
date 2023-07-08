const meuCrud = require('../CRUD/meuCrud.js')

const regexUsuario = /^[a-zA-Z0-9_]{4,30}$/;
const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S^'"]{8,}$/;
const regexTipo = /^[0-1]{1,1}$/

async function controllerEditaUsuario(req,res){
    
    const crud = new meuCrud()
    
    const usuarios = await crud.buscarUsuarioPorIdDiferente(req.query.usuario,req.query.id)
      if(usuarios.length!==0){
        return res.status(400).json({message:"Já existe um usuário com esse nome!"})
      }


    if (!regexUsuario.test(req.query.usuario)) {
        return res
          .status(400)
          .json({
            message:
              "O nome de usuário não pode iniciar com numeros e é permitido apenas letras de A-Z,underline e números de 0 a 9!",
          });
      }

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


    
    try{
        await crud.editaUsuario(req.query.id, req.query.usuario, req.query.senha, req.query.tipo)
        return res.status(200).json({message:"Usuario editado com sucesso!"})
    }
    catch(err){
        return res.status(400).json({message:"Erro ao editar o usuário!"})
    }
    
}

module.exports = controllerEditaUsuario