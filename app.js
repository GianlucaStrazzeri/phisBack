const express = require('express');//requiero express
const app = express();//inicializo express
const PORT=process.env.PORT||3000;//defino el puerto de esta forma para que pueda luego exportarlo para la conexión base de datos

const {connection}= require("./config/config.js") //requiero connexión database 

app.get('/', (req, res) => {
  const nombresDePacientes = connection.pacientes.map(paciente => paciente.nombre);
  res.json(nombresDePacientes);
    
  });
  app.listen(PORT, () => {
    console.log(`Node.js está escuchando en el puerto: http://localhost:${PORT}`);
  });

