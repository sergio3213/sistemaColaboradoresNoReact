
async function handleButtonCadastrar(){

alert("funciona")

const formData = await new FormData();
const inputArquivoDeImagem = document.querySelector('.inputFile')
const arquivoDeImagem = inputArquivoDeImagem.files[0]
await formData.append('imagem', arquivoDeImagem);
const constNome = document.querySelector('.inputNome').value;
const constRg = document.querySelector('.inputRg').value;
const constCpf = document.querySelector('.inputCpf').value;
const constSpjAnoDp = document.querySelector('.inputSpjAnoDp').value;

const objCredenciais = {
    nome:constNome,
    rg:constRg,
    cpf:constCpf,
    spjAnoDp:constSpjAnoDp,
}

Object.entries(objCredenciais).forEach(([key, value]) => {
    formData.append(key, value);
});

console.log(formData)
axios.post("http://localhost:3001/cadastrarColaborador",formData/* {
    formData:formData,
    nome:constNome,
    rg:constRg,
    cpf:constCpf,
    spjAnoDp:constSpjAnoDp,   
} */)
    .then(function (response) {
        // Manipule a resposta
        console.log(response);
      })
      .catch(function (error) {
        // Manipule os erros
        console.error(error);
      });
}
