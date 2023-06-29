import meuCrud from "../CRUD/meuCrud.js";

async function controllerCadastraUsuarios(req, res) {
  const crud = new meuCrud();
  const regexUsuario = /^[a-zA-Z0-9_]{4,30}$/;
  const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/;


  const buscarUsuarioPorUsuario = await crud.buscarUsuarioPorUsuario(req.body.usuario);
    if(buscarUsuarioPorUsuario.length!==0){
      return res.status(400).json({message:"Esse usuário já foi cadastrado, use outro nome."})
  }
  
  if (!regexUsuario.test(req.body.usuario)) {
    return res
      .status(400)
      .json({
        message:
          "O nome de usuário não pode iniciar com numeros e é permitido apenas letras de A-Z e números de 0 a 9!",
      });
  }

  if (!regexSenha.test(req.body.senha)) {
    return res.status(400).json({
      message:
      ` Senha deve ter pelo menos 8 caracteres
       Senha deve conter pelo menos uma letra maiúscula
       Senha deve conter pelo menos uma letra minúscula
       Senha deve conter pelo menos um número
       Senha pode conter caracteres especiais`,
    });
  }

   
   console.log(req.body.usuario)
  const userCadastrado = await crud.cadastrarUsuario(
    req.body.usuario,
    req.body.senha,
    req.body.tipo
  );
  

  res.status(200).json(userCadastrado);
}
export default controllerCadastraUsuarios;
