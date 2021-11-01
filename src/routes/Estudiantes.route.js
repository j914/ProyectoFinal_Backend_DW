const { Route, Router } = require("express");
const { check } = require("express-validator");

const {
  consultaEstudiantes,
  guardarEstudiantes,
  eliminarEstudiantes,
  modificarEstudiantes,
} = require("../controllers/Estudiante.controller");
const {validarCampos} = require('../milddleware/validar-campos');
const router = Router();

// ruta get
router.get("/proyectfinal/api/Estudiante", consultaEstudiantes);

// ruta post
router.post(
  "/proyectfinal/api/Estudiante/registro",
  [check("estudiante_nombre", "El nombre es obligatorio").not().isEmpty(), validarCampos ],
  guardarEstudiantes
);

// ruta delet

router.delete("/proyectfinal/api/Estudiante/eliminar/:id", eliminarEstudiantes);

// ruta modificar

router.put("/proyectfinal/api/Estudiante/modificar", modificarEstudiantes);

module.exports = router;
