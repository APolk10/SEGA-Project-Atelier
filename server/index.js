const express = require('express');
const app = express();
const sql = require('./rar_db.js');

// app.use(express.urlencoded({
//   extended: true,
// }));
// app.use(express.json());
app.use(express.static('./public'))

app.get('/');

const PORT = 8080;

app.listen(PORT);
console.log(`Server listening at port ${PORT}`)