const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const {inmueblePost,inmuebleGet,inmuebleGetbyId} = require('../controllers/inmuebles');

const router = Router();

router.post('/',[
    check('descripcion','Es necesario una descripcion del inmueble').not().isEmpty() ,
    check('direccion','Es obligatorio tener una ubicación').not().isEmpty(), 
    check('superficie', 'La superficie del inmueble es obligatoria').not().isEmpty(),
    check('tipo','Se require un tipo de inmueble valido').not().isEmpty(),
    check('estado','Se debe especificar el estado del inmueble').not().isEmpty(),
    check('precio','Se debe establecer un precio').not().isEmpty(),
    check('nom_propietario','El nombre del propietario es obligatorio').not().isEmpty(),
    check('tel_propietario','El telefono del propietario es obligatorio').not().isEmpty(),
    check('zona_ciudad', 'Se debe especificar la zona de la ciudad').not().isEmpty(),
    validarCampos
],inmueblePost);
router.get('/',inmuebleGet);
router.get('/:id',inmuebleGetbyId);

module.exports = router;