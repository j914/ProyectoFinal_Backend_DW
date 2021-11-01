const CatedraticoService = require('../services/Catedratico.service');


const consultaCatedratico = async (req, res) => {
    res.json({
        Catedraticos: await CatedraticoService.consultarCatedratico()
    });
}

const guardarCatedratico = async (req, res) => {
    console.log(req.body);
    res.json({
        Catedraticos: await CatedraticoService.guardarCatedratico(req.body)
    });
}

 const eliminarCatedratico = async(req, res) => {
     res.json({
        Catedraticos: await CatedraticoService.eliminarCatedratico(req.params.id)

     });

 }

 const modificarCatedratico = async(req, res) => {
     res.json({
        Catedraticos: await CatedraticoService.modificarCatedratico(req.body)
     })
 }



module.exports = {consultaCatedratico, guardarCatedratico, eliminarCatedratico, modificarCatedratico};

