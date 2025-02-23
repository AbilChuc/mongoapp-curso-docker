import express from 'express'
import mongoose from 'mongoose'

const Estudiante = mongoose.model('Estudiante', new mongoose.Schema({
  Nombre: String,
  Calificacion: String,
}))

const app = express()

mongoose.connect('mongodb://admin:root@controlescolarbd:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  const estudiantes = await Estudiante.find();
  return res.send(estudiantes)
})
app.get('/crear', async (_req, res) => {
  await Estudiante.create({ Nombre: 'Jose', Calificacion: '10' })
  return res.send('listo')
})

app.listen(3000, () => console.log('listening...'))
