// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const entryRoutes = require('./routes/entry');
const creatorRoutes = require('./routes/creator');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
console.log('entryRoutes is:', typeof entryRoutes);
console.log('creatorRoutes is:', typeof creatorRoutes);

// Mount routes
app.use('/api/entry', entryRoutes);
app.use('/api/creator', creatorRoutes);

app.get('/', (req, res) => {
  res.send('Crush Calculator API is running 🚀');
});


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  
});
