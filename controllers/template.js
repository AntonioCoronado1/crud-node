const { response, request } = require('express');
const Inmueble = require('../models/inmueble');

class InmuebleTemplate {
  constructor(data) {
    this.data = data;
    this.errors = [];
  }

  validar() {
    this.validarDefecto();
    this.validarEspecificos();
    return this.errors;
  }

  validarDefecto() {
    if (!this.data.referencia) {
      this.errors.push('La referencia es requerida');
    }
    if (!this.data.descripcion) {
      this.errors.push('La descripcion es requerida');
    }
    if (!this.data.direccion) {
      this.errors.push('La direccion es requerida');
    }
    if (!this.data.superficie) {
      this.errors.push('La superficie es requerida');
    }
    if (!this.data.tipo || !this.data.estado) {
      this.errors.push('Tipo y estado son obligatorios.');
    }
    if (this.data.estado.includes('VENTA') && !this.data.precio_venta) {
      this.errors.push('Precio de venta es requerido.');
    }
    if (this.data.estado.includes('ALQUILER') && !this.data.precio_alquiler) {
      this.errors.push('Precio de alquiler es requerido.');
    }
    if (this.data.estado.includes('VENTA O ALQUILER') && !this.data.precio_venta && !this.data.precio_alquiler) {
      this.errors.push('Precio de venta y alquiler es requerido.');
    }
    if (!this.data.zona_ciudad) {
      this.errors.push('La zona de la ciudad es requerida');
    }
    if (!this.data.nom_propietario) {
      this.errors.push('El nombre del propietario es requerido');
    }
    if (!this.data.tel_propietario) {
      this.errors.push('El telefono del propietario es requerido');
    }
    }

  validarEspecificos() {
    throw new Error('Debe implementar validarEspecificos');
  }
}

class CasaValidador extends InmuebleTemplate {
  validarEspecificos() {
    const d = this.data;
    if (d.habitaciones == null) this.errors.push('Se requiere especificar cuantas habitaciones posee');
    if (d.banios == null) this.errors.push('Se requiere especificar cuantos baños posee');
    if (d.cocinas == null) this.errors.push('Se requiere especificar cuantas cocinas posee');
    if (d.parqueadero == null) this.errors.push('Debe indicar si tiene parqueadero.');
    if (d.puerta_blindada == null) this.errors.push('Debe indicar si tiene puerta blindada.');
  }
}

class ApartamentoValidador extends InmuebleTemplate {
  validarEspecificos() {
    const d = this.data;
    if (d.habitaciones == null) this.errors.push('Se requiere especificar cuantas habitaciones posee');
    if (d.banios == null) this.errors.push('Se requiere especificar cuantos baños posee');
    if (d.cocinas == null) this.errors.push('Se requiere especificar cuantas cocinas posee');
    if (d.parqueadero == null) this.errors.push('Debe indicar si tiene parqueadero.');
    if (d.puerta_blindada == null) this.errors.push('Debe indicar si tiene puerta blindada.');
  }
}

class LocalValidador extends InmuebleTemplate {
  validarEspecificos() {
    const d = this.data;
    if (d.num_puertas == null) this.errors.push('Debe indicar el numero de puertas.');
    if (d.diafono == null) this.errors.push('Debe indicar si tiene salida a calle.');
    if (d.acondicionado == null) this.errors.push('Debe indicar si posee aire acondiconaado.');
  }
}

class ValidadorInmueble {
  static obtenerValidador(tipo, data) {
    switch (tipo) {
      case 'CASA':
        return new CasaValidador(data);
      case 'PISO NUEVO':
        return new ApartamentoValidador(data);
      case 'LOCAL':
        return new LocalValidador(data);
      default:
        throw new Error('Tipo de inmueble no válido');
    }
  }
}

const InmueblePostTemplate = async(req, res = response) =>{
    const validador = ValidadorInmueble.obtenerValidador(req.body.tipo, req.body);
    const errores = validador.validar();
    if (errores.length > 0) {
      return res.status(400).json({ errores });
    }
    else{
      const inmueble = new Inmueble(req.body);
              await inmueble.save();
              res.json({
                  inmueble
              });
    }
}

module.exports = {
    InmueblePostTemplate
  }
