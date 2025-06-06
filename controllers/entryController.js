// controllers/entryController.js
const entryModel = require('../models/entryModel');
const creatorModel = require('../models/creatorModel');

const submitEntry = async (req, res) => {
  try {
    const { yourName, crushName, creatorId } = req.body;
    if (!yourName || !crushName || !creatorId) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if creator exists
    const creator = await creatorModel.getCreatorById(creatorId);
    if (!creator) {
      return res.status(404).json({ error: 'Creator not found' });
    }

    const entry = await entryModel.createEntry(
      yourName.trim(),
      crushName.trim(),
      creatorId
    );

    res.status(201).json(entry);
  } catch (error) {
    console.error('Error in submitEntry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  submitEntry,
};
