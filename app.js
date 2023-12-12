//definiendo el lugar de trabajo de express con el require
const express = require('express');
const ViteExpress = require ('vite-express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
// puerto 3000
const port = 3000
// nombre para arracancar el proyecto app
const app = express();
app.use(bodyParser.json());

// Configuro EJS como el motor de plantillas
app.set('view engine', 'ejs');

//app es una instancia de express.
//METHOD es un método de solicitud HTTP.
//PATH es una vía de acceso en el servidor.
//HANDLER es la función que se ejecuta cuando se correlaciona la ruta.
//proyecto con el metodo http con un metodo get con un model cliente servidor
// envaindo una hello word al proyecto
app.get('/', (req, res) => {
  res.render('Hello World')
})
//
app.post('/', (req, res) => {
  res.send('Hola - POST');
});
app.put('/', (req, res) => {
  res.send('Hola - PUT');
});
app.delete('/', (req, res) => {
  res.send('Hello, World! - DELETE');
});

//enlazar y escuchar conexiones en un host y puerto específicos.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
