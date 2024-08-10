const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller');

// Crear un nuevo doctor
router.post('/', doctorController.createDoctor);

// Obtener todos los doctores
router.get('/', doctorController.getAllDoctors);

// Obtener doctor por ID
router.get('/:id', doctorController.getDoctorById);

// Actualizar doctor por ID
router.put('/:id', doctorController.updateDoctorById);

// Eliminar doctor por ID
router.delete('/:id', doctorController.deleteDoctorById);

module.exports = router;
