//Aquí estará el modelo de estructura de un paciente para la conexión a base de datos (mongo atlas)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema del paciente
const pacienteSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  genero: {
    type: String,
    enum: ['Masculino', 'Femenino', 'Otro'],
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  telefono: {
    type: Number,
    required: true
  },
  historialMedico: {
    type: String,
    default: ''
  },
  citas: [{
    fecha: {
      type: Date,
      required: true
    },
    tipo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      default: ''
    }
  }]
});

// Crear el modelo de Paciente basado en el esquema definido
const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;
