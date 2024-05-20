const express = require('express');
const rutas = express.Router();
const bienvenidaModel = require('../autos/bienvenida');
const usuarioModel = require('../autos/Usuario');
const monitoreoModel = require('../autos/monitoreo');
const mongoose = require('mongoose');



module.exports = rutas;