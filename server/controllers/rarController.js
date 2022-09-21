const Rar = require('../models/rarModel.js');



const rarController = {


  getReviews: function(id) {
    // console.log('CONTROLLER getReviews activated:', id.productID);
    return Rar.getReviewsByID(id.productID);
  },
  getSortedReviews: function(sortParam) {
    // console.log('CONTROLLER getSortedReviews activated:', sortParam);
    // sort by requested filter
    return Rar.getReviewsByMetric(sortParam);
  },
  getMeta: function(id) {
    // console.log('CONTROLLER getMeta activated:', parseInt(id.productID));
    // request metadata for given product id
    return Rar.getMetaData(parseInt(id.productID));
  },
  logHelpfulReview: function(id) {
    // console.log('CONTROLLER logHelpfulReview activated:', id);
    // update helpfulness value for given product id
    return Rar.markAsHelpful(id);
  },
  addNewReview: function(reviewData) {
    // console.log('CONTROLLER addNewReview activated:', reviewData);
    // add a new review to the database
    return Rar.addReview(reviewData);
  },
  reportReview: function(id) {
    // console.log('CONTROLLER addNewReview activated:', id);
    // update the reported value for a given product id
    return Rar.reportReview(id);
  },

};

module.exports = rarController;