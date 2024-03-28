//Config.js se encarga de conectar la app a mysql2
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Eomitalia1!',
  database: 'pacientes'
});

connection.connect(function(err) {
  if (err) {
    console.error('Errore di connessione al database:', err);
    return;
  }
  console.log('Connessione al database MySQL avvenuta con successo!');

  });

  connection.query('SELECT * FROM pacientes', function(err, results, fields) {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      return;
    }
    console.log('Resultados de la consulta:', results); //imprime los pacientes de la basededatos
    results.map(result=>{console.log(result.id,result.nombre, result.apellido)//imprime solo los nombre de todos loa pacientes de la base de datos
let pacientesID=[];
pacientesID= results.map(result.id,result.nombre,result.apellido)
console.log(pacientesID)
    });
  });
  
module.exports = {connection}


