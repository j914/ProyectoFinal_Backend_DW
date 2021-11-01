const {Route, Router} = require ('express');
const {consultaUsuario, guardarUsuario, eliminarUsuario, modificarUsuario, } = require ('../controllers/Usuario.controller');
const router = Router();

// ruta get 
router.get('/proyectfinal/api/Usuario' , consultaUsuario);

// ruta post
router.post('/proyectfinal/api/Usuario/registro', guardarUsuario);

// ruta delet 

router.delete('/proyectfinal/api/Usuario/eliminar/:id', eliminarUsuario);

// ruta modificar 

router.put('/proyectfinal/api/Usuario/modificar', modificarUsuario);

module.exports = router;