const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendation.controller');

// Crear una nueva recomendación
router.post('/', recommendationController.createRecommendation);

// Obtener todas las recomendaciones
router.get('/', recommendationController.getAllRecommendations);

// Obtener recomendación por ID
router.get('/:id', recommendationController.getRecommendationById);

// Actualizar recomendación por ID
router.put('/:id', recommendationController.updateRecommendationById);

// Eliminar recomendación por ID
router.delete('/:id', recommendationController.deleteRecommendationById);

module.exports = router;
