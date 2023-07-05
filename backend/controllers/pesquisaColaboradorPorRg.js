const meuCrud = require('../CRUD/meuCrud.js')
const fs = require('fs')
async function controllerPesquisaColaboradorPorRg(req, res) {
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