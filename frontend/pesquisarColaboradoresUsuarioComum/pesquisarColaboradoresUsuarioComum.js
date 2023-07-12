const divColaboradores = document.querySelector(".divColaboradores")
const selectNomeRgCpf = document.querySelector(".selectNomeRgCpf")
const inputPesquisaColaborador = document.querySelector(".inputPesquisaColaborador")

async function handleButtonPesquisar(){
    if(inputPesquisaColaborador.value===''){
        alert("Digíte o nome do colaborador!")
    }
    else{
    divColaboradores.innerHTML=''
    if(selectNomeRgCpf.value === "Nome"){
        try{
        const resposta = await axios.get(`http://sergiomelobackend.com.br:21009/colaboradoresPorNome?nome=${inputPesquisaColaborador.value}&token=${localStorage.getItem('cre')}`)
        
        if(resposta.data.length===0){
            alert("Colaborador não encontrado")
        }
    
        const respostaMap = resposta.data.map((data)=>{
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            const elementH1 = document.createElement('h2')
            elementH1.innerHTML = data.nome
            divColaboradores.appendChild(elementH1)
    
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
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                
    
                const elementSpanNome = document.createElement('span');
                elementSpanNome.innerHTML=`Nome: ${data.nome}`
                elementSpanNome.style.fontSize="calc(1.5vw + 0.5vh)"
                divColaboradores.appendChild(elementSpanNome)
    
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))

                
                const elementSpanTelefone = document.createElement('span');
                elementSpanTelefone.innerHTML=`Telefone: ${data.telefone}`
                elementSpanTelefone.style.fontSize="calc(1.5vw + 0.5vh)"
                divColaboradores.appendChild(elementSpanTelefone)
    
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
    


                const elementSpanRg = document.createElement('span');
                elementSpanRg.innerHTML=`Rg: ${data.rg}`
                elementSpanRg.style.fontSize="calc(1.5vw + 0.5vh)"
                divColaboradores.appendChild(elementSpanRg)
    
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
    
                const elementSpanCpf = document.createElement('span');
                elementSpanCpf.innerHTML=`Cpf: ${data.cpf}`
                elementSpanCpf.style.fontSize="calc(1.5vw + 0.5vh)"
                divColaboradores.appendChild(elementSpanCpf)
    
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
    
                const elementSpanSpjAnoDp = document.createElement('span');
                elementSpanSpjAnoDp.innerHTML=`Nome: ${data.spjanodp}`
                elementSpanSpjAnoDp.style.fontSize="calc(1.5vw + 0.5vh)"
                divColaboradores.appendChild(elementSpanSpjAnoDp)
    
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
            
                

                
            
        })

    }catch(err){
        alert(err.response.data.message)
    }

    }


    







    if(selectNomeRgCpf.value === "Rg"){


        try{
        const resposta = await axios.get(`http://sergiomelobackend.com.br:21009/colaboradoresPorRg?rg=${inputPesquisaColaborador.value}&token=${localStorage.getItem('cre')}`)
        if(resposta.data.length===0){
            alert("Colaborador não encontrado")
        }
    
        const respostaMap = resposta.data.map((data)=>{
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            const elementH1 = document.createElement('h2')
            elementH1.innerHTML = data.nome
            divColaboradores.appendChild(elementH1)
    
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
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                
    
                const elementSpanNome = document.createElement('span');
                elementSpanNome.innerHTML=`Nome: ${data.nome}`
                elementSpanNome.style.fontSize="calc(1.5vw + 0.5vh)"
                divColaboradores.appendChild(elementSpanNome)
    
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
    

                const elementSpanTelefone = document.createElement('span');
                elementSpanTelefone.innerHTML=`Telefone: ${data.telefone}`
                elementSpanTelefone.style.fontSize="calc(1.5vw + 0.5vh)"
                divColaboradores.appendChild(elementSpanTelefone)
    
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
    



                const elementSpanRg = document.createElement('span');
                elementSpanRg.innerHTML=`Rg: ${data.rg}`
                elementSpanRg.style.fontSize="calc(1.5vw + 0.5vh)"
                divColaboradores.appendChild(elementSpanRg)
    
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
    
                const elementSpanCpf = document.createElement('span');
                elementSpanCpf.innerHTML=`Cpf: ${data.cpf}`
                elementSpanCpf.style.fontSize="calc(1.5vw + 0.5vh)"
                divColaboradores.appendChild(elementSpanCpf)
    
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
    
                const elementSpanSpjAnoDp = document.createElement('span');
                elementSpanSpjAnoDp.innerHTML=`Nome: ${data.spjanodp}`
                elementSpanSpjAnoDp.style.fontSize="calc(1.5vw + 0.5vh)"
                divColaboradores.appendChild(elementSpanSpjAnoDp)
    
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
            
                

                
            
        })
    }catch(err){
        alert(err.response.data.message)
    }

    }








    if(selectNomeRgCpf.value === "Cpf"){

        try{
        const resposta = await axios.get(`http://sergiomelobackend.com.br:21009/colaboradoresPorCpf?cpf=${inputPesquisaColaborador.value}&token=${localStorage.getItem('cre')}`)
        if(resposta.data.length===0){
            alert("Colaborador não encontrado")
        }
    
        const respostaMap = resposta.data.map((data)=>{
            divColaboradores.appendChild(document.createElement('br'))
            divColaboradores.appendChild(document.createElement('br'))
            const elementH1 = document.createElement('h2')
            elementH1.innerHTML = data.nome
            divColaboradores.appendChild(elementH1)
    
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
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                
    
                const elementSpanNome = document.createElement('span');
                elementSpanNome.innerHTML=`Nome: ${data.nome}`
                elementSpanNome.style.fontSize="calc(1.5vw + 0.5vh)"
                divColaboradores.appendChild(elementSpanNome)
    
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
    

                const elementSpanTelefone = document.createElement('span');
                elementSpanTelefone.innerHTML=`Telefone: ${data.telefone}`
                elementSpanTelefone.style.fontSize="calc(1.5vw + 0.5vh)"
                divColaboradores.appendChild(elementSpanTelefone)
    
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))


                const elementSpanRg = document.createElement('span');
                elementSpanRg.innerHTML=`Rg: ${data.rg}`
                elementSpanRg.style.fontSize="calc(1.5vw + 0.5vh)"
                divColaboradores.appendChild(elementSpanRg)
    
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
    
                const elementSpanCpf = document.createElement('span');
                elementSpanCpf.innerHTML=`Cpf: ${data.cpf}`
                elementSpanCpf.style.fontSize="calc(1.5vw + 0.5vh)"
                divColaboradores.appendChild(elementSpanCpf)
    
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
                divColaboradores.appendChild(document.createElement('br'))
    
                const elementSpanSpjAnoDp = document.createElement('span');
                elementSpanSpjAnoDp.innerHTML=`Nome: ${data.spjanodp}`
                elementSpanSpjAnoDp.style.fontSize="calc(1.5vw + 0.5vh)"
                divColaboradores.appendChild(elementSpanSpjAnoDp)
    
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
            
                

                
            
        })
    }catch(err){
        alert(err.response.data.message)
    }
    }
}
}