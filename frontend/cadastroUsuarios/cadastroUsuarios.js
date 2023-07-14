function requisicaoAxiosCadastroDeUsuarios() {
    
    const inputUsuario = document.querySelector('.inputUsuarioCadastroUsuario').value
    const inputSenha = document.querySelector('.inputSenhaCadastroUsuario').value
    const inputTipo = document.querySelector('.SelectTipoCadastroUsuario').value
    axios.post('http://localhost:21009/cadastrarUsuario',
    {   token: localStorage.getItem('cre'),
        usuario:inputUsuario,
        senha:inputSenha,
        tipo:inputTipo
    },
    {
      timeout: 15000 // Tempo de resposta limite em milissegundos
    })
    .then((data)=>{
      alert(data.data.message)
    })
    .catch((err)=>{
        alert(err.response.data.message)
    })
  }