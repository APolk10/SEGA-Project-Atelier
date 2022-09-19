const client = require('../rar_db.js');

const rarModel = {

  getReviewsByID: function(id) {
    return client.query(`SELECT * FROM reviews WHERE product_id = ${id};`)
  },
  getReviewsByMetric: function(productAndMetric) {
    return; // client.query(``)
  },
  getMetaData: function(id) {
    return; // client.query(``)
  },
  markAsHelpful: function(id) {
    return; // client.query(``)
  },
  addReview: function(review) {
    return; // client.query(``)
  },
  reportReview: function(id) {
    return; // client.query(``)
  },
}

module.exports = rarModel;