const client = require('../rar_db.js');

const rarModel = {

  getReviewsByID: function(id) { // Essential
    // return client.query(`SELECT * FROM Reviews LEFT JOIN Photos ON Photos.review_id=Reviews.review_id WHERE Reviews.product_id=66642;`)
    return client.query(
    `SELECT
      review_id,
      rating,
      summary,
      recommend,
      response,
      body,
      (SELECT Users.reviewerName FROM Users WHERE Users.review_id = Reviews.review_id) AS reviewer_name,
      date,
      helpfulness,
      (SELECT json_agg(json_build_object(
        'id', Photos.image_id,
        'url', Photos.url))
      FROM Photos
      WHERE Photos.review_id = reviews.review_id) AS Photos
    FROM Reviews
    WHERE Reviews.product_id = ${id};`
      )
  },



  // CREATE TABLE Reviews (
  //   review_id INT PRIMARY KEY,
  //   product_id INT,
  //   rating INT,
  //   summary TEXT,
  //   recommend TEXT,
  //   response TEXT,
  //   body TEXT,
  //   "date" DATE,
  //   helpfulness INT
  // );
  //   -- FOREIGN KEY (product_id)
  //   -- REFERENCES Products(product_id)

  // CREATE TABLE Photos (
  //   image_id INT PRIMARY KEY,
  //   review_id INT,
  //   "url" TEXT


  getReviewsByMetric: function(productAndMetric) { // Essential
    return; // client.query(``)
  },
  getMetaData: function(id) { // Essential
    return; // client.query(``)
  },
  markAsHelpful: function(id) {
    return; // client.query(``)
  },
  addReview: function(review) { // Essential
    return; // client.query(``)
  },
  reportReview: function(id) {
    return; // client.query(``)
  },
}

module.exports = rarModel;

// The expected return for a review lookup by ID
// {
//   "product": "2",
//   "page": 0,
//   "count": 5,
//   "results": [
//     {
//       +"review_id": 5,
//       +"rating": 3,
//       +"summary": "I'm enjoying wearing these shades",
//       +"recommend": false,
//       +"response": null,
//       +"body": "Comfortable and practical.",
//       +"date": "2019-04-14T00:00:00.000Z",
//       -"reviewer_name": "shortandsweeet",
//       +"helpfulness": 5,
//       -"photos": [{
//           "id": 1,
//           "url": "urlplaceholder/review_5_photo_number_1.jpg"
//         },
//         {
//           "id": 2,
//           "url": "urlplaceholder/review_5_photo_number_2.jpg"
//         },
//         // ...
//       ]
//     }
