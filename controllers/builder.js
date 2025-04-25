const { response, request } = require('express');
const Inmueble = require('../models/inmueble');

class InmuebleBuilder{
    constructor() {
        this.inmueble = {
          
        };
      }
      setReferencia(referencia) {
        this.inmueble.referencia = referencia;
        return this;
      }
      setDescripcion(descripcion) {
        this.inmueble.descripcion = descripcion;
        return this;
      }
      setDireccion(direccion) {
        this.inmueble.direccion = direccion;
        return this;
      }
      setSuperficie(superficie) {
        this.inmueble.superficie = superficie;
        return this;
      }
      setTipo(tipo) {
        this.inmueble.tipo = tipo;
        return this;
      }
    
      setEstado(estado) {
        this.inmueble.estado = estado;
        return this;
      }
      setNom_propietario(nom_propietario) {
        this.inmueble.nom_propietario = nom_propietario;
        return this;
      }
      setTel_propietario(tel_propietario) {
        this.inmueble.tel_propietario = tel_propietario;
        return this;
      }
      setZona_ciudad(zona_ciudad){
        this.inmueble.zona_ciudad = zona_ciudad;
        return this;
      }
    
      setPrecios(precio_venta, precio_alquiler) {
        this.inmueble.precio_venta = precio_venta;
        this.inmueble.precio_alquiler = precio_alquiler;
        return this;
      }

      setCasaDetalles({ habitaciones, banios, cocinas, puerta_blindada, parqueadero }) {
        this.inmueble.habitaciones = habitaciones;
        this.inmueble.banios = banios;
        this.inmueble.cocinas = cocinas;
        this.inmueble.puerta_blindada = puerta_blindada;
        this.inmueble.parqueadero = parqueadero;
        return this;
      }

      setApartamentoDetalles({ habitaciones, banios, cocinas, puerta_blindada, parqueadero }) {
        this.inmueble.habitaciones = habitaciones;
        this.inmueble.banios = banios;
        this.inmueble.cocinas = cocinas;
        this.inmueble.puerta_blindada = puerta_blindada;
        this.inmueble.parqueadero = parqueadero;
        return this;
      }

      setLocalDetalles({ num_puertas, diafono, acondicionado}) {
        this.inmueble.num_puertas = num_puertas;
        this.inmueble.diafono = diafono;
        this.inmueble.acondicionado = acondicionado;
        return this;
      }
      build(){
        return this.inmueble;
      }
}

class InmuebleDirector{
    constructor(builder){
        this.builder = builder;
    }
    construirCasa(data) {
      return this.builder
        .setTipo('CASA')
        .setReferencia(data.referencia)
        .setDescripcion(data.descripcion)
        .setDireccion(data.direccion)
        .setSuperficie(data.superficie)
        .setEstado(data.estado)
        .setZona_ciudad(data.zona_ciudad)
        .setPrecios(data.precio_venta, data.precio_alquiler)
        .setCasaDetalles({
          habitaciones: data.habitaciones,
          banios: data.banios, 
          cocinas: data.cocinas, 
          puerta_blindada: data.puerta_blindada, 
          parqueadero: data.parqueadero
        })
        .setNom_propietario(data.nom_propietario)
        .setTel_propietario(data.tel_propietario)
        .build();
    }

    construirApartamento(data) {
      return this.builder
        .setTipo('PISO NUEVO')
        .setReferencia(data.referencia)
        .setDescripcion(data.descripcion)
        .setDireccion(data.direccion)
        .setSuperficie(data.superficie)
        .setEstado(data.estado)
        .setZona_ciudad(data.zona_ciudad)
        .setPrecios(data.precio_venta,data.precio_alquiler)
        .setCasaDetalles({
          habitaciones: data.habitaciones,
          banios: data.banios, 
          cocinas: data.cocinas, 
          puerta_blindada: data.puerta_blindada, 
          parqueadero: data.parqueadero 
        })
        .setNom_propietario(data.nom_propietario)
        .setTel_propietario(data.tel_propietario)
        .build();
    }
    construirLocal(data) {
      return this.builder
        .setTipo('LOCAL')
        .setReferencia(data.referencia)
        .setDescripcion(data.descripcion)
        .setDireccion(data.direccion)
        .setSuperficie(data.superficie)
        .setEstado(data.estado)
        .setZona_ciudad(data.zona_ciudad)
        .setPrecios(data.precio_venta, data.precio_alquiler)
        .setCasaDetalles({
          num_puertas: data.num_puertas,
          diafono: data.diafono, 
          acondicionado: data.acondicionado 
        })
        .setNom_propietario(data.nom_propietario)
        .setTel_propietario(data.tel_propietario)
        .build();
    }

}

const inmueblePostBuilder = async(req, res = response) =>{
    
    const builder = new InmuebleBuilder();
    const director = new InmuebleDirector(builder);

    let inmuebleData;
    switch(req.body.tipo){
      case 'CASA':
        inmuebleData  = director.construirCasa(req.body);
        break;
      case 'PISO NUEVO':
          inmuebleData  = director.construirApartamento(req.body);
        break;
      case 'LOCAL':
          inmuebleData  = director.construirLocal(req.body);
      break;
    }

  const inmueble = new Inmueble(inmuebleData);
  await inmueble.save();
  res.json({
    inmueble
});
}

module.exports = {
  inmueblePostBuilder
}


