const { Schema, model } = require('mongoose');

const VisitaSchema = Schema({
    
    nombre:{
        type: String,
        required:[true, 'Se requiere de una descripcion']
    },
    referencia:{
        type: Number,
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