// Importar el módulo Express
const express = require('express')
// Crear una instancia de la aplicación Express
const app = express()

// Importar archivo de conexión a MongoDB
// Se conecta con el fichero usuario.js
const archivoBD = require('./conexion')

// Importar archivo de rutas y modelo de usuario
const rutausuario = require('./rutas/usuario')

// Importar body parser para analizar las solicitudes entrantes
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // Analizar el cuerpo de la solicitud en formato JSON
app.use(bodyParser.urlencoded({extended:'true'})) // Analizar los datos codificados en la URL

// Asociar las rutas relacionadas con los usuarios a /api/usuario
app.use('/api/usuario', rutausuario)

// Ruta de inicio del servidor
app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js, Corriendo...')
})

// Configurar el servidor para escuchar en el puerto 5000
app.listen(5000, function() {
    console.log('El servidor NODE está corriendo correctamente');
})


/*DESCRIPCIÓN DEL FICHERO ================================================/
El archivo "server.js" en el backend de JavaScript suele ser utilizado 
para crear un servidor web utilizando un framework o biblioteca de Node.js,
como Express.js. Este archivo es responsable de configurar y definir la 
lógica del servidor, establecer las rutas de la API, gestionar las solicitudes
entrantes y enviar las respuestas correspondientes.*/

/*Configuración del servidor: El archivo server.js suele contener la 
configuración del servidor, como el puerto en el que se escucharán 
las solicitudes y cualquier otra configuración específica.*/

// TODO: IMPORTANT: NODEMON SERVER.JS INICIA EL SERVIDOR ✔
/*Inicialización del servidor: Al final del archivo server.js, se inicia 
el servidor para que empiece a escuchar las solicitudes entrantes y a 
responder en consecuencia.*/