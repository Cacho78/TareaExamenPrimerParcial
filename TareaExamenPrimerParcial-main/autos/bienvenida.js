const mongoose = require('mongoose');
// esquema
const bienvenidaSchema = new mongoose.Schema({
    universidad: String,
    nombre: String,
    docente: String,
    materia: String,
    empresaToyota: String,
    empresaHonda: String,
    año: Number
});
const bienvenidaModel = mongoose.model('Bienvenida',bienvenidaSchema, 'bienvenida');
module.exports = bienvenidaModel;