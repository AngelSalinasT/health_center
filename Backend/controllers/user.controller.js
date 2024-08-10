const userModel = require('../models/user.model');

// Crear un nuevo usuario
async function createUser(req, res) {
  const { nombreUsuario, email, contraseña, rolId, pacienteId, medicoId } = req.body;
  try {
    const result = await userModel.createUser(nombreUsuario, email, contraseña, rolId, pacienteId, medicoId);
    res.status(201).json({ message: 'Usuario creado', result });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario', error: error.message });
  }
}

// Obtener todos los usuarios
async function getAllUsers(req, res) {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios', error: error.message });
  }
}

// Obtener usuario por ID
async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await userModel.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuario', error: error.message });
  }
}

// Actualizar usuario por ID
async function updateUserById(req, res) {
  const { id } = req.params;
  const { nombreUsuario, email, contraseña, rolId, pacienteId, medicoId } = req.body;
  try {
    const result = await userModel.updateUserById(id, nombreUsuario, email, contraseña, rolId, pacienteId, medicoId);
    if (result.affectedRows > 0) {
      res.json({ message: 'Usuario actualizado' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar usuario', error: error.message });
  }
}

// Eliminar usuario por ID
async function deleteUserById(req, res) {
  const { id } = req.params;
  try {
    const result = await userModel.deleteUserById(id);
    if (result.affectedRows > 0) {
      res.json({ message: 'Usuario eliminado' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar usuario', error: error.message });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
};