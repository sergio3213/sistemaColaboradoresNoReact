const divColaboradores = document.querySelector(".divColaboradores")
const selectNomeRgCpf = document.querySelector(".selectNomeRgCpf")
const inputPesquisaColaborador = document.querySelector(".inputPesquisaColaborador")

async function handleButtonPesquisar(){
    divColaboradores.innerHTML=''
    if(selectNomeRgCpf.value === "Nome"){

        const resposta = await axios.get(`http://localhost:21009/colaboradoresPorNome?nome=${inputPesquisaColaborador.value}`)
        
    
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

    }


    







    if(selectNomeRgCpf.value === "Rg"){

        const resposta = await axios.get(`http://localhost:21009/colaboradoresPorRg?rg=${inputPesquisaColaborador.value}`)
        
    
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

    }








    if(selectNomeRgCpf.value === "Cpf"){

        const resposta = await axios.get(`http://localhost:21009/colaboradoresPorCpf?cpf=${inputPesquisaColaborador.value}`)
        
    
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

    }
}