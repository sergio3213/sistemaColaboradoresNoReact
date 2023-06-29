async function handleButtonLogar() {
  const inputUsuarioValue = document.querySelector(
    ".inputUsuarioTelaLogin"
  ).value;
  const inputSenhaValue = document.querySelector(".inputSenhaTelaLogin").value;
  console.log(inputUsuarioValue + " " + inputSenhaValue);
  axios
    .get(
      `http://localhost:3001/login?usuario=${inputUsuarioValue}&senha=${inputSenhaValue}`
    )
    .then((data) => {
      localStorage.setItem("cre", data.data);
      alert("Login efetuado com sucesso!");
      window.location.href =
        "../cadastrarEditarDeletar/cadastrarEditarDeletar.html";
    });
}
