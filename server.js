// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/gadgetsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Gadget Model
const Gadget = mongoose.model('Gadget', {
  name: String,
  price: Number,
  image: String,
});

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/gadgets', async (req, res) => {
  const gadgets = await Gadget.find();
  res.json(gadgets);
});

app.post('/api/gadgets', async (req, res) => {
  const newGadget = new Gadget(req.body);
  await newGadget.save();
  res.status(201).send(newGadget);
});

// Start Server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
