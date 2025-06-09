const express = require('express');
const router = express.Router();
const { submitEntry } = require('../controllers/entryController');

// Just POST route
router.post('/submit', submitEntry);

module.exports = router;
