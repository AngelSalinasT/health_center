const doctorModel = require('../models/doctor.model');

// Crear un nuevo doctor
async function createDoctor(req, res) {
  const { nombre, apellidos, fechaNac, direccion, telefono, status } = req.body;
  try {
    const result = await doctorModel.createDoctor(nombre, apellidos, fechaNac, direccion, telefono, status);
    res.status(201).json({ message: 'Doctor creado', result });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear doctor', error: error.message });
  }
}

// Obtener todos los doctores
async function getAllDoctors(req, res) {
  try {
    const doctors = await doctorModel.getAllDoctors();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener doctores', error: error.message });
  }
}

// Obtener doctor por ID
async function getDoctorById(req, res) {
  const { id } = req.params;
  try {
    const doctor = await doctorModel.getDoctorById(id);
    if (doctor) {
      res.json(doctor);
    } else {
      res.status(404).json({ message: 'Doctor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener doctor', error: error.message });
  }
}

// Actualizar doctor por ID
async function updateDoctorById(req, res) {
  const { id } = req.params;
  const { nombre, apellidos, fechaNac, direccion, telefono, status } = req.body;
  try {
    const result = await doctorModel.updateDoctorById(id, nombre, apellidos, fechaNac, direccion, telefono, status);
    if (result.affectedRows > 0) {
      res.json({ message: 'Doctor actualizado' });
    } else {
      res.status(404).json({ message: 'Doctor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar doctor', error: error.message });
  }
}

// Eliminar doctor por ID
async function deleteDoctorById(req, res) {
  const { id } = req.params;
  try {
    const result = await doctorModel.deleteDoctorById(id);
    if (result.affectedRows > 0) {
      res.json({ message: 'Doctor eliminado' });
    } else {
      res.status(404).json({ message: 'Doctor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar doctor', error: error.message });
  }
}

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctorById,
  deleteDoctorById
};
