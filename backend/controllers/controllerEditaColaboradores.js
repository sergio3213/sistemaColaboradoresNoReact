const meuCrud = require("../CRUD/meuCrud.js");

async function controllerEditaColaboradores(req, res) {
  const crud = new meuCrud();

  const regexNome = /^(?=[^'"]{1,80}$)[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)+$/;
  const regexRg = /^(?!.*['"])[A-Za-z0-9]{8,10}$/;
  const regexCpf = /^(?!.*['"])[0-9]{11}$/;
  const regexSpjAnoDp = /^[a-zA-Z0-9\/]+$/;;

  if (req.file === undefined) {
    try {
      if (!regexNome.test(req.body.nome)) {
        return res.status(400).json({message:"O nome tem que ter no minimo um caractere espaço, e só pode ter letras de A-Z ou a-z!"})
      }

      if (!regexRg.test(req.body.rg)) {
        return res.status(400).json({message:"Rg inválido(Digite apenas números e letras, no maximo 10 dígitos!)"})
      }

      if (!regexCpf.test(req.body.cpf)) {
        return res.status(400).json({message:"Cpf inválido(Digite apenas números, 11 dígitos!)"})
      }
      if (!regexSpjAnoDp.test(req.body.spjanodp)) {
        return res.status(400).json({message:"Campo Spj/Ano/Dp inválido(Digite apenas letras ,números e '/', no mínimo 10 dígitos e no máximo 24 dígitos!)"})
      }

      const result = await crud.editaColaboradorSemImagem(
        req.body.nome,
        req.body.rg,
        req.body.cpf,
        req.body.spjanodp,
        req.body.id
      );
      return res.status(200).json({ message: "Dados alterados com sucesso!" });
    } catch (err) {
      console.log(err);
    }
  } else {
    if(req.file.mimetype.slice(-3)!=="png" && req.file.mimetype.slice(-3)!=="jpg" && req.file.mimetype.slice(-4)!=="JPEG" && req.file.mimetype.slice(-4)!=="jpeg"){
      return res.status(400).json({message:"Só são suportadas imagens .png e .jpg"});
    }
    if (!regexNome.test(req.body.nome)) {
      return res.status(400).json({message:"O nome tem que ter no minimo um caractere espaço, e só pode ter letras de A-Z ou a-z!"})
    }

    if (!regexRg.test(req.body.rg)) {
      return res.status(400).json({message:"Rg inválido(Digite apenas números e letras, no maximo 10 dígitos!)"})
    }

    if (!regexCpf.test(req.body.cpf)) {
      return res.status(400).json({message:"Cpf inválido(Digite apenas números, 11 dígitos!)"})
    }
    if (!regexSpjAnoDp.test(req.body.spjanodp)) {
      return res.status(400).json({message:"Campo Spj/Ano/Dp inválido(Digite apenas letras ,números e '/', no mínimo 10 dígitos e no máximo 24 dígitos!)"})
    }

    const fs = require("fs");
    const caminhoDoArquivo = `./img/imgsyst${req.body.id}.${req.body.extensao}`;
    console.log("hhh", caminhoDoArquivo);

    fs.unlink(caminhoDoArquivo, (err) => {
      if (err) {
        console.error("Ocorreu um erro ao deletar o arquivo:", err);
        return;
      }

      const arquivo = req.file;
      const caminhoTemporario = arquivo.path;
      const caminhoDestino =
        "./img/" + "imgsyst" + req.body.id + "." + arquivo.mimetype.slice(-3);

      const arquivoCriacao = fs.rename(
        caminhoTemporario,
        caminhoDestino,
        async (erro) => {
          if (erro) {
            return res.status(500).send("Erro ao salvar a imagem.");
          } else {
            const nomeImagem = `imgsyst${req.body.id}.${req.body.extensao}`;
            const result = await crud.editaColaborador(
              req.body.nome,
              req.body.rg,
              req.body.cpf,
              req.body.spjanodp,
              nomeImagem,
              req.body.id
            );

            return res.status(200).json({ message: "funcio" });
          }
        }
      );
    });
  }
}

module.exports = controllerEditaColaboradores;
