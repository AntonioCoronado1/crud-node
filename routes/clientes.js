const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const {clientesPost,clientePut} = require('../controllers/clientes');
const {existeClientePorId} = require('../helpers/db-validator');
const router = Router();

router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty() ,
    check('telefono','El telefono es obligatorio').not().isEmpty(), 
    check('correo', 'La superficie del inmueble es obligatoria').not().isEmpty(),
    validarCampos
],clientesPost);
router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeClientePorId ),
    validarCampos
], clientePut);

module.exports = router;