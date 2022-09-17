const express = require('express');
const cors = require('cors');
const app = express();
const Rar = require('./controllers/rarController.js');

app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use(cors()); // this stopped me from being able to connect
app.use(express.static('./public'))


// Send request to the
app.get('/reviews/:productID', (req, res) => {
  console.log(req.params);
  let selectedProduct = req.params;
  Rar.getReviews(selectedProduct)
    .then((results) => res.send(results))
    .catch((error) => res.send(error))
});

app.get('/sortreviews/:productID/:sortType', (req, res) => {
  console.log(req.params);
  let selectedProduct = req.params;
  Rar.getReviews(selectedProduct)
    .then((reviews) => res.send({data: { results : reviews.rows }}))
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