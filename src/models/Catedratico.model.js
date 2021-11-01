const { Schema, model }  = require ('mongoose');
const CatedraticoSchema = new Schema ({
    catedratico_nombres: String,
    catedratico_apellidos: String,
});

module.exports = model('Catedraticos', CatedraticoSchema);
