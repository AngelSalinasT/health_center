const db = require('../config/db.config');

// Obtener todos los roles
async function getAllRoles() {
  try {
    const [rows] = await db.query('SELECT * FROM Roles');
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllRoles
};
