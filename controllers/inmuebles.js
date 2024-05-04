const { response, request } = require('express');
const Inmueble = require('../models/inmueble');
const Villa = require('../models/inmueble');
const Local = require('../models/inmueble');

const inmueblePost = async(req, res = response) =>{
    const { descripcion, direccion, superficie, tipo,
         estado,tamaño,urbanizacion,habitaciones,baños,cocinas,puerta_blindada,
         parqueadero,num_puertas,diafono,acondicionado,
         precio,nom_propietario,tel_propietario,zona_ciudad} =req.body;
    // const inmueble = new Inmueble({descripcion, direccion, superficie, tipo,
    //     estado,precio,nom_propietario,tel_propietario,zona_ciudad});
    if(tipo=="VILLA"){
    const villa = new Villa({descripcion, direccion, superficie,tamaño,urbanizacion,
        habitaciones,baños,cocinas,puerta_blindada,
        parqueadero,estado,precio,nom_propietario,tel_propietario});
        
        await villa.save();
        res.json({
            villa
        });
    }
    if(tipo=="LOCAL"){
        const local = new Local({descripcion, direccion,puerta_blindada,
            zona_ciudad,num_puertas,diafono,acondicionado,
            estado,precio,nom_propietario,tel_propietario});
            
            await local.save();
            res.json({
                local
            });
    }
    
}
const inmuebleGet = async(req = request, res = response) => {
    const { limite = 5, desde = 0}=req.query;
    const query = {estado:"VENTA O ALQUILER"};
    const[total, inmuebles] = await Promise.all([
        Inmueble.countDocuments(query),
        Inmueble.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ])
    res.json({
        total, 
        inmuebles
    });
}

const inmuebleGetbyId = async(req = request, res = response) =>{
    const { id } = req.params;
    const query = {_id:id};
    const[total, inmuebles] = await Promise.all([
        Inmueble.countDocuments(query),
        Inmueble.find(query)
    ])
    res.json({
        total, 
        inmuebles
    });
}



module.exports ={
    inmueblePost,
    inmuebleGet,
    inmuebleGetbyId
}