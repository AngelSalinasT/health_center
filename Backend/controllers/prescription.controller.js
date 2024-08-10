const prescriptionModel = require('../models/prescription.model');

// Crear una nueva receta
async function createPrescription(req, res) {
  const { pacienteId, medicoId, fechaEmision, recomendacionId, diagnostico } = req.body;
  try {
    const result = await prescriptionModel.createPrescription(pacienteId, medicoId, fechaEmision, recomendacionId, diagnostico);
    res.status(201).json({ message: 'Receta creada', result });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear receta', error: error.message });
  }
}

// Obtener todas las recetas
async function getAllPrescriptions(req, res) {
  try {
    const prescriptions = await prescriptionModel.getAllPrescriptions();
    res.json(prescriptions);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener recetas', error: error.message });
  }
}

// Obtener receta por ID
async function getPrescriptionById(req, res) {
  const { id } = req.params;
  try {
    const prescription = await prescriptionModel.getPrescriptionById(id);
    if (prescription) {
      res.json(prescription);
    } else {
      res.status(404).json({ message: 'Receta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener receta', error: error.message });
  }
}

// Actualizar receta por ID
async function updatePrescriptionById(req, res) {
  const { id } = req.params;
  const { pacienteId, medicoId, fechaEmision, recomendacionId, diagnostico } = req.body;
  try {
    const result = await prescriptionModel.updatePrescriptionById(id, pacienteId, medicoId, fechaEmision, recomendacionId, diagnostico);
    if (result.affectedRows > 0) {
      res.json({ message: 'Receta actualizada' });
    } else {
      res.status(404).json({ message: 'Receta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar receta', error: error.message });
  }
}

// Eliminar receta por ID
async function deletePrescriptionById(req, res) {
  const { id } = req.params;
  try {
    const result = await prescriptionModel.deletePrescriptionById(id);
    if (result.affectedRows > 0) {
      res.json({ message: 'Receta eliminada' });
    } else {
      res.status(404).json({ message: 'Receta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar receta', error: error.message });
  }
}

module.exports = {
  createPrescription,
  getAllPrescriptions,
  getPrescriptionById,
  updatePrescriptionById,
  deletePrescriptionById
};
