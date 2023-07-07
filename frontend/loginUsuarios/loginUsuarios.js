async function handleButtonLogar() {
  const inputUsuarioValue = document.querySelector(
    ".inputUsuarioTelaLogin"
  ).value;
  const inputSenhaValue = document.querySelector(".inputSenhaTelaLogin").value;
  axios
    .get(
      `http://localhost:21009/login?usuario=${inputUsuarioValue}&senha=${inputSenhaValue}`
    )
    .then((data) => {
      localStorage.setItem("cre", data.data);
      alert("Login efetuado com sucesso!");
      window.location.href =
        "../cadastrarEditarDeletar/cadastrarEditarDeletar.html";
    })
    .catch((err)=>{
      alert(err.response.data.message)
    });
}
