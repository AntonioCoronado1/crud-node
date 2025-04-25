const { response, request } = require('express');
const Inmueble = require('../models/inmueble');

class InmuebleFactory {
    crear(data) {
      throw new Error('Método "crear()" debe ser implementado.');
    }
  }

  class CasaFactory extends InmuebleFactory {
    crear(data) {
      return {
        referencia: data.referencia,
        descripcion: data.descripcion,
        direccion: data.direccion,
        superficie: data.superficie,
        tipo: 'CASA',
        estado: data.estado,
        precio_venta: data.precio_venta,
        precio_renta: data.precio_renta,
        zona_ciudad: data.zona_ciudad,
        nom_propietario: data.nom_propietario,
        tel_propietario: data.tel_propietario,
        habitaciones: data.habitaciones,
        puerta_brindada: data.puerta_brindada,
        parqueadero: data.parqueadero,
        banios: data.banios,
        cocinas: data.cocinas
      };
    }
  }
  class ApartamentoFactory extends InmuebleFactory {
    crear(data) {
      return {
        referencia: data.referencia,
        descripcion: data.descripcion,
        direccion: data.direccion,
        superficie: data.superficie,
        tipo: 'PISO NUEVO',
        estado: data.estado,
        precio_venta: data.precio_venta,
        precio_renta: data.precio_renta,
        zona_ciudad: data.zona_ciudad,
        nom_propietario: data.nom_propietario,
        tel_propietario: data.tel_propietario,
        habitaciones: data.habitaciones,
        puerta_blindada: data.puerta_blindada,
        parqueadero: data.parqueadero,
        banios: data.banios,
        cocinas: data.cocinas
      };
    }
  }
  class LocalFactory extends InmuebleFactory {
    crear(data) {
      return {
        referencia: data.referencia,
        descripcion: data.descripcion,
        direccion: data.direccion,
        superficie: data.superficie,
        tipo: 'LOCAL',
        estado: data.estado,
        precio_venta: data.precio_venta,
        precio_renta: data.precio_renta,
        zona_ciudad: data.zona_ciudad,
        nom_propietario: data.nom_propietario,
        tel_propietario: data.tel_propietario,
        num_puertas: data.num_puertas,
        diafono: data.diafono,
        parqueadero: data.parqueadero
      };
    }
  }
  class InmuebleCreator {
    static crearInmueble(data) {
      switch (data.tipo) {
        case 'CASA':
          return new CasaFactory().crear(data);
        case 'PISO NUEVO':
          return new ApartamentoFactory().crear(data);
        case 'LOCAL':
          return new LocalFactory().crear(data);
        
      }
    }
  }

const InmueblePostFactory = async(req, res = response) =>{
    
    const data = InmuebleCreator.crearInmueble(req.body);
    const inmueble = new Inmueble(data);
        await inmueble.save();
        res.json({
            inmueble
        });
}
module.exports = {
    InmueblePostFactory
  }
  