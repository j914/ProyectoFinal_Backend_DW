const CursoService = require('../services/Curso.service');


const consultarCurso = async (req, res) => {
    res.json({
        curso: await CursoService.consultarCurso()
    });
}
//aqui me quede
const guardarCurso = async (req, res) => {
    console.log(req.body);
    res.json({
        curso: await CursoService.guardarCurso(req.body)
    });
}

 const eliminarCurso = async(req, res) => {
     res.json({
         curso: await CursoService.eliminarCurso(req.params.id)

     });

 }

 const modificarCurso = async(req, res) => {
     res.json({
         curso: await CursoService.modificarCurso(req.body)
     })
 }



module.exports = {consultarCurso, guardarCurso, eliminarCurso, modificarCurso};

