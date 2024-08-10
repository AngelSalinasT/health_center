const db = require('../config/db.config');

// Crear una nueva receta
async function createPrescription(pacienteId, medicoId, fechaEmision, recomendacionId, diagnostico) {
  try {
    const [result] = await db.query(
      'INSERT INTO Recetas (paciente_id, medico_id, fecha_emision, recomendacion_id, diagnostico) VALUES (?, ?, ?, ?, ?)',
      [pacienteId, medicoId, fechaEmision, recomendacionId, diagnostico]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Obtener todas las recetas
async function getAllPrescriptions() {
  try {
    const [rows] = await db.query('SELECT * FROM Recetas');
    return rows;
  } catch (error) {
    throw error;
  }
}

// Obtener receta por ID
async function getPrescriptionById(id) {
  try {
    const [rows] = await db.query('SELECT * FROM Recetas WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

// Actualizar receta por ID
async function updatePrescriptionById(id, pacienteId, medicoId, fechaEmision, recomendacionId, diagnostico) {
  try {
    const [result] = await db.query(
      'UPDATE Recetas SET paciente_id = ?, medico_id = ?, fecha_emision = ?, recomendacion_id = ?, diagnostico = ? WHERE id = ?',
      [pacienteId, medicoId, fechaEmision, recomendacionId, diagnostico, id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Eliminar receta por ID
async function deletePrescriptionById(id) {
  try {
    const [result] = await db.query('DELETE FROM Recetas WHERE id = ?', [id]);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createPrescription,
  getAllPrescriptions,
  getPrescriptionById,
  updatePrescriptionById,
  deletePrescriptionById
};
