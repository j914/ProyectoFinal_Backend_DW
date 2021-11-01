const { Schema, model }  = require ('mongoose');
const RolSchema = new Schema ({
    id_Rol: String,
    Rol: String,
});

module.exports = model('Roles', RolSchema);
