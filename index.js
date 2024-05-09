// importacion de libs
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

// rutas
const bienvenidaruta = require('./rutas/bienvenidaruta');

//configuracion de environment
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

//manejo de JSON
app.use(express.json());
//Conexion con Mongodb
mongoose.connect(MONGO_URI)
.then(() => { 
    console.log('Conexion Exitosa');
    app.listen(PORT, () => {console.log("Servidor Express Corriendo en el Puerto: "+PORT)})
}
).catch( error => console.log('Error de Conexion', error));

//utilizar las rutas de bienvenida
app.use('/bienvenida', bienvenidaruta);