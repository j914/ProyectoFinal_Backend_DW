const  CatedraticoModel = require ('../models/Catedratico.model');

class CatedraticoService {
    CatedraticoService () {}

    async consultarCatedratico(){
        try{
            return await  CatedraticoModel.find();

        } catch (error){
            return error;
        }
    }

    async guardarCatedratico(catedratico = new  CatedraticoModel()) {
        try {
            var  CatedraticoGuardado;
            await  CatedraticoModel.create(catedratico).then((value) => {
                CatedraticoGuardado = value;

            });

            return  CatedraticoGuardado;
        } catch (error) {
            console.log(Error);
        }
    }

    async eliminarCatedratico (idc){
        console.log(idc);
        var  CatedraticoEliminado
        try {
            await  CatedraticoModel.findOneAndRemove({
                _id: idc
            }).then((value) => {
                CatedraticoEliminado = value;
            });
return  CatedraticoEliminado;

            
        } catch (error) {
console.log(error);



        }
    }

    async modificarCatedratico (newCatedratico){
        var  CatedraticoModificado;
        try {
            await  CatedraticoModel.findByIdAndUpdate({
                _id: newCatedratico._id
            }, newCatedratico).then ((value) => {
                CatedraticoModificado = value;

            })
            return  CatedraticoModificado;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new  CatedraticoService();
