const recommendationModel = require('../models/recommendation.model');

// Crear una nueva recomendación
async function createRecommendation(req, res) {
  const { medicinaId, dosis, frecuencia, duracion, instruccionesAdicionales } = req.body;
  try {
    const result = await recommendationModel.createRecommendation(medicinaId, dosis, frecuencia, duracion, instruccionesAdicionales);
    res.status(201).json({ message: 'Recomendación creada', result });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear recomendación', error: error.message });
  }
}

// Obtener todas las recomendaciones
async function getAllRecommendations(req, res) {
  try {
    const recommendations = await recommendationModel.getAllRecommendations();
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener recomendaciones', error: error.message });
  }
}

// Obtener recomendación por ID
async function getRecommendationById(req, res) {
  const { id } = req.params;
  try {
    const recommendation = await recommendationModel.getRecommendationById(id);
    if (recommendation) {
      res.json(recommendation);
    } else {
      res.status(404).json({ message: 'Recomendación no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener recomendación', error: error.message });
  }
}

// Actualizar recomendación por ID
async function updateRecommendationById(req, res) {
  const { id } = req.params;
  const { medicinaId, dosis, frecuencia, duracion, instruccionesAdicionales } = req.body;
  try {
    const result = await recommendationModel.updateRecommendationById(id, medicinaId, dosis, frecuencia, duracion, instruccionesAdicionales);
    if (result.affectedRows > 0) {
      res.json({ message: 'Recomendación actualizada' });
    } else {
      res.status(404).json({ message: 'Recomendación no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar recomendación', error: error.message });
  }
}

// Eliminar recomendación por ID
async function deleteRecommendationById(req, res) {
  const { id } = req.params;
  try {
    const result = await recommendationModel.deleteRecommendationById(id);
    if (result.affectedRows > 0) {
      res.json({ message: 'Recomendación eliminada' });
    } else {
      res.status(404).json({ message: 'Recomendación no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar recomendación', error: error.message });
  }
}

module.exports = {
  createRecommendation,
  getAllRecommendations,
  getRecommendationById,
  updateRecommendationById,
  deleteRecommendationById
};
