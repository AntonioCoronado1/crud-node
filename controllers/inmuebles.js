const { response, request } = require('express');
const Inmueble = require('../models/inmueble');

const inmueblePost = async(req, res = response) =>{
    const { descripcion, direccion, superficie, tipo,
        estado,tamaño,urbanizacion,habitaciones,baños,cocinas,puerta_blindada,
        parqueadero,num_puertas,diafono,acondicionado,
        precio_alquiler,precio_venta,nom_propietario,tel_propietario,zona_ciudad} =req.body;
    const inmueble = new Inmueble({ descripcion, direccion, superficie, tipo,
        estado,tamaño,urbanizacion,habitaciones,baños,cocinas,puerta_blindada,
        parqueadero,num_puertas,diafono,acondicionado,
        precio_alquiler,precio_venta,nom_propietario,tel_propietario,zona_ciudad});
        await inmueble.save();
        res.json({
            inmueble
        });
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
