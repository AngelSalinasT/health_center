const db = require('../config/db.config');

// Crear un nuevo doctor
async function createDoctor(nombre, apellidos, fechaNac, direccion, telefono, status) {
  try {
    const [result] = await db.query(
      'INSERT INTO Doctores (nombre, apellidos, fecha_nac, direccion, telefono, status) VALUES (?, ?, ?, ?, ?, ?)',
      [nombre, apellidos, fechaNac, direccion, telefono, status]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Obtener todos los doctores
async function getAllDoctors() {
  try {
    const [rows] = await db.query('SELECT * FROM Doctores');
    return rows;
  } catch (error) {
    throw error;
  }
}

// Obtener doctor por ID
async function getDoctorById(id) {
  try {
    const [rows] = await db.query('SELECT * FROM Doctores WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

// Actualizar doctor por ID
async function updateDoctorById(id, nombre, apellidos, fechaNac, direccion, telefono, status) {
  try {
    const [result] = await db.query(
      'UPDATE Doctores SET nombre = ?, apellidos = ?, fecha_nac = ?, direccion = ?, telefono = ?, status = ? WHERE id = ?',
      [nombre, apellidos, fechaNac, direccion, telefono, status, id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Eliminar doctor por ID
async function deleteDoctorById(id) {
  try {
    const [result] = await db.query('DELETE FROM Doctores WHERE id = ?', [id]);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctorById,
  deleteDoctorById
};
