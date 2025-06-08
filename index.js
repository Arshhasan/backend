const express = require('express');
const cors = require('cors');
require('dotenv').config();

const entryRoutes = require('./routes/entry');
const creatorRoutes = require('./routes/creator');

const app = express();
const PORT = process.env.PORT || 3000;

// Allow CORS
app.use(cors());
app.use(express.json());

// 🔥 Handle all OPTIONS preflight requests globally
app.options('*', cors()); // this MUST come after `app.use(cors())`

// Optional: explicitly add headers for all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // or your frontend domain
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Mount routes
app.use('/api/entry', entryRoutes);
app.use('/api/creator', creatorRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Crush Calculator API is running 🚀');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});
