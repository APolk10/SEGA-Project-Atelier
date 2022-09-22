require('dotenv').config();
const postgres = require('postgres');
const { Client, Pool } = require('pg');

// const sql = postgres({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// });

// CREATE INDEX productID_idx ON Reviews (product_id);
// CREATE INDEX rating_idx ON Reviews (rating);
// CREATE INDEX photoID_idx ON Photos (review_id);
// CREATE INDEX find_char_ID_idx ON Characteristics (product_id);
// CREATE INDEX find_charRev_ID_idx ON Characteristics_Reviews (characteristic_id);

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})

// client.connect();

 module.exports = pool;