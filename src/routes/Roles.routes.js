const {Route, Router} = require ('express');

const {consultaRol, guardarRol, eliminarRol, modificarRol, } = require ('../controllers/Roles.controller');
const router = Router();





// ruta get 
router.get('/proyectfinal/api/Rol' , consultaRol);

// ruta post
router.post('/proyectfinal/api/Rol/registro', guardarRol);

// ruta delet 

router.delete('/proyectfinal/api/Rol/eliminar/:id', eliminarRol);

// ruta modificar 

router.put('/proyectfinal/api/Rol/modificar', modificarRol);

module.exports = router;