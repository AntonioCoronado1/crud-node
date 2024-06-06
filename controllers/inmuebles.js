const { response, request } = require('express');
const Inmueble = require('../models/inmueble');

const inmueblePost = async(req, res = response) =>{
    const {referencia, descripcion, direccion, superficie, tipo,
        estado,tamano,urbanizacion,habitaciones,banios,cocinas,puerta_blindada,
        parqueadero,num_puertas,diafono,acondicionado,
        precio_alquiler,precio_venta,nom_propietario,tel_propietario,zona_ciudad} =req.body;
    const inmueble = new Inmueble({referencia, descripcion, direccion, superficie, tipo,
        estado,tamano,urbanizacion,habitaciones,banios,cocinas,puerta_blindada,
        parqueadero,num_puertas,diafono,acondicionado,
        precio_alquiler,precio_venta,nom_propietario,tel_propietario,zona_ciudad});
        await inmueble.save();
        res.json({
            inmueble
        });
}
const inmuebleGet = async(req = request, res = response) => {
    const { estado } = req.params;
    const query = {estado:estado};
    const[total, inmuebles] = await Promise.all([
        Inmueble.countDocuments(query),
        Inmueble.find(query)
        
    ])
    res.json(
         
        inmuebles
    );
}
const inmuebleGetAll = async(req = request, res = response)=>{
    const inmuebles = await Inmueble.find();
    res.json(
        inmuebles
    );
}

const inmuebleGetbyId = async(req = request, res = response) =>{
    const { referencia } = req.params;
    const query = {referencia:referencia};
    const[total, inmuebles] = await Promise.all([
        Inmueble.countDocuments(query),
        Inmueble.find(query)
    ])
    res.json(
        inmuebles
    );
}



module.exports ={
    inmueblePost,
    inmuebleGet,
    inmuebleGetbyId,
    inmuebleGetAll
}