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

// GET reviews
app.get('/reviews/:productID', (req, res) => {
  console.log(req.params);
  let selectedProduct = req.params;
  Rar.getReviews(selectedProduct)
    .then((results) => res.send('DB sent back reviews in this format:', results.rows)) // array of objects
    .catch((error) => res.send(error))
});
// Sort reviews
app.get('/sortReviews/:productID/:sortType', (req, res) => {
  console.log(req.params);
  let selectedProduct = req.params;
  Rar.getSortedReviews(selectedProduct)
    .then((reviews) => res.send('DB sent back sorted reviews in this format:', reviews))
    .catch((error) => console.log(error));
});
// GET metadata
app.get('/reviews/meta/:productID', (req, res) => {
  console.log(req.params);
  let selectedProduct = req.params;
  Rar.getMeta(selectedProduct)
    .then((metadata) => res.send(metadata.rows))
    .catch((error) => console.log(error));
});
// Post new review
app.post('/addReview', (req, res) => {
  console.log(req.body);
  let newReview = req.body;
  Rar.addNewReview(newReview)
    .then((results) => console.log('DB sent back new review confirmation in this format:', results))
    .catch((error) => console.log(error));
});
// Post helpful
app.put(`/reviews/helpful`, (req, res) => {
  console.log(req.body);
  let productToPromote = req.body;
  Rar.logHelpfulReview(productToPromote)
    .then((results) => console.log('DB sent back incremented helpful counter in this format:', results))
    .catch((error) => console.log(error));
});
// Report review
app.put('/reviews/report', (req, res) => {
  console.log(req.body);
  let productToReport = req.body;
  Rar.reportReview(productToReport)
    .then((results) => console.log('DB sent back reported review confirmation in this format:', results))
    .catch((error) => console.log(error));
});

const PORT = 8080;

app.listen(PORT);
console.log(`Server listening at port ${PORT}`)