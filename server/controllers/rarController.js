const Rar = require('../models/rarModel.js');



const rarController = {


  getReviews: function(id) {
    // format for model to make PostGreSQL query
    console.log('CONTROLLER ACTIVATED WITH ID:', id.productID);
    return Rar.getReviewsByID(id.productID);
  },
};

module.exports = rarController;