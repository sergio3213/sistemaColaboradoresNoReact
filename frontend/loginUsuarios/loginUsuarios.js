async function handleButtonLogar() {
  const inputUsuarioValue = document.querySelector(
    ".inputUsuarioTelaLogin"
  ).value;
  const inputSenhaValue = document.querySelector(".inputSenhaTelaLogin").value;
  axios
    .get(
      `http://localhost:21009/login?usuario=${inputUsuarioValue}&senha=${inputSenhaValue}`
    )
    .then(async (data) => {
      await localStorage.setItem("cre", data.data);
      alert("Login efetuado com sucesso!");

      const decode = (token) =>
        decodeURIComponent(
          atob(token.split(".")[1].replace("-", "+").replace("_", "/"))
            .split("")
            .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
            .join("")
        );

      const token_decode = JSON.parse(decode(localStorage.getItem("cre")));
      if (token_decode.tipo === "1") {
        window.location.href =
          "../cadastrarEditarDeletar/cadastrarEditarDeletar.html";
      } else if (token_decode.tipo === "0") {
        if (token_decode.primeiroLogin === '0') {
          window.location.href="../definirSenha/definirSenha.html"
        } else {
          window.location.href =
            "../pesquisarColaboradoresUsuarioComum/pesquisarColaboradoresUsuarioComum.html";
        }
      }
      {
      }
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
}
