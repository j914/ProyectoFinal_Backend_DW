'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CursoAlumnosSchema = Schema({
    //guardamos el Objetcid del modelo "curso"
    codigocurso: {type: Schema.Types.ObjectId, ref: 'curso' },
    //guardamos el Objetcid del modelo "alumno"
    rutalumno: {type: Schema.Types.ObjectId, ref: 'alumno' },
    licencia: String,
    ncontrato: String,
    total: Number,
    saldo: Number
});

module.exports = mongoose.model('cursoalumno', CursoAlumnosSchema);