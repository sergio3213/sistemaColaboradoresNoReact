function requisicaoAxiosCadastroDeUsuarios() {
    
    const inputUsuario = document.querySelector('.inputUsuarioCadastroUsuario').value
    const inputSenha = document.querySelector('.inputSenhaCadastroUsuario').value
    const inputTipo = document.querySelector('.SelectTipoCadastroUsuario').value
    console.log('teste')
    axios.post('http://sergiomelobackend.com.br:21009/cadastrarUsuario',
    {   token:localStorage.getItem('cre'),
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