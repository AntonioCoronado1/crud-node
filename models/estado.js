const { Schema, model } = require('mongoose');

const EstadoSchema = Schema({
    estado: {
        type: String,
        required: [true, 'El estado es obligatorio']
    }
});


module.exports = model( 'Estado', EstadoSchema );