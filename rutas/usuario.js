// Importar el módulo Express y crear un router
const express = require('express')
const router = express.Router()

// Importar el módulo Mongoose y crear un esquema de usuario
const mongoose = require('mongoose')
const eschema = mongoose.Schema

// Estableciendo los tipos de datos
const eschemausuario = new eschema({
    nombre: String,
    mascota: String,
    email: String,
    telefono: String,
    idusuario: String
})

// Crear un modelo de usuario basado en el esquema
const ModeloUsuario = mongoose.model('usuarios', eschemausuario)

// Exportar el router para que pueda ser utilizado en otros archivos
module.exports = router

// RUTA DE EJEMPLO
// La ruta '/ejemplo' responde con un mensaje de saludo
// router.get('/ejemplo', (req, res) => {
//     res.end('Saludo carga desde ruta ejemplo')
// })

// Agregar Usuario
// La ruta '/agregarusuario' recibe una solicitud POST y crea un 
// nuevo usuario en la base de datos
router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        mascota: req.body.mascota,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario,
    })
    nuevousuario.save(function(err) {
        if (!err) {
            res.send('Usuario agregado correctamente');
        } else {
            res.send(err)
        }
    })
})

// Obtener todos los usuarios
// La ruta '/obtenerusuarios' recibe una solicitud GET y 
// evuelve todos los usuarios almacenados en la base de datos

/*Cuando se realiza una solicitud HTTP utilizando el método GET, 
se envía una solicitud al servidor para obtener un recurso específico.
 El servidor procesa la solicitud y devuelve el recurso solicitado al 
 cliente. El recurso puede ser una página HTML, una imagen, un archivo de 
 texto, un objeto JSON u otros tipos de datos.*/
router.get('/obtenerusuarios', (req, res) => {
    ModeloUsuario.find({}, function(docs, err) {
        if (!err) {
            res.send(docs);
        } else {
            res.send(err)
        }
    })
})

// Obtener id de usuario
// La ruta '/obtenerdatausuario' recibe una solicitud POST y devuelve la 
// información de un usuario específico
router.post('/obtenerdatausuario', (req, res) => {
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs, err) {
        if (!err) {
            res.send(docs);
        } else {
            res.send(err)
        }
    })
})

// Actualizar usuario
// La ruta '/actualizausuario' recibe una solicitud POST y actualiza la información de un usuario específico
router.post('/actualizausuario', (req, res) => {
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
        nombre: req.body.nombre,
        mascota: req.body.mascota,
        email: req.body.email,
        telefono: req.body.telefono
    }, (err) => {
        if(!err){
            res.send('Usuario actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})

// Borrar usuario
// La ruta '/borrarusuario' recibe una solicitud POST y elimina un usuario específico de la base de datos
router.post('/borrarusuario', (req, res) => {
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err) => {
        if(!err){
            res.send('Usuario borrado correctamente')
        }else{
            res.send(err)
        }
    })
})

/*
Este código en general se utiliza para crear un router en una 
aplicación web utilizando el framework Express en Node.js. El 
router define diferentes rutas y acciones que se pueden realizar 
en una base de datos de usuarios utilizando el módulo Mongoose.
*/