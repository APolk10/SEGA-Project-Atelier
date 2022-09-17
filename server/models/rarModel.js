const client = require('../rar_db.js');

const rarModel = {

  getReviewsByID: function(id) {
    return client.query(`SELECT * FROM reviews WHERE product_id = ${id};`)
  }
}

module.exports = rarModel;