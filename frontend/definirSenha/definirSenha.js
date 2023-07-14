const token = localStorage.getItem("cre");
const id = jwt_decode(token).id;
async function handleButtonSalvarSenha() {
    const inputSenha1 = document.querySelector(".senha1").value;
    const inputSenha2 = document.querySelector(".senha2").value;
  if (inputSenha1 === inputSenha2) {
    try{const resposta = await axios.put(
      `http://localhost:21009/definirSenha?token=${token}&id=${id}&senha=${inputSenha2}`
    );
    alert(resposta.data.message)
    await localStorage.setItem('cre',resposta.data.token)
    window.location.href="../pesquisarColaboradoresUsuarioComum/pesquisarColaboradoresUsuarioComum.html"
    }catch(err){
        alert(err.response.data.message)
    }
      }else{
    alert("Os dois campos precisam ter a mesma senha ")
  }
}
