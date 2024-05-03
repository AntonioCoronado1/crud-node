const { Schema, model } = require('mongoose');

const VisitaSchema = Schema({
    id_cliente:{
        type: String,
        required:[true, 'Se requiere de una descripcion']
    },
    nombre:{
        type: String,
        required:[true, 'Se requiere de una descripcion']
    },
    id_inmueble:{
        type: String,
        required:[true, 'Se requiere de una descripcion']
    },
    descripcion:{
        type: String,
        required:[true, 'Se requiere de una descripcion']
    },
    fecha:{
        type: Date,
        required:[true, 'Se requiere de una descripcion']
    },
    comentarios:{
        type: String,
        required:[true, 'Se requiere de una descripcion']
    }
});
VisitaSchema.methods.toJSON = function() {
    const { __v, ...visita  } = this.toObject();
    
    return visita;
};
module.exports = model('Visita',VisitaSchema);