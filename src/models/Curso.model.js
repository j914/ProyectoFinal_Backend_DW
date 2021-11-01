//sirve para poder usar nuevas instrucciones en javascript
var { Schema, model } = require("mongoose");
var CursoSchema = new Schema({
  codigocurso: { type: String, required: true, unique: true },

  nombrecurso: {
    type: String,
    required: [true, "El nombre del curso es obligatorio"],
  },
 
});

module.exports = model("curso", CursoSchema);
