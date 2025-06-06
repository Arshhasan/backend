// routes/entry.js
const express = require('express');
const router = express.Router();

const { submitEntry } = require('../controllers/entryController');

// Submit a new crush entry
router.post('/submit', submitEntry);

module.exports = router;
