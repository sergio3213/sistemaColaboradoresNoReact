const mysql = require("mysql2/promise");

class meuCrud {
    conexao = async () => { return mysql.createConnection({
      /* host: "mysql.sergiomelobackend.com.br",
      user: "sergiomelo_add1", 
      password: "senhabd12", 
      database: "sergiomeloback",  */
      
     host: "localhost",
      user: "root", 
      password: "$ENHAfraca12", 
      database: "sistema_de_colaboradores" 
    });
  }
  

  async cadastrarUsuario(usuario, senha, tipo) {
    const esperaConexao = await this.conexao()
    return esperaConexao.execute(
      `INSERT INTO usuarios (usuario, senha, tipo,primeiroLogin) VALUES (?, ?, ?, '0')`,
      [usuario, senha, tipo]
    );
  }

  async buscarUsuarioPorUsuario(usuario) {
    const esperaConexao = await this.conexao()
    const usuariosPorUsuario = await esperaConexao.execute(
      `SELECT * FROM usuarios WHERE usuario LIKE '${usuario}%' COLLATE utf8mb4_general_ci;= `
    );
      return(usuariosPorUsuario[0])
  }

  async buscarUsuarioPorUsuarioEsenha(usuario,senha) {
    const esperaConexao = await this.conexao()
    const usuariosPorUsuarioEsenha = await esperaConexao.execute(
      `SELECT * FROM usuarios WHERE usuario = ? and senha = ? `,
      [usuario,senha]
    );
      return(usuariosPorUsuarioEsenha[0])
  }

  async cadastrarColaborador(nome,telefone,rg,cpf,spjanodp,ext) {
    const esperaConexao = await this.conexao()
    
    const arrayUltimoId = await esperaConexao.execute('SELECT * FROM colaboradores ORDER BY id DESC LIMIT 1;');
      
    try{
      console.log('...................',ext)
      const ultimoId = arrayUltimoId[0][0].id
      console.log('...................',ext)
      await esperaConexao.execute(
        `INSERT INTO colaboradores(nome,telefone,rg,cpf,spjanodp,img) VALUES('${nome}','${telefone}','${rg}','${cpf}','${spjanodp}','imgsyst${(ultimoId+1)+'.'+ ext}')`
      )
      console.log('...................',ext)

    }
      catch(err){
        const ultimoId = 0
        await esperaConexao.execute(
          `INSERT INTO colaboradores(nome,rg,cpf,spjanodp,img) VALUES('${nome}','${rg}','${cpf}','${spjanodp}','imgsyst${ultimoId+1}.${ext}')`
        )
  
      }
          
  }

  async buscaIdUltimoColaborador() {
    const esperaConexao = await this.conexao()
    const arrayUltimoId = await esperaConexao.execute('SELECT * FROM colaboradores ORDER BY id DESC LIMIT 1;');
    try{
      return arrayUltimoId[0][0].id
    }
    catch(err){
      return(0)
    }
  }

  async buscarColabolaboradorPorNome(nome){
    const esperaConexao = await this.conexao()
    const colaboradores = await esperaConexao.execute(`SELECT * FROM colaboradores where nome LIKE '${nome}%' COLLATE utf8mb4_general_ci;`);
    return colaboradores[0];
  }

  async editaColaborador(nome,rg,cpf,spjanodp,imagem,id){
    const esperaConexao = await this.conexao()
    const editaColaborar = await esperaConexao.execute(`UPDATE colaboradores SET nome = '${nome}', rg = '${rg}', cpf = '${cpf}', spjanodp='${spjanodp}', img='${imagem}' WHERE id = ${id}`);
    
    return editaColaborar
  }

  async editaColaboradorSemImagem(nome,rg,cpf,spjanodp,id){
    const esperaConexao = await this.conexao()
    const editaColaborar = await esperaConexao.execute(`UPDATE colaboradores SET nome = '${nome}', rg = '${rg}', cpf = '${cpf}', spjanodp='${spjanodp}' WHERE id = ${id}`); 
    return editaColaborar
  }

  async buscarColabolaboradorPorRg(rg){
    const esperaConexao = await this.conexao()
    const colaboradores = await esperaConexao.execute(`SELECT * FROM colaboradores where rg LIKE '${rg}' COLLATE utf8mb4_general_ci;`);
    return colaboradores[0];
  }

  async buscarColabolaboradorPorCpf(cpf){
    const esperaConexao = await this.conexao()
    const colaboradores = await esperaConexao.execute(`SELECT * FROM colaboradores where cpf LIKE '${cpf}' COLLATE utf8mb4_general_ci;`);
    return colaboradores[0];
  }

  async buscaColaboradorPorId(id){
    const esperaConexao = await this.conexao()
    const nomeImagem = await esperaConexao.execute(`SELECT img FROM colaboradores where id = ${id}`);
    return nomeImagem;
  }

  async deletaColaboradorPorId(id){
    const esperaConexao = await this.conexao()
    const colaboradorDeletado = await esperaConexao.execute(`DELETE FROM colaboradores WHERE id = ${id}`);
    return colaboradorDeletado;
  }

  async buscarUsuarioPorUsuario(usuario){
    const esperaConexao = await this.conexao();
    const usuarios = await esperaConexao.execute(`SELECT * FROM usuarios WHERE usuario LIKE '${usuario}%' COLLATE utf8mb4_general_ci;`);
    return usuarios[0]
  }
  async editaUsuario(id,usuario,senha,tipo){
    const esperaConexao = await this.conexao();
    const usuarioEditado = await esperaConexao.execute(`UPDATE usuarios SET usuario = '${usuario}', senha='${senha}',tipo='${tipo}' WHERE id = ${id}`);
    return usuarioEditado
  }

  async buscarUsuarioPorIdDiferente(usuario,id){
    const esperaConexao = await this.conexao();
    const usuarios = await esperaConexao.execute(`SELECT * FROM usuarios WHERE usuario = '${usuario}' AND id != ${id};`);
    return usuarios[0]
  }

  async definirSenhaUsuarioComum(senha,id){
    const esperaConexao = await this.conexao();
    const usuarioEditado = await esperaConexao.execute(`UPDATE usuarios SET senha = '${senha}',primeiroLogin = '1' WHERE id = ${id}`);

  }

  async deletaUsuario(id){
    const esperaConexao = await this.conexao();
    const usuarioDeletado = await esperaConexao.execute(`DELETE FROM usuarios WHERE id = ${id}`)
    return usuarioDeletado
  }

  async buscarUsuarioPorUsuarioExact(usuario){
    const esperaConexao = await this.conexao();
    return await esperaConexao.execute(`SELECT * FROM usuarios WHERE usuario = '${usuario}'`)
  }
}






module.exports = meuCrud;
