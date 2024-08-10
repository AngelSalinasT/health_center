const patientModel = require('../models/patient.model');

// Obtener todos los pacientes
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await patientModel.getAllPatients();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener pacientes',
      error: error.message
    });
  }
};

// Obtener un paciente por ID
exports.getPatientById = async (req, res) => {
  try {
    const patient = await patientModel.getPatientById(req.params.id);
    if (patient) {
      res.status(200).json(patient);
    } else {
      res.status(404).json({ message: 'Paciente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener paciente',
      error: error.message
    });
  }
};

// Crear un nuevo paciente
exports.createPatient = async (req, res) => {
  try {
    const { nombre, apellidos, fechaNac, direccion, telefono, altura, peso, status } = req.body;
    const result = await patientModel.createPatient(nombre, apellidos, fechaNac, direccion, telefono, altura, peso, status);
    res.status(201).json({
      message: 'Paciente creado exitosamente',
      patientId: result.insertId
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al crear paciente',
      error: error.message
    });
  }
};

// Actualizar un paciente por ID
exports.updatePatientById = async (req, res) => {
  try {
    const { nombre, apellidos, fechaNac, direccion, telefono, altura, peso, status } = req.body;
    const result = await patientModel.updatePatientById(req.params.id, nombre, apellidos, fechaNac, direccion, telefono, altura, peso, status);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Paciente actualizado exitosamente' });
    } else {
      res.status(404).json({ message: 'Paciente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error al actualizar paciente',
      error: error.message
    });
  }
};

// Eliminar un paciente por ID
exports.deletePatientById = async (req, res) => {
  try {
    const result = await patientModel.deletePatientById(req.params.id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Paciente eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'Paciente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error al eliminar paciente',
      error: error.message
    });
  }
};
