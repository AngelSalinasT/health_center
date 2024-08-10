const express = require('express');
const router = express.Router();
const prescriptionController = require('../controllers/prescription.controller');

// Crear una nueva receta
router.post('/', prescriptionController.createPrescription);

// Obtener todas las recetas
router.get('/', prescriptionController.getAllPrescriptions);

// Obtener receta por ID
router.get('/:id', prescriptionController.getPrescriptionById);

// Actualizar receta por ID
router.put('/:id', prescriptionController.updatePrescriptionById);

// Eliminar receta por ID
router.delete('/:id', prescriptionController.deletePrescriptionById);

module.exports = router;
