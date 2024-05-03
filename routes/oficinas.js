const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const {oficinasPost, oficinaPut,oficinasDelete} = require('../controllers/oficinas');
const {existeOficinaPorId} = require('../helpers/db-validator');
const router = Router();

router.post('/',[
    check('sede','La sede es obligatorio').not().isEmpty() ,
    check('direccion','La direccion es obligatoria').not().isEmpty(), 
    check('telefono', 'El telefono es obligatorio').not().isEmpty(),
    check('encargado', 'Se requiere un encargado de oficina').not().isEmpty(),
    validarCampos
],oficinasPost);
router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeOficinaPorId ),
    validarCampos
], oficinaPut);
router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeOficinaPorId ),
    validarCampos
], oficinasDelete);
module.exports = router;