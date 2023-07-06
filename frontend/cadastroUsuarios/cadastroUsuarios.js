function requisicaoAxiosCadastroDeUsuarios() {
    
    const inputUsuario = document.querySelector('.inputUsuarioCadastroUsuario').value
    const inputSenha = document.querySelector('.inputSenhaCadastroUsuario').value
    const inputTipo = document.querySelector('.SelectTipoCadastroUsuario').value
    console.log(inputUsuario+inputSenha+inputTipo);

    axios.post('http://localhost:21009/cadastrarUsuario',
    {
        usuario:inputUsuario,
        senha:inputSenha,
        tipo:inputTipo
    })
    .then((data)=>{
      alert("Usuário cadastrado com sucesso!")
    })
    .catch((err)=>{
        alert(err.response.data.message)
    })
  }