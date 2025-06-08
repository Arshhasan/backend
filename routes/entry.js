// routes/entry.js
const express = require('express');
const router = express.Router();

router.options('/submit', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  return res.sendStatus(204); // Preflight success
});

const { submitEntry } = require('../controllers/entryController');

// Submit a new crush entry
router.post('/submit', submitEntry);

module.exports = router;
