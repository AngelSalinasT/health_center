const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 4000;
const patientRoutes = require('./routes/patient.routes');
const doctorsRoutes = require('./routes/doctor.routes');
const prescriptionRoutes = require('./routes/prescription.routes');
const recommendationRoutes = require('./routes/recommendation.routes');
const medicineRoutes = require('./routes/medicine.routes');
const rolRoutes = require('./routes/role.routes');
const cors = require('cors');

// Configurar CORS
app.use(cors({
  origin: 'http://localhost:3000', // Permitir solo solicitudes desde este dominio
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type'], // Encabezados permitidos
}));
app.use(express.json()); // Para parsear JSON en el cuerpo de la solicitud
app.use(morgan('dev')); // Usa 'dev' para una vista más concisa y colorida, o 'combined' para una vista más detallada

// Usar las rutas de pacientes
app.use('/api/pacientes', patientRoutes);
app.use('/api/doctores', doctorsRoutes);
app.use('/api/recetas', prescriptionRoutes);
app.use('/api/medicinas', medicineRoutes);
app.use('/api/recomendaciones', recommendationRoutes);
app.use('/api/roles', rolRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
