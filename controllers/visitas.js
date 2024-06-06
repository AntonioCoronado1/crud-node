const { response, request } = require('express');
const Inmueble = require('../models/inmueble');
const Visita = require('../models/visita');
const Cliente = require('../models/cliente');

const visitaPost= async(req, res = response) =>{
    const { nombre, referencia, fecha, comentarios}=req.body;
    const inmueble = await Inmueble.findOne({referencia:referencia});
    const descripcion = inmueble.descripcion;

    
    const visita = new Visita({nombre, referencia, descripcion, fecha, comentarios});
    
     
    await visita.save();
        res.json({
            visita
        });
};
const VisitasGetbyId = async(req = request, res = response) =>{
    const { referencia } = req.params;
    const query = {referencia:referencia};
    const[total, visitas] = await Promise.all([
        Visita.countDocuments(query),
        Visita.find(query)
    ])
    res.json(
        visitas
    );
}


module.exports ={
    visitaPost,
    VisitasGetbyId
}