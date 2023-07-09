const meuCrud = require('../CRUD/meuCrud.js')
const fs = require('fs')
async function controllerPesquisaColaboradorPorNome(req, res) {
    const regexNome = /^[a-zA-Z\s]+$/

    const crud = new meuCrud()

    if(!regexNome.test(req.query.nome)){
        return res.status(400).json({message:"Só são permitidas letras e espaços no campo de busca!"})
    }
    const colaboradores = await crud.buscarColabolaboradorPorNome(req.query.nome)
    
    const colaboradoresMap = await colaboradores.map((elem)=>{
        const imagePath = "./img/" + elem.img
        
        const imageBuffer = fs.readFileSync(imagePath);
        
        return({
            id:elem.id,
            nome:elem.nome,
            rg:elem.rg,
            cpf:elem.cpf,
            spjanodp:elem.spjanodp,
            img: elem.img,
            imageBuffer: imageBuffer, 
        })
}
    )
        res.status(200).json(colaboradoresMap)
    
}

module.exports = controllerPesquisaColaboradorPorNome