const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const {visitaPost} = require('../controllers/visitas');


const router = Router();

router.post('/',[
    check('id_cliente','Es necesario una descripcion del inmueble').not().isEmpty() ,
    check('id_inmueble','Es obligatorio tener una ubicación').not().isEmpty(), 
    check('fecha', 'La superficie del inmueble es obligatoria').not().isEmpty(),
    check('comentarios', 'La superficie del inmueble es obligatoria').not().isEmpty(),
    validarCampos
],visitaPost);

module.exports = router;