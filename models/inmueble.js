
const { Schema, model } = require('mongoose');

const InmuebleSchema = Schema({
    descripcion:{
        type: String,
        required:[true, 'Se requiere de una descripcion']
    },direccion:{
        type: String,
        required:[true, 'La direccion es obligatoria']
    },
    superficie:{
        type:Number,
        required:[true, 'La superficie es obligatoria']
    },
    tipo:{
        type:String,
        required:true,
        enum:['PISO NUEVO','PISO DE OCASION','VILLA','CASA','LOCAL']
    },
    estado:{
        type:String,
        required:true,
        enum:['VENTA','ALQUILER','VENTA O ALQUILER']
    },
    precio:{
        type:Number,
        required:true
    },
    nom_propietario:{
        type:String,
        required:true
    },
    tel_propietario:{
        type:String,
        required:true
    },
    zona_ciudad:{
        type:String,
        required:true
    }
});

InmuebleSchema.methods.toJSON = function() {
    const { __v, ...inmueble  } = this.toObject();
    
    return inmueble;
};

module.exports = model('Inmueble', InmuebleSchema);