const Role = require('../models/role');
const Usuario = require('../models/usuario');
const Cliente = require('../models/cliente');
const Oficina = require('../models/oficina');
const Inmueble = require('../models/inmueble');
const Estado = require('../models/estado');

const esRoleValido = async(rol = "") =>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no esta registrado en la base de datos`)
    }
}
const emailExiste = async( correo = '' ) => {
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ correo }, ya está registrado`);
    }
}
const referenciaexiste = async( referencia = 0 ) => {
    const existeref = await Inmueble.findOne({ referencia });
    if ( existeref ) {
        throw new Error(`La referencia: ${ referencia }, ya exite digite otra`);
    }
}

const existeUsuarioPorId = async( id ) =>{
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){
        throw new Error(`El Id no existe ${ id }`);
    }
}
const existeClientePorId = async( id ) =>{
    const existeCliente = await Cliente.findById(id);
    if(!existeCliente){
        throw new Error(`El Id no existe ${ id }`);
    }
}
const existeOficinaPorId = async( id ) =>{
    const existeOficina = await Oficina.findById(id);
    if(!existeOficina){
        throw new Error(`El Id no existe ${ id }`);
    }
}
const esEstadoValido = async(estado = "") =>{
    const existeEstado = Estado.findOne({estado});
    if(!existeEstado){
        throw new Error(`El estado no es valido del inmueble no es valido`)
    }
}
const PrecioalquiValido = async( estado = '' ) => {
    const existeEstado = Estado.findOne({estado});
    if(existeEstado!=="ALQUILER"){
        throw new Error(`El estado no es valido del inmueble no es valiso`)
    }
}
const PrecioventaValido = async( estado = '' ) => {
    const existeEstado = Estado.findOne({estado});
    if(existeEstado!=="VENTA"){
        throw new Error(`El estado no es valido del inmueble no es valiso`)
    }
}
module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeClientePorId,
    existeOficinaPorId,
    esEstadoValido,
    PrecioalquiValido,
    PrecioventaValido,
    referenciaexiste
}