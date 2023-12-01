//creado el cuerpo
const kittySchema = new mongoose.Schema({
    name: String
  });
  //creando el modelo 
  const Kitten = mongoose.model('Kitten', kittySchema);
const mongoose = require('mongoose')
//probablemente devuelve una promesa, y el método catch() se utiliza 
//para capturar cualquier error que se produzca durante la ejecución 
//de esa promesa. El error capturado se pasa como argumento a la función
// de devolución de llamada proporcionada, que en este caso es err => console.log(err).
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}