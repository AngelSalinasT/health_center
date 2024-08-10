const db = require('../config/db.config');

// Obtener todos los pacientes
async function getAllPatients() {
  try {
    const [rows] = await db.query('SELECT * FROM Pacientes');
    return rows;
  } catch (error) {
    throw error;
  }
}

// Obtener un paciente por ID
async function getPatientById(id) {
  try {
    const [rows] = await db.query('SELECT * FROM Pacientes WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

// Crear un nuevo paciente
async function createPatient(nombre, apellidos, fechaNac, direccion, telefono, altura, peso, status) {
  try {
    const [result] = await db.query(
      'INSERT INTO Pacientes (nombre, apellidos, fecha_nac, direccion, telefono, altura, peso, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [nombre, apellidos, fechaNac, direccion, telefono, altura, peso, status]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Actualizar un paciente por ID
async function updatePatientById(id, nombre, apellidos, fechaNac, direccion, telefono, altura, peso, status) {
  try {
    const [result] = await db.query(
      'UPDATE Pacientes SET nombre = ?, apellidos = ?, fecha_nac = ?, direccion = ?, telefono = ?, altura = ?, peso = ?, status = ? WHERE id = ?',
      [nombre, apellidos, fechaNac, direccion, telefono, altura, peso, status, id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Eliminar un paciente por ID
async function deletePatientById(id) {
  try {
    const [result] = await db.query('DELETE FROM Pacientes WHERE id = ?', [id]);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatientById,
  deletePatientById
};
