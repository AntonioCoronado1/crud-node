const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos,
    validarJWT,
    esAdminRole,
    tieneRole} = require('../middlewares');
const {inmueblePost,inmuebleGet,inmuebleGetbyId,inmuebleGetAll,inmueblePostSimple} = require('../controllers/inmuebles');
const {VerInmuebles,VerInmueblesId,VerInmueblesEstado,AgregarInmueble} = require('../controllers/facade');
const {inmueblePostBuilder} = require("../controllers/builder");
const {InmueblePostFactory} = require("../controllers/factory");
const {InmueblePostAbstracFactory} = require("../controllers/abstracfactory");
const {esEstadoValido,
       PrecioalquiValido,
       PrecioventaValido,
       referenciaexiste} = require('../helpers/db-validator');

const router = Router();

router.post('/',[
    validarJWT,
    tieneRole('ADMIN_ROLE','VENTAS_ROLE'),
    check('referencia','Es necesario una referencia del inmueble').not().isEmpty() ,
    check('referencia',).custom(referenciaexiste),
    check('descripcion','Es necesario una descripcion del inmueble').not().isEmpty() ,
    check('direccion','Es obligatorio tener una ubicación').not().isEmpty(), 
    check('superficie', 'La superficie del inmueble es obligatoria').not().isEmpty(),
    check('tipo','Se require un tipo de inmueble valido').not().isEmpty(),
    check('estado').custom(esEstadoValido),
    check('precio_alquiler').custom(PrecioalquiValido),
    check('precio_venta').custom(PrecioventaValido),
    check('nom_propietario','El nombre del propietario es obligatorio').not().isEmpty(),
    check('tel_propietario','El telefono del propietario es obligatorio').not().isEmpty(),
    check('zona_ciudad', 'Se debe especificar la zona de la ciudad').not().isEmpty(),
    validarCampos
],inmueblePost);

router.post('/facade',[
    validarJWT,
    tieneRole('ADMIN_ROLE','VENTAS_ROLE'),
    check('referencia','Es necesario una referencia del inmueble').not().isEmpty() ,
    check('referencia',).custom(referenciaexiste),
    check('descripcion','Es necesario una descripcion del inmueble').not().isEmpty() ,
    check('direccion','Es obligatorio tener una ubicación').not().isEmpty(), 
    check('superficie', 'La superficie del inmueble es obligatoria').not().isEmpty(),
    check('tipo','Se require un tipo de inmueble valido').not().isEmpty(),
    check('estado').custom(esEstadoValido),
    check('precio_alquiler').custom(PrecioalquiValido),
    check('precio_venta').custom(PrecioventaValido),
    check('nom_propietario','El nombre del propietario es obligatorio').not().isEmpty(),
    check('tel_propietario','El telefono del propietario es obligatorio').not().isEmpty(),
    check('zona_ciudad', 'Se debe especificar la zona de la ciudad').not().isEmpty(),
    validarCampos
],AgregarInmueble);

router.post('/builder',[
    validarJWT,
    tieneRole('ADMIN_ROLE','VENTAS_ROLE'),
    check('referencia','Es necesario una referencia del inmueble').not().isEmpty() ,
    check('referencia',).custom(referenciaexiste),
    check('descripcion','Es necesario una descripcion del inmueble').not().isEmpty() ,
    check('direccion','Es obligatorio tener una ubicación').not().isEmpty(), 
    check('superficie', 'La superficie del inmueble es obligatoria').not().isEmpty(),
    check('tipo','Se require un tipo de inmueble valido').not().isEmpty(),
    check('estado').custom(esEstadoValido),
    check('precio_alquiler').custom(PrecioalquiValido),
    check('precio_venta').custom(PrecioventaValido),
    check('nom_propietario','El nombre del propietario es obligatorio').not().isEmpty(),
    check('tel_propietario','El telefono del propietario es obligatorio').not().isEmpty(),
    check('zona_ciudad', 'Se debe especificar la zona de la ciudad').not().isEmpty(),
    validarCampos
],inmueblePostBuilder);

router.post('/factory',[
    validarJWT,
    tieneRole('ADMIN_ROLE','VENTAS_ROLE'),
    check('referencia','Es necesario una referencia del inmueble').not().isEmpty() ,
    check('referencia',).custom(referenciaexiste),
    check('descripcion','Es necesario una descripcion del inmueble').not().isEmpty() ,
    check('direccion','Es obligatorio tener una ubicación').not().isEmpty(), 
    check('superficie', 'La superficie del inmueble es obligatoria').not().isEmpty(),
    check('tipo','Se require un tipo de inmueble valido').not().isEmpty(),
    check('estado').custom(esEstadoValido),
    check('precio_alquiler').custom(PrecioalquiValido),
    check('precio_venta').custom(PrecioventaValido),
    check('nom_propietario','El nombre del propietario es obligatorio').not().isEmpty(),
    check('tel_propietario','El telefono del propietario es obligatorio').not().isEmpty(),
    check('zona_ciudad', 'Se debe especificar la zona de la ciudad').not().isEmpty(),
    validarCampos
],InmueblePostFactory);

router.post('/abstrac',[
    validarJWT,
    tieneRole('ADMIN_ROLE','VENTAS_ROLE'),
    check('referencia','Es necesario una referencia del inmueble').not().isEmpty() ,
    check('referencia',).custom(referenciaexiste),
    check('descripcion','Es necesario una descripcion del inmueble').not().isEmpty() ,
    check('direccion','Es obligatorio tener una ubicación').not().isEmpty(), 
    check('superficie', 'La superficie del inmueble es obligatoria').not().isEmpty(),
    check('tipo','Se require un tipo de inmueble valido').not().isEmpty(),
    check('estado').custom(esEstadoValido),
    check('precio_alquiler').custom(PrecioalquiValido),
    check('precio_venta').custom(PrecioventaValido),
    check('nom_propietario','El nombre del propietario es obligatorio').not().isEmpty(),
    check('tel_propietario','El telefono del propietario es obligatorio').not().isEmpty(),
    check('zona_ciudad', 'Se debe especificar la zona de la ciudad').not().isEmpty(),
    validarCampos
],InmueblePostAbstracFactory);

router.get('/',inmuebleGetAll);
router.get('/referencia/:referencia',inmuebleGetbyId);
router.get('/estado/:estado',inmuebleGet);

router.get('/facade',VerInmuebles);
router.get('/facade/:referencia',VerInmueblesId);
router.get('/facade/estado/:estado',VerInmueblesEstado);

module.exports = router;