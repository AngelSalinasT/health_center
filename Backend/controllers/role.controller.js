const roleModel = require('../models/role.model');

// Obtener todos los roles
async function getAllRoles(req, res) {
  try {
    const roles = await roleModel.getAllRoles();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener roles', error: error.message });
  }
}

module.exports = {
  getAllRoles
};
