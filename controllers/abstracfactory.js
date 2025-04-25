const { response, request } = require('express');
const Inmueble = require('../models/inmueble');

class InmuebleInterface{
  constructor() {
    if (new.target === InmuebleInterface) {
      throw new Error('No se puede instanciar directamente.');
    }
  }

  crear() {
    throw new Error('Método "obtenerDatos()" no implementado.');
  }
}


class Casa extends InmuebleInterface{
  constructor(data) {
    super();
    this.data = data;
  }
    crear() {
        return {
        referencia: this.data.referencia,
        descripcion: this.data.descripcion,
        direccion: this.data.direccion,
        superficie: this.data.superficie,
        tipo: 'CASA',
        estado: this.data.estado,
        precio_venta: this.data.precio_venta,
        precio_alquiler: this.data.precio_alquiler,
        zona_ciudad: this.data.zona_ciudad,
        nom_propietario: this.data.nom_propietario,
        tel_propietario: this.data.tel_propietario,
        habitaciones: this.data.habitaciones,
        puerta_brindada: this.data.puerta_brindada,
        parqueadero: this.data.parqueadero,
        banios: this.data.banios,
        cocinas: this.data.cocinas
        }
      }
}

class Apartamento extends InmuebleInterface{
  constructor(data) {
    super();
    this.data = data;
  }
    crear() {
        return {
        referencia: this.data.referencia,
        descripcion: this.data.descripcion,
        direccion: this.data.direccion,
        superficie: this.data.superficie,
        tipo: 'PISO NUEVO',
        estado: this.data.estado,
        precio_venta: this.data.precio_venta,
        precio_alquiler: this.data.precio_alquiler,
        zona_ciudad: this.data.zona_ciudad,
        nom_propietario: this.data.nom_propietario,
        tel_propietario: this.data.tel_propietario,
        habitaciones: this.data.habitaciones,
        puerta_brindada: this.data.puerta_brindada,
        parqueadero: this.data.parqueadero,
        banios: this.data.banios,
        cocinas: this.data.cocinas
        }
      }
}

class Local extends InmuebleInterface{
  constructor(data) {
    super();
    this.data = data;
  }
    crear() {
        return {
        referencia: this.data.referencia,
        descripcion: this.data.descripcion,
        direccion: this.data.direccion,
        superficie: this.data.superficie,
        tipo: 'LOCAL',
        estado: this.data.estado,
        precio_venta: this.data.precio_venta,
        precio_alquiler: this.data.precio_alquiler,
        zona_ciudad: this.data.zona_ciudad,
        nom_propietario: this.data.nom_propietario,
        tel_propietario: this.data.tel_propietario,
        num_puertas: this.data.num_puertas,
        diafono: this.data.diafono,
        acondicionado: this.data.acondicionado
        }
      }
}

class InmuebleFactory {
    NuevoInmueble(data) {
        throw new Error("Método abstracto no implementado.");
    }
}

class CasaFactory extends InmuebleFactory{
    NuevoInmueble(data) {
      return new Casa(data);
    }
}

class ApartamentoFactory extends InmuebleFactory{
    NuevoInmueble(data) {
      return new Apartamento(data);
    }
}

class LocalFactory extends InmuebleFactory{
    NuevoInmueble(data) {
      return new Local(data);
    }
}

class Cliente {
  static obtenerFactory(tipo) {
    switch (tipo) {
      case 'CASA':
        return new CasaFactory();
      case 'PISO NUEVO':
        return new ApartamentoFactory();
      case 'LOCAL':
        return new LocalFactory();
    }
  }

  static construirInmueble(data) {
    const factory = this.obtenerFactory(data.tipo);
    const producto = factory.NuevoInmueble(data);
    return producto.crear();
  }
}


const InmueblePostAbstracFactory = async(req, res = response) =>{
    
  const inmuebleData = Cliente.construirInmueble(req.body);
    const inmueble = new Inmueble(inmuebleData);
        await inmueble.save();
        res.json({
            inmueble
        });
}

module.exports = {
    InmueblePostAbstracFactory
  }
  
