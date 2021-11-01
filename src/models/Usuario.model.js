const { Schema, model }  = require ('mongoose');
const UsuariosSchema = new Schema ({
    usuario_nombre: String,
    usuario_password: String,
});

module.exports = model('Usuarios', UsuariosSchema);
