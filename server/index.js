const express = require('express');
const app = express();
const sql = require('./rar_db.js');

app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use(express.static('./public'))


// Send request to the
app.get('/reviews', (req, res) => {
  console.log(req.body);
  // send data to controllers to format

});

app.get('/reviews/meta', (req, res) => {
  console.log(req.body);
  // send data to controllers to format
});

app.post(`/reviews/helpful`, (req, res) => {
  console.log(req.body);
  // send data to controllers to format
});

app.post('/reviews', (req, res) => {
  console.log(req.body);
  // send data to controllers to format
});

app.post('/reviews/report', (req, res) => {
  console.log(req.body);
  // send data to controllers to format
});

const PORT = 8080;

app.listen(PORT);
console.log(`Server listening at port ${PORT}`)