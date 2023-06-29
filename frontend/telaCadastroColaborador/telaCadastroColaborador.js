
function handleButtonCadastrar(){

alert("funciona")

const formData = new FormData();
const inputArquivoDeImagem = document.querySelector('.inputFile')
const arquivoDeImagem = inputArquivoDeImagem.files[0]
formData.append('imagem', arquivoDeImagem);
const constNome = document.querySelector('inputNome').value;
const constRg = document.querySelector('inputRg').value;
const constCpf = document.querySelector('inputCpf').value;
const constSpjAnoDp = document.querySelector('inputSpjAnoDp').value;

axios.post("http://localhost:3001/cadastrarColaborador",{
    formData:formData,
    nome:constNome,
    rg:constRg,
    cpf:constCpf,
    
})
    .then(function (response) {
        // Manipule a resposta
        console.log(response);
      })
      .catch(function (error) {
        // Manipule os erros
        console.error(error);
      });
}
