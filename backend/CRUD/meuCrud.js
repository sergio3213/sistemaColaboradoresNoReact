import mysql from "mysql2/promise";

class meuCrud {
    conexao = async () => { return mysql.createConnection({
      host: "localhost", // Host do banco de dados
      user: "root", // Usuário do banco de dados
      password: "$ENHAfraca12", // Senha do banco de dados
      database: "sistema_de_colaboradores", // Nome do banco de dados
    });
  }
  

  async cadastrarUsuario(usuario, senha, tipo) {
    const esperaConexao = await this.conexao()
    return esperaConexao.execute(
      `INSERT INTO usuarios (usuario, senha, tipo) VALUES (?, ?, ?)`,
      [usuario, senha, tipo]
    );
  }

  async buscarUsuarioPorUsuario(usuario) {
    const esperaConexao = await this.conexao()
    const usuariosPorUsuario = await esperaConexao.execute(
      `SELECT * FROM usuarios WHERE usuario = ?`,
      [usuario]
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

  async cadastrarColaborador(nome,rg,cpf,spjanodp) {
    const esperaConexao = await this.conexao()
    const arrayUltimoId = await esperaConexao.execute('SELECT * FROM colaboradores ORDER BY id DESC LIMIT 1;');
    
    const ultimoId = arrayUltimoId[0][0].id
    await esperaConexao.execute(
      `INSERT INTO colaboradores(nome,rg,cpf,spjanodp,img) VALUES('${nome}','${rg}','${cpf}','${spjanodp}','imgsyst${ultimoId}.jpg')`
    )
  }

}

export default meuCrud;
