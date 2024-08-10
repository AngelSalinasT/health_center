const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');

// Rutas para la gestión de pacientes
router.post('/', patientController.createPatient);    // Crear un nuevo paciente
router.get('/', patientController.getAllPatients);    // Obtener todos los pacientes
router.get('/:id', patientController.getPatientById); // Obtener un paciente por ID
router.put('/:id', patientController.updatePatientById); // Actualizar un paciente por ID
router.delete('/:id', patientController.deletePatientById); // Eliminar un paciente por ID

module.exports = router;
