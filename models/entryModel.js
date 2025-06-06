// models/entryModel.js
const pool = require('../db');

const createEntry = async (yourName, crushName, creatorId) => {
  const result = await pool.query(
    'INSERT INTO crush_entries (your_name, crush_name, creator_id) VALUES ($1, $2, $3) RETURNING *',
    [yourName, crushName, creatorId]
  );
  return result.rows[0];
};

const getEntriesByCreatorId = async (creatorId) => {
  const result = await pool.query(
    'SELECT * FROM crush_entries WHERE creator_id = $1 ORDER BY submitted_at DESC',
    [creatorId]
  );
  return result.rows;
};

module.exports = {
  createEntry,
  getEntriesByCreatorId,
};
