function handleButtonCadastrar(event) {
  event.preventDefault();

  const formData = new FormData();
  const inputArquivoDeImagem = document.querySelector(".inputFile");
  const arquivoDeImagem = inputArquivoDeImagem.files[0];

  const file = arquivoDeImagem;
  const maxSizeInBytes = 500 * 1024; // 500 KB

  if (file && file.size > maxSizeInBytes) {
    alert(file.size);
    fotoInput.value = ''; // Limpa o campo de input file
  }

  formData.append("imagem", arquivoDeImagem);
  const constNome = document.querySelector(".inputNome").value;
  const constRg = document.querySelector(".inputRg").value;
  const constCpf = document.querySelector(".inputCpf").value;
  const constSpjAnoDp = document.querySelector(".inputSpjAnoDp").value;

  const objCredenciais = {
    token:localStorage.getItem('cre'),
    nome: constNome,
    rg: constRg,
    cpf: constCpf,
    spjAnoDp: constSpjAnoDp,
  };

  Object.entries(objCredenciais).forEach(([key, value]) => {
    formData.append(key, value);
  });


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
