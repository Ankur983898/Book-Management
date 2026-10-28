
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Library API is running!');
});

app.use('/api/books', require('./routes.js/bookroutes'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch(err => console.log('MongoDB error:', err.message));
