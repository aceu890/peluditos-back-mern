// Importar el módulo mongoose para interactuar con MongoDB
const mongoose = require('mongoose');

// Establecer la conexión a la base de datos de MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

// Obtener la instancia de la conexión a la base de datos
const objetobd = mongoose.connection;

// Manejar eventos de conexión exitosa y errores de conexión
objetobd.on('connected', () => {
    console.log('Conexión correcta a MongoDB');
});
objetobd.on('error', () => {
    console.log('Error en la conexión a MongoDB');
});

// Exportar el objeto mongoose para que pueda ser utilizado en otros archivos
module.exports = mongoose;

/* 
este código establece la conexión a una base de datos MongoDB utilizando 
mongoose y maneja eventos de conexión exitosa y errores de conexión. 
Luego, exporta el objeto mongoose para que pueda ser utilizado en otros 
archivos de tu proyecto.
*/