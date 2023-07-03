function handleButtonPesquisar() {
    const inputPesquisar = document.querySelector('.inputPesquisar').value;
    const selectPesquisar = document.querySelector('.selectPesquisar').value;
  
    if (selectPesquisar === 'Nome') {
      axios
        .get(`http://sergiomelobackend.com.br:21009/colaboradoresPorNome?nome=${inputPesquisar}`)
        .then((data) => {
          
          const divColaboradores = document.querySelector('.divColaboradores');
          
          // Limpar os elementos anteriores
          divColaboradores.innerHTML = '';
            
          const colaboradoresMap = data.data.map((data, index) => {
            const elementTitulo = document.createElement('h4');
            elementTitulo.type = 'text';
            elementTitulo.innerText = data.nome;
            divColaboradores.appendChild(elementTitulo);
                
            
            const elementImagem = document.createElement('img');
            function toBase64(arr) {
              arr = new Uint8Array(arr)
              return btoa(
                 arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
              );
           }

            const dataUrl = `data:image/jpg;base64,${toBase64( data.imageBuffer.data)}`;
            elementImagem.src=dataUrl
            elementImagem.style.width='25vh'
            elementImagem.style.height='20vh'

            divColaboradores.appendChild(elementImagem)
            
            
            const elementEnviaImagem = document.createElement('input');
            elementEnviaImagem.type="file";
            divColaboradores.appendChild(elementEnviaImagem)

            const elementNome = document.createElement('input');
            elementNome.type = 'text';
            elementNome.value = data.nome;
            divColaboradores.appendChild(elementNome);
  
            const elementRg = document.createElement('input');
            elementRg.type = 'text';
            elementRg.value = data.rg;
            divColaboradores.appendChild(elementRg);
  
            const elementCpf = document.createElement('input');
            elementCpf.type = 'text';
            elementCpf.value = data.cpf;
            divColaboradores.appendChild(elementCpf);
  
            const elementspjanodp = document.createElement('input');
            elementspjanodp.type = 'text';
            elementspjanodp.value = data.spjanodp;
            divColaboradores.appendChild(elementspjanodp);


            function handleButonSalvar(){
              const dadosAtualizados = {
                id:data.id,
                nome: elementNome.value,
                rg: elementRg.value,
                cpf: elementCpf.value,
                spjanodp: elementspjanodp.value
              }

              axios.put("http://sergiomelobackend.com.br:21009/editaColaborador",dadosAtualizados).then((data)=>console.log(data))
              alert("teste")
            }

            const elementButtonSalvar = document.createElement('button');
            elementButtonSalvar.innerText="Salvar"
            elementButtonSalvar.onclick = handleButonSalvar
            divColaboradores.appendChild(elementButtonSalvar)

            const elementButtonDeletar = document.createElement('button');
            elementButtonDeletar.innerText="Deletar"
            divColaboradores.appendChild(elementButtonDeletar)
          });
        });
    }
  }
  