const client = require('../rar_db.js');

const rarModel = {

  getReviewsByID: function(id) {
    return client.query(
    `SELECT
      review_id,
      rating,
      summary,
      recommend,
      response,
      body,
      date,
      helpfulness,
      (SELECT json_agg(json_build_object(
        'id', Photos.image_id,
        'url', Photos.url))
      FROM Photos
      WHERE Photos.review_id = Reviews.review_id) AS Photos
    FROM Reviews
    WHERE Reviews.product_id = ${id};`
      )    //   (SELECT reviewerName FROM Users WHERE Users.review_id = Reviews.review_id) AS reviewer,
  },
  getReviewsByMetric: function(productAndMetric) {
    //
    return;
  },
  getMetaData: function(id) {
    let productID = id;
    return client.query(
      `SELECT json_build_object(
          'product_id', 66642,
          'ratings', json_build_object(
            '1', (SELECT COUNT(*) FROM Reviews WHERE rating = 1 AND product_id = 66642),
            '2', (SELECT COUNT(*) FROM Reviews WHERE rating = 2 AND product_id = 66642),
            '3', (SELECT COUNT(*) FROM Reviews WHERE rating = 3 AND product_id = 66642),
            '4', (SELECT COUNT(*) FROM Reviews WHERE rating = 4 AND product_id = 66642),
            '5', (SELECT COUNT(*) FROM Reviews WHERE rating = 5 AND product_id = 66642)
            ),
          'recommended', json_build_object(
            '0', (SELECT COUNT(*) FROM reviews WHERE recommend = '0' AND product_id = 66642),
            '1', (SELECT COUNT(*) FROM reviews WHERE recommend = '1' AND product_id = 66642)
            ),
          'characteristics', json_build_object(
            'Size', json_build_object(
                'id', (SELECT characteristic_id FROM Characteristics WHERE name = 'Size' AND product_id = 66642),
                'value', (SELECT AVG(value) FROM Characteristics_Reviews JOIN Characteristics ON Characteristics_Reviews.characteristic_id = Characteristics.characteristic_id WHERE product_id = 66642 AND name = 'Size')
            ),
            'Width', json_build_object(
              'id', (SELECT characteristic_id FROM Characteristics WHERE name = 'Width' AND product_id = 66642),
              'value', (SELECT AVG(value) FROM Characteristics_Reviews JOIN Characteristics ON Characteristics_Reviews.characteristic_id = Characteristics.characteristic_id WHERE product_id = 66642 AND name = 'Width')
            ),
            'Comfort', json_build_object(
              'id', (SELECT characteristic_id FROM Characteristics WHERE name = 'Comfort' AND product_id = 66642),
              'value', (SELECT AVG(value) FROM Characteristics_Reviews JOIN Characteristics ON Characteristics_Reviews.characteristic_id = Characteristics.characteristic_id WHERE product_id = 66642 AND name = 'Comfort')
            ),
            'Length', json_build_object(
              'id', (SELECT characteristic_id FROM Characteristics WHERE name = 'Length' AND product_id = 66642),
              'value', (SELECT AVG(value) FROM Characteristics_Reviews JOIN Characteristics ON Characteristics_Reviews.characteristic_id = Characteristics.characteristic_id WHERE product_id = 66642 AND name = 'Length')
            ),
            'Fit', json_build_object(
              'id', (SELECT characteristic_id FROM Characteristics WHERE name = 'Fit' AND product_id = 66642),
              'value', (SELECT AVG(value) FROM Characteristics_Reviews JOIN Characteristics ON Characteristics_Reviews.characteristic_id = Characteristics.characteristic_id WHERE product_id = 66642 AND name = 'Fit')
            ),
            'Quality', json_build_object(
              'id', (SELECT characteristic_id FROM Characteristics WHERE name = 'Quality' AND product_id = 66642),
              'value', (SELECT AVG(value) FROM Characteristics_Reviews JOIN Characteristics ON Characteristics_Reviews.characteristic_id = Characteristics.characteristic_id WHERE product_id = 66642 AND name = 'Quality')
            )
          )
      );`
      );
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


// sub objects(#)
//         characteristics
//           sub objects
//             sub...
// `SELECT
// product_id,
// (SELECT json_build_object(
//   '1', (SELECT COUNT(*) FROM Reviews WHERE rating = 1),
//   '2', (SELECT COUNT(*) FROM Reviews WHERE rating = 2),
//   '3', (SELECT COUNT(*) FROM Reviews WHERE rating = 3),
//   '4', (SELECT COUNT(*) FROM Reviews WHERE rating = 4),
//   '5', (SELECT COUNT(*) FROM Reviews WHERE rating = 5)
// )
// FROM Reviews
// WHERE Reviews.product_id = ${parseInt(id)}) AS ratings
// FROM Reviews
// WHERE Reviews.product_id = ${parseInt(id)};`