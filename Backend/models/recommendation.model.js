const db = require('../config/db.config');

// Crear una nueva recomendación
async function createRecommendation(medicinaId, dosis, frecuencia, duracion, instruccionesAdicionales) {
  try {
    const [result] = await db.query(
      'INSERT INTO Recomendaciones (medicina_id, dosis, frecuencia, duracion, instrucciones_adicionales) VALUES (?, ?, ?, ?, ?)',
      [medicinaId, dosis, frecuencia, duracion, instruccionesAdicionales]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Obtener todas las recomendaciones
async function getAllRecommendations() {
  try {
    const [rows] = await db.query('SELECT * FROM Recomendaciones');
    return rows;
  } catch (error) {
    throw error;
  }
}

// Obtener recomendación por ID
async function getRecommendationById(id) {
  try {
    const [rows] = await db.query('SELECT * FROM Recomendaciones WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

// Actualizar recomendación por ID
async function updateRecommendationById(id, medicinaId, dosis, frecuencia, duracion, instruccionesAdicionales) {
  try {
    const [result] = await db.query(
      'UPDATE Recomendaciones SET medicina_id = ?, dosis = ?, frecuencia = ?, duracion = ?, instrucciones_adicionales = ? WHERE id = ?',
      [medicinaId, dosis, frecuencia, duracion, instruccionesAdicionales, id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Eliminar recomendación por ID
async function deleteRecommendationById(id) {
  try {
    const [result] = await db.query('DELETE FROM Recomendaciones WHERE id = ?', [id]);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createRecommendation,
  getAllRecommendations,
  getRecommendationById,
  updateRecommendationById,
  deleteRecommendationById
};
