const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    nombre:{
        type: String,
        required:[true, 'El nombre es obligatorio']
    },
    telefono:{
        type: Number,
        required:[true, 'El telefono es obligatorio']
    },
    correo:{
        type: String,
        required:[true, 'El correo es obligatorio'],
        unique: true
    }
});

ClienteSchema.methods.toJSON = function() {
    const { __v, ...cliente  } = this.toObject();
    
    return cliente;
};

module.exports = model('Cliente', ClienteSchema);
