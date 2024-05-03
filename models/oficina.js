const { Schema, model } = require('mongoose');

const OficinaSchema = Schema({
    sede:{
        type: String,
        required:[true, 'La sede es obligatoria']
    },
    direccion:{
        type: String,
        required:[true, 'La direccion es obligatoria']
    },
    telefono:{
        type: Number,
        required:[true, 'El telefono es obligatorio']
    },
    encargado:{
        type: String,
        required:[true, 'La direccion es obligatoria']
    }
});

OficinaSchema.methods.toJSON = function() {
    const { __v, ...oficina  } = this.toObject();
    
    return oficina;
}

module.exports = model('Oficina', OficinaSchema);