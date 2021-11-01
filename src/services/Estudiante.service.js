//const EstudianteModel = require ('../models/Estudiante.model');
const EstudianteModel = require ('../models/cursoalumnos.model');
class EstudianteService {
    EstudianteService () {}

    async consultarEstudiantes(){
        try{
            return await EstudianteModel.find();

        } catch (error){
            return error;
        }
    }

    async guardarEstudiantes(estudiante = new EstudianteModel()) {
        try {
            var estudianteGuardado;
            await EstudianteModel.create(estudiante).then((value) => {
                estudianteGuardado = value;

            });

            return estudianteGuardado;
        } catch (error) {
            console.log(Error);
        }
    }

    async eliminarEstudiantes (idc){
        console.log(idc);
        var estudianteEliminado
        try {
            await EstudianteModel.findOneAndRemove({
                _id: idc
            }).then((value) => {
                estudianteEliminado = value;
            });
return estudianteEliminado;

            
        } catch (error) {
console.log(error);



        }
    }

    async modificarEstudiantes (newEstudiante){
        var EstudianteModificado;
        try {
            await EstudianteModel.findByIdAndUpdate({
                _id: newEstudiante._id
            }, newEstudiante).then ((value) => {
                EstudianteModificado = value;

            })
            return EstudianteModificado;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new EstudianteService();
