// Create web server
// 1. Create web server
// 2. Create a route for GET /comments
// 3. Create a route for GET /comments/:id
// 4. Create a route for POST /comments
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Joi = require('joi')
const morgan = require('morgan')
const mongoose = require('mongoose')

// 1. Create web server
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('combined'))

// 2. Create a route for GET /comments
// 3. Create a route for GET /comments/:id
// 4. Create a route for POST /comments
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.json({ message: 'GET /comments' })
})

// 3. Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
  res.json({ message: `GET /comments/${req.params.id}` })
})

// 4. Create a route for POST /comments
app.post('/comments', (req, res) => {
  res.json({ message: 'POST /comments' })
})

// 5. Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  res.json({ message: `PUT /comments/${req.params.id}` })
})

// 6. Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  res.json({ message: `DELETE /comments/${req.params.id}` })
})

// Start web server
app.listen(3001, () => {
  console.log('Web Server is running at port 3001')
})