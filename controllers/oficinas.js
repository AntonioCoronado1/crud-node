const { response, request } = require('express');
const Oficina = require('../models/oficina');

const oficinasPost = async(req, res = response) => {
    const { sede, direccion, telefono,encargado,zona_ciudad}=req.body;
    const oficina = new Oficina({sede, direccion, telefono,encargado,zona_ciudad});
    await oficina.save();
    res.json({
        oficina
    });
}

const oficinaPut = async(req, res = response) => {
    const { id } = req.params;
    const { _id, ...resto}=req.body;
    const oficina = await Oficina.findByIdAndUpdate(id, resto);
    res.json(oficina);
}

const  oficinasDelete = async(req, res = response) => {

    const { id } = req.params;

    const oficina = await Oficina.findByIdAndDelete( id );

    res.json(oficina);
}
module.exports ={
    oficinasPost,
    oficinaPut,
    oficinasDelete
}