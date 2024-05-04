const { response, request } = require('express');
const Inmueble = require('../models/inmueble');
const Visita = require('../models/visita');
const Cliente = require('../models/cliente');

const visitaPost= async(req, res = response) =>{
    const { id_cliente, id_inmueble, fecha, comentarios}=req.body;
    const cliente = await Cliente.findById(id_cliente);
    const nombre = cliente.nombre;
    const inmueble = await Inmueble.findById(id_inmueble);
    const descripcion = inmueble.descripcion;

    
    const visita = new Visita({ id_cliente,nombre, id_inmueble, descripcion, fecha, comentarios});
    
     
    await visita.save();
        res.json({
            visita
        });
};
const VisitasGetbyId = async(req = request, res = response) =>{
    const { id } = req.params;
    const query = {id_inmueble:id};
    const[total, visitas] = await Promise.all([
        Visita.countDocuments(query),
        Visita.find(query)
    ])
    res.json({
        total, 
        visitas
    });
}

module.exports ={
    visitaPost,
    VisitasGetbyId
}