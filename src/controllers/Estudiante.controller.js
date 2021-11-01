const EstudianteService = require('../services/Estudiante.service');
const CursoAlumnos = require ('../models/cursoalumnos.model');  

const consultaEstudiantes = async (req, res) => {
    CursoAlumnos.find().populate({patch: 'rutalumno'}).exec((err, cursoalumno) => {
        if(err){
            res.status(500).send({message:'Error de conexión a la BD'});
        }else{
            if(!cursoalumno){
                res.status(404).send({message: 'No existe el curso'});
            }else{
                Curso.populate(cursoalumno, {path: 'codigocurso'}, (err, docingreso) => {
                    
                    if(err){
                        res.status(500).send({message: 'Error en la peticiona la BD'});
                    }else{
                        res.status(200).send(cursoalumno.EstudianteService.guardarEstudiantes(req.body)
                    
                        );
                       
                    }
                });
            }
        }
    });
    

    
}

const guardarEstudiantes = async (req, res) => {
    console.log(req.body);

    
    res.json({
        Estudiantes: await EstudianteService.guardarEstudiantes(req.body)

    });
  
}

 const eliminarEstudiantes = async(req, res) => {
     res.json({
         Estudiantes: await EstudianteService.eliminarEstudiantes(req.params.id)

     });

 }

 const modificarEstudiantes = async(req, res) => {
     res.json({
         Estudiantes: await EstudianteService.modificarEstudiantes(req.body)
     })
 }



module.exports = {consultaEstudiantes, guardarEstudiantes, eliminarEstudiantes, modificarEstudiantes};

