
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
    },tamaño:{
        type:Number
    },urbanizacion:{
        type: String,
    },habitaciones:{
        type:Number
    },baños:{
        type:Number
    },cocinas:{
        type:Number
    },puerta_blindada:{
        type: Boolean,
    },parqueadero:{
        type: Boolean,
    }, num_puertas:{
         type:Number,
    },diafono:{
        type: Boolean,
    },acondicionado:{
       type: Boolean,
    },zona_ciudad:{
            type:String,
    }, 
    estado:{
        type:String,
        required:true,
        enum:['VENTA','ALQUILER','VENTA O ALQUILER']
    },
    precio_alquiler:{
        type:Number,
        
    },
    precio_venta:{
        type:Number,
        
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
        enum:['Centro','Norte','Sur','Oriente','Occidente'],
    }
});

InmuebleSchema.methods.toJSON = function() {
    const { __v, ...inmueble  } = this.toObject();
    
    return inmueble;
};

module.exports = model('Inmueble', InmuebleSchema);