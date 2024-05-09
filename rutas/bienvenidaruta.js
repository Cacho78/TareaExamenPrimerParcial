const express = require('express');
const rutas = express.Router();
const bienvenidaModel = require('../autos/bienvenida');

//endpoint 1. traer todo
rutas.get('/getbienvenida', async (req, res) =>{
    try {
        const bienvenida = await bienvenidaModel.find();
        res.json(bienvenida);

// bienvenida = wait

    } catch(error){
        res.status(500).json ({mensaje: error.mensage});
    }
})

//endpoint 2. Crear
rutas.post('/crear', async (req, res) => {
    const bienvenida = new bienvenidaModel({
    
        universidad: req.body.universidad,
        nombre: req.body.nombre,
        docente: req.body.docente,
        materia: req.body.materia,
        empresaToyota: req.body.empresaToyota,
        empresaHonda: req.body.empresaHonda,
        año: req.body.año,
    })
    try {
        const nuevabienvenida = await bienvenida.save();
        res.status(201).json(nuevabienvenida);
    } catch (error) {
        res.status(400).json({ mensaje :  error.message})
    }
});
//endpoint 3. Editar
rutas.put('/editar/:id', async (req, res) => {
    try {
        const recetabienvenida = await bienvenidaModel.findByIdAndUpdate(req.params.id, req.body, { new : true });
        if (!recetabienvenida)
            return res.status(404).json({ mensaje : 'bienvenida no encontrada!!!'});
        else
            return res.status(201).json(bienvenidaEditada);

    } catch (error) {
        res.status(400).json({ mensaje :  error.message})
    }
})
//ENDPOINT 4. eliminar
rutas.delete('/eliminar/:id',async (req, res) => {
    try {
       const bienvenidaEliminada = await bienvenidaModel.findByIdAndDelete(req.params.id);
       if (!bienvenidaEliminada)
            return res.status(404).json({ mensaje : 'bienvenida no encontrada!!!'});
       else 
            return res.json({mensaje :  'bienvenida eliminada'});    
       } 
    catch (error) {
        res.status(500).json({ mensaje :  error.message})
    }
});

module.exports = rutas;