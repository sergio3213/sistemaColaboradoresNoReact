const meuCrud = require('../CRUD/meuCrud.js')
const fs = require('fs')
async function controllerPesquisaColaboradorPorCpf(req, res) {
    const regexCpf = /^[0-9]+$/
    if(!regexCpf.test(req.query.cpf)){
        return res.status(400).json({message:'Apenas números são permitidos!'})
    }
    const crud = new meuCrud()
    const colaboradores = await crud.buscarColabolaboradorPorCpf(req.query.cpf)
    
    console.log('mmmmmmmmm',colaboradores)
    const colaboradoresMap = await colaboradores.map((elem)=>{
        const imagePath = "./img/" + elem.img
        
        const imageBuffer = fs.readFileSync(imagePath);
        
        return({
            id:elem.id,
            nome:elem.nome,
            telefone:elem.telefone,
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

module.exports = controllerPesquisaColaboradorPorCpf