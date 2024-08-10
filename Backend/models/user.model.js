const db = require('../config/db.config');

// Crear un nuevo usuario
async function createUser(nombreUsuario, email, contraseña, rolId, pacienteId, medicoId) {
  try {
    const [result] = await db.query(
      'INSERT INTO Usuarios (nombre_usuario, email, contraseña, rol_id, paciente_id, medico_id) VALUES (?, ?, ?, ?, ?, ?)',
      [nombreUsuario, email, contraseña, rolId, pacienteId, medicoId]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Obtener todos los usuarios
async function getAllUsers() {
  try {
    const [rows] = await db.query('SELECT * FROM Usuarios');
    return rows;
  } catch (error) {
    throw error;
  }
}

// Obtener usuario por ID
async function getUserById(id) {
  try {
    const [rows] = await db.query('SELECT * FROM Usuarios WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

// Actualizar usuario por ID
async function updateUserById(id, nombreUsuario, email, contraseña, rolId, pacienteId, medicoId) {
  try {
    const [result] = await db.query(
      'UPDATE Usuarios SET nombre_usuario = ?, email = ?, contraseña = ?, rol_id = ?, paciente_id = ?, medico_id = ? WHERE id = ?',
      [nombreUsuario, email, contraseña, rolId, pacienteId, medicoId, id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Eliminar usuario por ID
async function deleteUserById(id) {
  try {
    const [result] = await db.query('DELETE FROM Usuarios WHERE id = ?', [id]);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
};
