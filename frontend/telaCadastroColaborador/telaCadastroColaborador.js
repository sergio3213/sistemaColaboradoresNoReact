function handleButtonCadastrar(event) {
  event.preventDefault();

  const formData = new FormData();
  const inputArquivoDeImagem = document.querySelector(".inputFile");
  const arquivoDeImagem = inputArquivoDeImagem.files[0];
  formData.append("imagem", arquivoDeImagem);
  const constNome = document.querySelector(".inputNome").value;
  const constRg = document.querySelector(".inputRg").value;
  const constCpf = document.querySelector(".inputCpf").value;
  const constSpjAnoDp = document.querySelector(".inputSpjAnoDp").value;

  const objCredenciais = {
    nome: constNome,
    rg: constRg,
    cpf: constCpf,
    spjAnoDp: constSpjAnoDp,
  };

  Object.entries(objCredenciais).forEach(([key, value]) => {
    formData.append(key, value);
  });

  debugger;

  axios
    .post("http://localhost:21009/cadastrarColaborador", formData)
    .then(function (response) {
      alert(response.data.message);
      location.reload();
    })
    .catch(function (error) {
      alert(error.response.data.message);
    });
}

const form = document.getElementById("cadastroForm");
form.addEventListener("submit", handleButtonCadastrar);
