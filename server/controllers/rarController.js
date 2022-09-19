const Rar = require('../models/rarModel.js');



const rarController = {


  getReviews: function(id) {
    console.log('CONTROLLER ACTIVATED WITH ID:', id.productID);
    return Rar.getReviewsByID(id.productID);
  },
  getSortedReviews: function(sortParam) {
    // sort by requested filter
  },
  getMeta: function(id) {
    // request metadata for given product id
  },
  logHelpfulReview: function(id) {
    // update helpfulness value for given product id
  },
  addNewReview: function(reviewData) {
    // add a new review to the database
  },
  reportReview: function(id) {
    // update the reported value for a given product id
  },

};

module.exports = rarController;