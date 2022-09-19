const client = require('../rar_db.js');

const rarModel = {

  getReviewsByID: function(id) { // Essential
    return client.query(`SELECT * FROM reviews WHERE product_id = ${id};`)
  },
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



