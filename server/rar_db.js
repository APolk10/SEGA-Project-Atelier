require('dotenv').config();
const postgres = require('postgres');
const { Client } = require('pg');

// const sql = postgres({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// });

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})

client.connect();

// module.exports = sql;
 module.exports = client;