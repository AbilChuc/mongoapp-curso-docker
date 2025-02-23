import express from 'express'
import mongoose from 'mongoose'

const Estudiante = mongoose.model('Estudiante', new mongoose.Schema({
  Nombre: String,
  Calificacion: String,
}))

const app = express()
// Middleware para procesar JSON
app.use(express.json());

mongoose.connect('mongodb://admin:root@controlescolarbd:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  const estudiantes = await Estudiante.find();
  return res.send(estudiantes)
})
// Modificar servicio para recibir JSON con método POST
app.post('/crear', async (req, res) => {
  const { Nombre, Calificacion } = req.body;
  await Estudiante.create({ Nombre, Calificacion });
  return res.send('listo')
})

app.listen(3000, () => console.log('listening...'))
