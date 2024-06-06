const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const {visitaPost,VisitasGetbyId} = require('../controllers/visitas');


const router = Router();

router.post('/',[
    check('nombre','Es necesario una descripcion del inmueble').not().isEmpty() ,
    check('referencia','Es obligatorio tener una ubicación').not().isEmpty(), 
    check('fecha', 'La superficie del inmueble es obligatoria').not().isEmpty(),
    check('comentarios', 'La superficie del inmueble es obligatoria').not().isEmpty(),
    validarCampos
],visitaPost);
router.get('/:referencia',VisitasGetbyId);
module.exports = router;