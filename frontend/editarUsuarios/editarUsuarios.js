async function handleButtonPesquisar() {
    const inputPesquisar = await document.querySelector('.inputPesquisar').value;
    const selectPesquisar = await document.querySelector('.selectPesquisar').value;
    const imagemAdicionada = []
    if (selectPesquisar === 'Nome') {
      imagemAdicionada.splice(0, imagemAdicionada.length);
      axios
        .get(`http://localhost:21009/colaboradoresPorNome?nome=${inputPesquisar}`)
        .then((data) => {
          if(data.data.length===0){
            alert("Não existe nenhum usuário com esse nome!")
          }
          console.log(data)
          
          const divColaboradores = document.querySelector('.divColaboradores');
          
          // Limpar os elementos anteriores
          divColaboradores.innerHTML = '';
            
          const colaboradoresMap = data.data.map((data, index) => {
            const elementTitulo = document.createElement('h3');
            elementTitulo.type = 'text';
            elementTitulo.innerText = data.nome;
            divColaboradores.appendChild(elementTitulo);
                
            divColaboradores.appendChild(document.createElement('br'))

            const elementImagem = document.createElement('img');
            function toBase64(arr) {
              arr = new Uint8Array(arr)
              return btoa(
                 arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
              );
           }


            const dataUrl = `data:image/jpg;base64,${toBase64( data.imageBuffer.data)}`;
            elementImagem.src=dataUrl
            elementImagem.style.width='35vh'
            elementImagem.style.height='30vh'
            elementImagem.style.position='relative'
            elementImagem.style.top='2vh'

            divColaboradores.appendChild(elementImagem)
            
            divColaboradores.appendChild(document.createElement('br'))

            
            const elementEnviaImagem = document.createElement('input');
            elementEnviaImagem.type="file";
            elementEnviaImagem.classList.add(`inputFile${index}`);
            elementEnviaImagem.style.position='relative'
            elementEnviaImagem.style.top='5vh'
            elementEnviaImagem.onchange=handleInputFile
            divColaboradores.appendChild(elementEnviaImagem)

            function handleInputFile(e){
              console.log(e.target)
              imagemAdicionada[index] = "adicionado"
              console.log(imagemAdicionada)  
            }
            

            divColaboradores.appendChild(document.createElement('br'))
            
            const elementNome = document.createElement('input');
            elementNome.type = 'text';
            elementNome.value = data.nome;
            elementNome.style.position='relative'
            elementNome.style.top='8vh'
            divColaboradores.appendChild(elementNome);
            
            
            divColaboradores.appendChild(document.createElement('br'))
            
            const elementRg = document.createElement('input');
            elementRg.type = 'text';
            elementRg.value = data.rg;
            elementRg.style.position='relative'
            elementRg.style.top='11vh'
            divColaboradores.appendChild(elementRg);

            divColaboradores.appendChild(document.createElement('br'))
  
            const elementCpf = document.createElement('input');
            elementCpf.type = 'text';
            elementCpf.value = data.cpf;
            elementCpf.style.position='relative'
            elementCpf.style.top='15vh'
            divColaboradores.appendChild(elementCpf);

            divColaboradores.appendChild(document.createElement('br'))
  
            const elementspjanodp = document.createElement('input');
            elementspjanodp.type = 'text';
            elementspjanodp.value = data.spjanodp;
            elementspjanodp.style.position='relative'
            elementspjanodp.style.top='18vh'
            
            divColaboradores.appendChild(elementspjanodp);

            divColaboradores.appendChild(document.createElement('br'))
            

            const elementButtonSalvar = document.createElement('button');
            elementButtonSalvar.innerText="Salvar"
            elementButtonSalvar.onclick = handleButonSalvar
            elementButtonSalvar.style.position='relative'
            elementButtonSalvar.style.top='25vh'
            divColaboradores.appendChild(elementButtonSalvar)


            async function handleButonSalvar(e){
              if(imagemAdicionada[index]=="adicionado"){
              console.log("jjjjjjjjjjjjjjjjjjjjjjj")
              const formData = new FormData();
              const inputArquivoDeImagem = document.querySelector(`.inputFile${index}`)
              const arquivoDeImagem = inputArquivoDeImagem.files[0]
              const dadosAtualizados = {
                token:localStorage.getItem('cre'),
                id:data.id,
                nome: elementNome.value,
                rg: elementRg.value,
                cpf: elementCpf.value,
                spjanodp: elementspjanodp.value,
                extensao:arquivoDeImagem.name.slice(-3)
              }
              
              await formData.append('imagem', arquivoDeImagem);

               await Object.entries(dadosAtualizados).forEach(([key, value]) => {
                formData.append(key, value);
              }); 

              formData.append('_method', 'PUT');
              
              axios.put("http://localhost:21009/editaColaborador",
               await formData,
               {headers: {
                'Content-Type': 'multipart/form-data'
              }}).then((data)=>{
                  alert("Edição salva com sucesso")
              }).catch((err)=>{alert(err.response.data.message)})
                
              }else{
                const dadosAtualizados = {
                  token:localStorage.getItem('cre'),
                  id:data.id,
                  nome: elementNome.value,
                  rg: elementRg.value,
                  cpf: elementCpf.value,
                  spjanodp: elementspjanodp.value,
                }
                axios.put("http://localhost:21009/editaColaborador",await dadosAtualizados,
                ).then(
                  (data)=>{
                    alert("Edição salva com sucesso")
                  }
                )

                .catch((err)=>{alert(err.response.data.message)})
              }

              
            }

            async function handleButtonDeletar(){
              const confirmacao = await window.confirm('Deseja mesmo excluir o colaborador?');

              if(confirmacao==true){
              try{const response = await axios.delete(`http://localhost:21009/deletaColaborador?id=${data.id}&token=${localStorage.getItem('cre')}`, { headers: { Authorization: 'Bearer token' } })
                  alert(response.data.message)
              }
              catch(err){alert(err.response.data.message)}
            }else{
              
            }
           
          }

            const elementButtonDeletar = document.createElement('button');
            elementButtonDeletar.innerText="Deletar"
            elementButtonDeletar.onclick= handleButtonDeletar
            elementButtonDeletar.style.position='relative'
            elementButtonDeletar.style.top='25vh'
            divColaboradores.appendChild(elementButtonDeletar)

            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            
            divColaboradores.appendChild(document.createElement('br'))
            const elementHr = document.createElement('hr');
            elementHr.style.position='relative';
            elementHr.style.top="1vh";
            divColaboradores.appendChild(elementHr)
            

            
          });
        }).catch((data)=>console.log(data));
    }












     else if (selectPesquisar === 'Rg') {
     
      
      imagemAdicionada.splice(0, imagemAdicionada.length);
      axios
        .get(`http://localhost:21009/colaboradoresPorRg?rg=${inputPesquisar}`)
        .then((data) => {
          if(data.data.length===0){
            alert("Não existe nenhum usuário com esse rg!")
          }
          console.log(data)
          
          const divColaboradores = document.querySelector('.divColaboradores');
          
          // Limpar os elementos anteriores
          divColaboradores.innerHTML = '';
            
          const colaboradoresMap = data.data.map((data, index) => {
            const elementTitulo = document.createElement('h3');
            elementTitulo.type = 'text';
            elementTitulo.innerText = data.nome;
            divColaboradores.appendChild(elementTitulo);
                
            divColaboradores.appendChild(document.createElement('br'))

            const elementImagem = document.createElement('img');
            function toBase64(arr) {
              arr = new Uint8Array(arr)
              return btoa(
                 arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
              );
           }


            const dataUrl = `data:image/jpg;base64,${toBase64( data.imageBuffer.data)}`;
            elementImagem.src=dataUrl
            elementImagem.style.width='35vh'
            elementImagem.style.height='30vh'
            elementImagem.style.position='relative'
            elementImagem.style.top='2vh'

            divColaboradores.appendChild(elementImagem)
            
            divColaboradores.appendChild(document.createElement('br'))

            
            const elementEnviaImagem = document.createElement('input');
            elementEnviaImagem.type="file";
            elementEnviaImagem.classList.add(`inputFile${index}`);
            elementEnviaImagem.style.position='relative'
            elementEnviaImagem.style.top='5vh'
            elementEnviaImagem.onchange=handleInputFile
            divColaboradores.appendChild(elementEnviaImagem)

            function handleInputFile(e){
              console.log(e.target)
              imagemAdicionada[index] = "adicionado"
              console.log(imagemAdicionada)  
            }
            

            divColaboradores.appendChild(document.createElement('br'))
            
            const elementNome = document.createElement('input');
            elementNome.type = 'text';
            elementNome.value = data.nome;
            elementNome.style.position='relative'
            elementNome.style.top='8vh'
            divColaboradores.appendChild(elementNome);
            
            
            divColaboradores.appendChild(document.createElement('br'))
            
            const elementRg = document.createElement('input');
            elementRg.type = 'text';
            elementRg.value = data.rg;
            elementRg.style.position='relative'
            elementRg.style.top='11vh'
            divColaboradores.appendChild(elementRg);

            divColaboradores.appendChild(document.createElement('br'))
  
            const elementCpf = document.createElement('input');
            elementCpf.type = 'text';
            elementCpf.value = data.cpf;
            elementCpf.style.position='relative'
            elementCpf.style.top='15vh'
            divColaboradores.appendChild(elementCpf);

            divColaboradores.appendChild(document.createElement('br'))
  
            const elementspjanodp = document.createElement('input');
            elementspjanodp.type = 'text';
            elementspjanodp.value = data.spjanodp;
            elementspjanodp.style.position='relative'
            elementspjanodp.style.top='18vh'
            
            divColaboradores.appendChild(elementspjanodp);

            divColaboradores.appendChild(document.createElement('br'))
            

            const elementButtonSalvar = document.createElement('button');
            elementButtonSalvar.innerText="Salvar"
            elementButtonSalvar.onclick = handleButonSalvar
            elementButtonSalvar.style.position='relative'
            elementButtonSalvar.style.top='25vh'
            divColaboradores.appendChild(elementButtonSalvar)


            async function handleButonSalvar(e){
              if(imagemAdicionada[index]=="adicionado"){
                console.log(imagemAdicionada[index])
                console.log(',,',imagemAdicionada)
                const formData = new FormData();
              const inputArquivoDeImagem = document.querySelector(`.inputFile${index}`)
              const arquivoDeImagem = inputArquivoDeImagem.files[0]
              const dadosAtualizados = {
                token:localStorage.getItem('cre'),
                id:data.id,
                nome: elementNome.value,
                rg: elementRg.value,
                cpf: elementCpf.value,
                spjanodp: elementspjanodp.value,
                extensao:arquivoDeImagem.name.slice(-3)
              }
              
              await formData.append('imagem', arquivoDeImagem);

               await Object.entries(dadosAtualizados).forEach(([key, value]) => {
                formData.append(key, value);
              }); 

              formData.append('_method', 'PUT');
              
              axios.put("http://localhost:21009/editaColaborador",
               await formData,
               {headers: {
                'Content-Type': 'multipart/form-data'
              }}).then((data)=>{
                  alert("Edição salva com sucesso")
              })
                
              }else{
                const dadosAtualizados = {
                  token:localStorage.getItem('cre'),
                  id:data.id,
                  nome: elementNome.value,
                  rg: elementRg.value,
                  cpf: elementCpf.value,
                  spjanodp: elementspjanodp.value,
                }
                axios.put("http://localhost:21009/editaColaborador",await dadosAtualizados,
                ).then(
                  (data)=>{
                    alert("Edição salva com sucesso")
                  }
                )
                .catch((err)=>{alert(err)})
              }

              
            }

            async function handleButtonDeletar(){
              const confirmacao = await window.confirm('Deseja mesmo excluir o colaborador?');

              if(confirmacao==true){
              try{const response = await axios.delete(`http://localhost:21009/deletaColaborador?id=${data.id}&token=${localStorage.getItem('cre')}`, { headers: { Authorization: 'Bearer token' } })
                  alert(response.data.message)
              }
              catch(err){alert(err.response.data.message)}
            }else{
              
            }
          }

            const elementButtonDeletar = document.createElement('button');
            elementButtonDeletar.innerText="Deletar"
            elementButtonDeletar.style.position='relative'
            elementButtonDeletar.style.top='25vh'
            elementButtonDeletar.onclick = handleButtonDeletar
            divColaboradores.appendChild(elementButtonDeletar)

            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            
            divColaboradores.appendChild(document.createElement('br'))
            const elementHr = document.createElement('hr');
            elementHr.style.position='relative';
            elementHr.style.top="1vh";
            divColaboradores.appendChild(elementHr)
            

            
          });
        });
    
    
    }


    



    else if (selectPesquisar === 'Cpf') {
     
      
      imagemAdicionada.splice(0, imagemAdicionada.length);
      axios
        .get(`http://localhost:21009/colaboradoresPorCpf?cpf=${inputPesquisar}`)
        .then((data) => {
          if(data.data.length===0){
            alert("Não existe nenhum usuário com esse cpf!")
          }
          console.log(data)
          
          const divColaboradores = document.querySelector('.divColaboradores');
          
          // Limpar os elementos anteriores
          divColaboradores.innerHTML = '';
            
          const colaboradoresMap = data.data.map((data, index) => {
            const elementTitulo = document.createElement('h3');
            elementTitulo.type = 'text';
            elementTitulo.innerText = data.nome;
            divColaboradores.appendChild(elementTitulo);
                
            divColaboradores.appendChild(document.createElement('br'))

            const elementImagem = document.createElement('img');
            function toBase64(arr) {
              arr = new Uint8Array(arr)
              return btoa(
                 arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
              );
           }


            const dataUrl = `data:image/jpg;base64,${toBase64( data.imageBuffer.data)}`;
            elementImagem.src=dataUrl
            elementImagem.style.width='35vh'
            elementImagem.style.height='30vh'
            elementImagem.style.position='relative'
            elementImagem.style.top='2vh'

            divColaboradores.appendChild(elementImagem)
            
            divColaboradores.appendChild(document.createElement('br'))

            
            const elementEnviaImagem = document.createElement('input');
            elementEnviaImagem.type="file";
            elementEnviaImagem.classList.add(`inputFile${index}`);
            elementEnviaImagem.style.position='relative'
            elementEnviaImagem.style.top='5vh'
            elementEnviaImagem.onchange=handleInputFile
            divColaboradores.appendChild(elementEnviaImagem)

            function handleInputFile(e){
              console.log(e.target)
              imagemAdicionada[index] = "adicionado"
              console.log(imagemAdicionada)  
            }
            

            divColaboradores.appendChild(document.createElement('br'))
            
            const elementNome = document.createElement('input');
            elementNome.type = 'text';
            elementNome.value = data.nome;
            elementNome.style.position='relative'
            elementNome.style.top='8vh'
            divColaboradores.appendChild(elementNome);
            
            
            divColaboradores.appendChild(document.createElement('br'))
            
            const elementRg = document.createElement('input');
            elementRg.type = 'text';
            elementRg.value = data.rg;
            elementRg.style.position='relative'
            elementRg.style.top='11vh'
            divColaboradores.appendChild(elementRg);

            divColaboradores.appendChild(document.createElement('br'))
  
            const elementCpf = document.createElement('input');
            elementCpf.type = 'text';
            elementCpf.value = data.cpf;
            elementCpf.style.position='relative'
            elementCpf.style.top='15vh'
            divColaboradores.appendChild(elementCpf);

            divColaboradores.appendChild(document.createElement('br'))
  
            const elementspjanodp = document.createElement('input');
            elementspjanodp.type = 'text';
            elementspjanodp.value = data.spjanodp;
            elementspjanodp.style.position='relative'
            elementspjanodp.style.top='18vh'
            
            divColaboradores.appendChild(elementspjanodp);

            divColaboradores.appendChild(document.createElement('br'))
            

            const elementButtonSalvar = document.createElement('button');
            elementButtonSalvar.innerText="Salvar"
            elementButtonSalvar.onclick = handleButonSalvar
            elementButtonSalvar.style.position='relative'
            elementButtonSalvar.style.top='25vh'
            divColaboradores.appendChild(elementButtonSalvar)


            async function handleButonSalvar(e){
              if(imagemAdicionada[index]=="adicionado"){
                console.log(imagemAdicionada[index])
                console.log(',,',imagemAdicionada)
                const formData = new FormData();
              const inputArquivoDeImagem = document.querySelector(`.inputFile${index}`)
              const arquivoDeImagem = inputArquivoDeImagem.files[0]
              const dadosAtualizados = {
                token:localStorage.getItem('cre'),
                id:data.id,
                nome: elementNome.value,
                rg: elementRg.value,
                cpf: elementCpf.value,
                spjanodp: elementspjanodp.value,
                extensao:arquivoDeImagem.name.slice(-3)
              }
              
              await formData.append('imagem', arquivoDeImagem);

               await Object.entries(dadosAtualizados).forEach(([key, value]) => {
                formData.append(key, value);
              }); 

              formData.append('_method', 'PUT');
              
              axios.put("http://localhost:21009/editaColaborador",
               await formData,
               {headers: {
                'Content-Type': 'multipart/form-data'
              }}).then((data)=>{
                  alert("Edição salva com sucesso")
              })
                
              }else{
                const dadosAtualizados = {
                  token:localStorage.getItem('cre'),
                  id:data.id,
                  nome: elementNome.value,
                  rg: elementRg.value,
                  cpf: elementCpf.value,
                  spjanodp: elementspjanodp.value,
                }
                axios.put("http://localhost:21009/editaColaborador",await dadosAtualizados,
                ).then(
                  (data)=>{
                    alert("Edição salva com sucesso")
                  }
                )
                .catch((err)=>{alert(err)})
              }

              
            }


            async function handleButtonDeletar(){
              const confirmacao = await window.confirm('Deseja mesmo excluir o colaborador?');

              if(confirmacao==true){
              try{const response = await axios.delete(`http://:21009/deletaColaborador?id=${data.id}&token=${localStorage.getItem('cre')}`, { headers: { Authorization: 'Bearer token' } })
                  alert(response.data.message)
              }
              catch(err){alert(err.response.data.message)}
            }else{
              
            }
          }


            const elementButtonDeletar = document.createElement('button');
            elementButtonDeletar.innerText="Deletar"
            elementButtonDeletar.onclick=handleButtonDeletar
            elementButtonDeletar.style.position='relative'
            elementButtonDeletar.style.top='25vh'
            
            divColaboradores.appendChild(elementButtonDeletar)

            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            
            divColaboradores.appendChild(document.createElement('br'))
            const elementHr = document.createElement('hr');
            elementHr.style.position='relative';
            elementHr.style.top="1vh";
            divColaboradores.appendChild(elementHr)
            

            
          });
        });
    
    
    }

  }
  