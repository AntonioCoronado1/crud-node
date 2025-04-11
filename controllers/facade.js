const { response, request } = require('express');
const Inmueble = require('../models/inmueble');

const FacadeInmueble = {
    async InmueblePost(datos){
        const inmueble = new Inmueble(datos);
        await inmueble.save();
        return inmueble;
    },
    async InmuebleGetAll(){
        return await Inmueble.find();
    },
    async InmuebleById(query){
        return await Promise.all([
                Inmueble.countDocuments(query),
                Inmueble.find(query)
            ])
    },
    async InmuebleByEstado(query){
        return await Promise.all([
                Inmueble.countDocuments(query),
                Inmueble.find(query)
            ])
    }
}

const AgregarInmueble = async(req, res = response) =>{
    
    const inmueble = await FacadeInmueble.InmueblePost(req.body);
        res.json({
            inmueble
        });
}

const VerInmuebles = async(req = request, res = response)=>{
    const inmuebles = await FacadeInmueble.InmuebleGetAll();
    res.json(
        inmuebles
    );
}
const VerInmueblesId = async(req = request, res = response)=>{
    const { referencia } = req.params;
    const query = {referencia:referencia};
    const[total, inmuebles] = await FacadeInmueble.InmuebleById(query);
    res.json(
         
        inmuebles
    );
}
const VerInmueblesEstado = async(req = request, res = response)=>{
    const { estado } = req.params;
    const query = {estado:estado};
    const[total, inmuebles] = await FacadeInmueble.InmuebleByEstado(query);
    res.json(
         
        inmuebles
    );
}
module.exports = {
    AgregarInmueble,
    VerInmuebles,
    VerInmueblesId,
    VerInmueblesEstado
}