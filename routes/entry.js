const express = require('express');
const router = express.Router();

const { submitEntry } = require('../controllers/entryController');

// Allow preflight for any route in this file
router.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  return res.sendStatus(204); // No Content
});

// Actual endpoint
router.post('/submit', submitEntry);

module.exports = router;
