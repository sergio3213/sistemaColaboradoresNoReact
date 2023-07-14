function formatarTelefone(input) {
  // Remove todos os caracteres não numéricos
  var numero = input.value.replace(/\D/g, "");

  // Remove os formatos anteriores
  input.value = '';

  // Obter código do país, código do estado e número do telefone do campo de input
  var codigoPais = numero.substring(0, 2);
  var codigoEstado = numero.substring(2, 4);
  var numeroTelefone = numero.substring(4);

  // Verificar se o código do país ou o código do estado foram apagados
  if (codigoPais === '') {
    formattedNumber = '';
  } else if (codigoEstado === '') {
    formattedNumber = "+" + codigoPais;
  } else {
    // Adiciona o código do país, código do estado, hífen e número do telefone
    var formattedNumber = "+" + codigoPais + " (" + codigoEstado + ") " + numeroTelefone.replace(/(\d{4,5})(\d{4})/, "$1-$2");
  }

  // Atualiza o valor do campo de input
  input.value = formattedNumber;
}

function handleButtonCadastrar(event) {
  event.preventDefault();


  const formData = new FormData();
  const inputArquivoDeImagem = document.querySelector(".inputFile");
  const arquivoDeImagem = inputArquivoDeImagem.files[0];

  const file = arquivoDeImagem;
  const maxSizeInBytes = 500 * 1024; // 500 KB

  if (file && file.size > maxSizeInBytes) {
    alert("O tamanho da imagem não pode ultrapassar 500kb");
    fotoInput.value = ''; // Limpa o campo de input file
  }

  formData.append("imagem", arquivoDeImagem);
  const constNome = document.querySelector(".inputNome").value;
  const constTelefone = document.querySelector(".inputTelefone").value
  const constRg = document.querySelector(".inputRg").value;
  const constCpf = document.querySelector(".inputCpf").value;
  const constSpjAnoDp = document.querySelector(".inputSpjAnoDp").value;

  const objCredenciais = {
    token:localStorage.getItem('cre'),
    nome: constNome,
    telefone: constTelefone,
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
