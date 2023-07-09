const meuCrud = require('../CRUD/meuCrud.js')
const fs = require('fs')
async function controllerPesquisaColaboradorPorRg(req, res) {
    
    const regexRg = /^[a-zA-Z0-9]+$/
    if(!regexRg.test(req.query.rg)){
        return res.status(400).json({message:'Apenas números e uma letra são permitidos!'})
    }
    
    const crud = new meuCrud()
    
    const colaboradores = await crud.buscarColabolaboradorPorRg(req.query.rg)
    
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

module.exports = controllerPesquisaColaboradorPorRg