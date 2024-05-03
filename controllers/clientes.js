const { response, request } = require('express');
const Cliente = require('../models/cliente');

const clientesPost = async(req, res = response) => {
    const { nombre, telefono, correo}=req.body;
    const cliente = new Cliente({nombre, telefono, correo});
    await cliente.save();
    res.json({
        cliente
    });
}

const clientePut = async(req, res = response) => {
    const { id } = req.params;
    const { _id, ...resto}=req.body;
    const cliente = await Cliente.findByIdAndUpdate(id, resto);
    res.json(cliente);
}

module.exports ={
    clientesPost,
    clientePut
}

