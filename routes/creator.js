// routes/creator.js
const express = require('express');
const router = express.Router();

const {
  registerCreator,
  getCreatorEntries,
} = require('../controllers/creatorController');

// console.log('Controller:', controller); // Add this

// Register a new creator
router.post('/register', registerCreator);

// Get creator info and their crush entries
router.get('/:id', getCreatorEntries);

module.exports = router;


// const express = require('express');
// const router = express.Router();

// router.get('/test', (req, res) => {
//   res.send('Creator route working!');
// });

// module.exports = router;
