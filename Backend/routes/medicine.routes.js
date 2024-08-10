const express = require('express');
const router = express.Router();
const medicineController = require('../controllers/medicine.controller');

// Crear una nueva medicina
router.post('/', medicineController.createMedicine);

// Obtener todas las medicinas
router.get('/', medicineController.getAllMedicines);

// Obtener medicina por ID
router.get('/:id', medicineController.getMedicineById);

// Actualizar medicina por ID
router.put('/:id', medicineController.updateMedicineById);

// Eliminar medicina por ID
router.delete('/:id', medicineController.deleteMedicineById);

module.exports = router;
