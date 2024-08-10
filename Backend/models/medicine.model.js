const db = require('../config/db.config');

// Crear una nueva medicina
async function createMedicine(nombreComercial, nombreGenerico, formaFarmaceutica, concentracion) {
  try {
    const [result] = await db.query(
      'INSERT INTO Medicinas (nombre_comercial, nombre_generico, forma_farmaceutica, concentracion) VALUES (?, ?, ?, ?)',
      [nombreComercial, nombreGenerico, formaFarmaceutica, concentracion]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Obtener todas las medicinas
async function getAllMedicines() {
  try {
    const [rows] = await db.query('SELECT * FROM Medicinas');
    return rows;
  } catch (error) {
    throw error;
  }
}

// Obtener medicina por ID
async function getMedicineById(id) {
  try {
    const [rows] = await db.query('SELECT * FROM Medicinas WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

// Actualizar medicina por ID
async function updateMedicineById(id, nombreComercial, nombreGenerico, formaFarmaceutica, concentracion) {
  try {
    const [result] = await db.query(
      'UPDATE Medicinas SET nombre_comercial = ?, nombre_generico = ?, forma_farmaceutica = ?, concentracion = ? WHERE id = ?',
      [nombreComercial, nombreGenerico, formaFarmaceutica, concentracion, id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Eliminar medicina por ID
async function deleteMedicineById(id) {
  try {
    const [result] = await db.query('DELETE FROM Medicinas WHERE id = ?', [id]);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createMedicine,
  getAllMedicines,
  getMedicineById,
  updateMedicineById,
  deleteMedicineById
};
