const CursoModel = require ('../models/Curso.model');

class CursoService {
    CursoService () {}

    async consultarCurso(){
        try{
            return await CursoModel.find();

        } catch (error){
            return error;
        }
    }

    async guardarCurso(curso={}) {
        console.log("err",curso);
        try {
            const newCurso = new CursoModel(curso);
            const cursoSaved = await newCurso.save();
            // var CursoGuardado;
            // await CursoModel.create(curso).then((value) => {
            // CursoGuardado = value;
  
            // });
            console.log({cursoSaved})
            return cursoSaved;
        } catch (error) {
            console.log(Error);
        }
    }

    async eliminarCurso (idc){
        console.log(idc);
        var CursoEliminado
        try {
            await CursoModel.findOneAndRemove({
                _id: idc
            }).then((value) => {
                CursoEliminado = value;
            });
return CursoEliminado;

            
        } catch (error) {
console.log(error);



        }
    }

    async modificarCurso (newCurso){
        var CursoModificado;
        try {
            await CursoModel.findByIdAndUpdate({
                _id: newCurso._id
            }, newCurso).then ((value) => {
                CursoModificado = value;

            })
            return CursoModificado;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new CursoService();
