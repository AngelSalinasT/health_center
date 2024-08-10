const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const pool = mysql.createPool({
  host: 'localhost', // Cambia esto según tu configuración
  user: 'root',      // Cambia esto según tu configuración
  password: 'DB31', // Cambia esto según tu configuración
  database: 'centro_de_salud' // Cambia esto según tu configuración
});

// Promisify pool.query para usar con async/await
const db = pool.promise();

module.exports = db;
