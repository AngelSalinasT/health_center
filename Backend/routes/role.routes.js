const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role.controller');

// Obtener todos los roles
router.get('/', roleController.getAllRoles);

module.exports = router;
