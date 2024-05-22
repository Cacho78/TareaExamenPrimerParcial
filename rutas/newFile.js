const bienvenidaModel = require('../autos/bienvenida');
const { rutas } = require('./bienvenidaruta');

// Endpoint 2. para crear una nueva placa
rutas.post('/postbienvenida', async (req, res) => {
    try {
        const { universidad, nombre, docente, materia, empresa, modelo, año, usuario } = req.body;

        const bienvenida = new bienvenidaModel({
            universidad: String,
            nombre: String,
            docente: String,
            materia: String,
            empresa: String,
            modelo: String,
            año: Number,
            usuario: 
        });

        await bienvenida.save();

        res.status(201).json({ message: ' registrada exitosamente', data: bienvenida });
    } catch (error) {
        res.status(500).json({ message: 'Error al registro', error });
    }
});
