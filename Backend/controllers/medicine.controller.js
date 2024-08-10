const medicineModel = require('../models/medicine.model');

// Crear una nueva medicina
async function createMedicine(req, res) {
  const { nombreComercial, nombreGenerico, formaFarmaceutica, concentracion } = req.body;
  try {
    const result = await medicineModel.createMedicine(nombreComercial, nombreGenerico, formaFarmaceutica, concentracion);
    res.status(201).json({ message: 'Medicina creada', result });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear medicina', error: error.message });
  }
}

// Obtener todas las medicinas
async function getAllMedicines(req, res) {
  try {
    const medicines = await medicineModel.getAllMedicines();
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener medicinas', error: error.message });
  }
}

// Obtener medicina por ID
async function getMedicineById(req, res) {
  const { id } = req.params;
  try {
    const medicine = await medicineModel.getMedicineById(id);
    if (medicine) {
      res.json(medicine);
    } else {
      res.status(404).json({ message: 'Medicina no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener medicina', error: error.message });
  }
}

// Actualizar medicina por ID
async function updateMedicineById(req, res) {
  const { id } = req.params;
  const { nombreComercial, nombreGenerico, formaFarmaceutica, concentracion } = req.body;
  try {
    const result = await medicineModel.updateMedicineById(id, nombreComercial, nombreGenerico, formaFarmaceutica, concentracion);
    if (result.affectedRows > 0) {
      res.json({ message: 'Medicina actualizada' });
    } else {
      res.status(404).json({ message: 'Medicina no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar medicina', error: error.message });
  }
}

// Eliminar medicina por ID
async function deleteMedicineById(req, res) {
  const { id } = req.params;
  try {
    const result = await medicineModel.deleteMedicineById(id);
    if (result.affectedRows > 0) {
      res.json({ message: 'Medicina eliminada' });
    } else {
      res.status(404).json({ message: 'Medicina no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar medicina', error: error.message });
  }
}

module.exports = {
  createMedicine,
  getAllMedicines,
  getMedicineById,
  updateMedicineById,
  deleteMedicineById
};
