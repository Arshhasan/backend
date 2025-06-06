// models/creatorModel.js
const pool = require('../db');

const createCreator = async (name) => {
  const result = await pool.query(
    'INSERT INTO creators (name) VALUES ($1) RETURNING *',
    [name]
  );
  return result.rows[0];
};

const getCreatorById = async (id) => {
  const result = await pool.query(
    'SELECT * FROM creators WHERE id = $1',
    [id]
  );
  return result.rows[0];
};

const getAllCreators = async () => {
  const result = await pool.query('SELECT * FROM creators ORDER BY id DESC');
  return result.rows;
};

module.exports = {
  createCreator,
  getCreatorById,
  getAllCreators,
};
