const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Crear un nuevo usuario
router.post('/', userController.createUser);

// Obtener todos los usuarios
router.get('/', userController.getAllUsers);

// Obtener usuario por ID
router.get('/:id', userController.getUserById);

// Actualizar usuario por ID
router.put('/:id', userController.updateUserById);

// Eliminar usuario por ID
router.delete('/:id', userController.deleteUserById);

module.exports = router;
