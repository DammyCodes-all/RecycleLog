const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./utils/db');
const api = require('../src/routes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Connect to DB
connectDB();


app.use('/api', api);

// Root
app.get('/', (req, res) => {
  res.send('RecycLog AI Backend Running');
});

module.exports = app;
