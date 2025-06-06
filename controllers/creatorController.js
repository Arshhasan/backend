// controllers/creatorController.js
const creatorModel = require('../models/creatorModel');
const entryModel = require('../models/entryModel');

const registerCreator = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name || name.trim() === '') {
      return res.status(400).json({ error: 'Creator name is required' });
    }

    const creator = await creatorModel.createCreator(name.trim());
    res.status(201).json(creator);
  } catch (error) {
    console.error('Error in registerCreator:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getCreatorEntries = async (req, res) => {
  try {
    const creatorId = parseInt(req.params.id);
    if (isNaN(creatorId)) {
      return res.status(400).json({ error: 'Invalid creator ID' });
    }

    const creator = await creatorModel.getCreatorById(creatorId);
    if (!creator) {
      return res.status(404).json({ error: 'Creator not found' });
    }

    const entries = await entryModel.getEntriesByCreatorId(creatorId);
    res.json({ creator, entries });
  } catch (error) {
    console.error('Error in getCreatorEntries:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  registerCreator,
  getCreatorEntries,
};
