
const { Schema, model, default: mongoose } = require('mongoose');

const options = { discriminatorKey: 'tipo' };
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
    // tipo:{
    //     type:String,
    //     required:true,
    //     enum:['PISO NUEVO','PISO DE OCASION','VILLA','CASA','LOCAL']
    // },
    estado:{
        type:String,
        required:true,
        enum:['VENTA','ALQUILER','VENTA O ALQUILER']
    },
    precio:{
        type:Number
    },
    nom_propietario:{
        type:String,
        required:true
    },
    tel_propietario:{
        type:String,
        required:true
    },
    
},options);

// const VillaInmueble = InmuebleSchema.discriminator(
//     'Villa', Schema({
//         tamaño:{
//             type:Number,
//             required:[true, 'La superficie es obligatoria']
//         },urbanizacion:{
//             type: String,
//             required:[true, 'La direccion es obligatoria']
//         },habitaciones:{
//             type:Number,
//             required:[true, 'La superficie es obligatoria']
//         },baños:{
//             type:Number,
//             required:[true, 'La superficie es obligatoria']
//         },cocinas:{
//             type:Number,
//             required:[true, 'La superficie es obligatoria']
//         },puerta_blindada:{
//             type: Boolean,
//             default:true
//         },parqueadero:{
//             type: Boolean,
//             default:true
//         } 
//     })
// );

// const CasaInmueble = InmuebleSchema.discriminator(
//     'Casa', Schema({
//         habitaciones:{
//             type:Number,
//             required:[true, 'La superficie es obligatoria']
//         },baños:{
//             type:Number,
//             required:[true, 'La superficie es obligatoria']
//         },cocinas:{
//             type:Number,
//             required:[true, 'La superficie es obligatoria']
//         },puerta_blindada:{
//             type: Boolean,
//             default:true
//         },parqueadero:{
//             type: Boolean,
//             default:true
//         },zona_ciudad:{
//         type:String,
//         required:true
//         }
//     })
// );
// const PisoNuevoInmueble = InmuebleSchema.discriminator(
//     'Piso Nuevo', Schema({
//         habitaciones:{
//             type:Number,
//             required:[true, 'La superficie es obligatoria']
//         },baños:{
//             type:Number,
//             required:[true, 'La superficie es obligatoria']
//         },cocinas:{
//             type:Number,
//             required:[true, 'La superficie es obligatoria']
//         },puerta_blindada:{
//             type: Boolean,
//             default:true
//         },parqueadero:{
//             type: Boolean,
//             default:true
//         },zona_ciudad:{
//             type:String,
//             required:true
//         }
//     })
// );
// const PisoOcasionInmueble = InmuebleSchema.discriminator(
//     'Piso de Ocasión', Schema({
//         habitaciones:{
//             type:Number,
//             required:[true, 'La superficie es obligatoria']
//         },baños:{
//             type:Number,
//             required:[true, 'La superficie es obligatoria']
//         },cocinas:{
//             type:Number,
//             required:[true, 'La superficie es obligatoria']
//         },puerta_blindada:{
//             type: Boolean,
//             default:true
//         },parqueadero:{
//             type: Boolean,
//             default:true
//         },zona_ciudad:{
//             type:String,
//             required:true
//             }
//     })
// );
// const LocalInmueble = InmuebleSchema.discriminator(
//     'Local', Schema({
//         num_puertas:{
//             type:Number,
//             required:[true, 'La superficie es obligatoria']
//         },puerta_blindada:{
//             type: Boolean,
//             default:true
//         },diafono:{
//             type: Boolean,
//             default:true
//         },acondicionado:{
//             type: Boolean,
//             default:true
//         },zona_ciudad:{
//             type:String,
//             required:true
//             }
//     })
// );
// InmuebleSchema.methods.toJSON = function() {
//     const { __v, ...inmueble  } = this.toObject();
    
//     return inmueble;
// };

module.exports = model('Inmueble', InmuebleSchema);
// module.exports = model('Villa', VillaInmueble);
// module.exports = model('Casa', CasaInmueble);
// module.exports = model('Piso_nuevo', PisoNuevoInmueble);
// module.exports = model('Piso_Ocasion', PisoOcasionInmueble);
// module.exports = model('Local', LocalInmueble);