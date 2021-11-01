const UsuarioModel = require ('../models/Usuario.model');

class UsuarioService {
    EstudianteService () {}

    async consultarUsuario(){
        try{
            return await UsuarioModel.find();

        } catch (error){
            return error;
        }
    }

    async guardarUsuario(usuario = new UsuarioModel()) {
        try {
            var UsuarioGuardado;
            await UsuarioModel.create(usuario).then((value) => {
            UsuarioGuardado = value;

            });

            return UsuarioGuardado;
        } catch (error) {
            console.log(Error);
        }
    }

    async eliminarUsuario (idc){
        console.log(idc);
        var UsuarioEliminado
        try {
            await UsuarioModel.findOneAndRemove({
                _id: idc
            }).then((value) => {
                UsuarioEliminado = value;
            });
return UsuarioEliminado;

            
        } catch (error) {
console.log(error);



        }
    }

    async modificarUsuario (newUsuario){
        var UsuarioModificado;
        try {
            await UsuarioModel.findByIdAndUpdate({
                _id: newUsuario._id
            }, newUsuario).then ((value) => {
                UsuarioModificado = value;

            })
            return UsuarioModificado;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new UsuarioService();
