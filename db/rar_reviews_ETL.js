const fs = require("fs");
const { parse } = require("csv-parse");
const sql = require("../server/rar_db.js");
const client = require("../server/rar_db.js");

const readDocument = async () => {

  const rows = [];

  const parser = fs
    .createReadStream('../SEGA-CSV data/reviews.csv')
    .pipe(parse({
      skip_records_with_error: true,
      from_line: 2,
    }))

    for await (const row of parser) {
      rows.push(row);
    }
    return rows;
}

(async () => {

  const rows = await readDocument();

  for (let i = 0; i < rows.length; i++) {
    var currentRow = rows[i];
    console.log(currentRow);
    let text = (`INSERT INTO Reviews (review_id, product_id, rating, summary, recommend, response, body, date, helpfulness) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`);
    var date = new Date(parseInt(currentRow[3])).toLocaleDateString('sv').replace(/\//g, '-');
    let params = [
      parseInt(currentRow[0]), // review_id
      parseInt(currentRow[1]), // product_id
      parseInt(currentRow[2]), // rating
      currentRow[4], // summary
      currentRow[6], // recommend
      currentRow[10], // response
      currentRow[5], // body
      date, // date
      parseInt(currentRow[11]), // helpfulness
    ]
    // await (sql`INSERT INTO Reviews (review_id, product_id, rating, summary, recommend, response, body, date, helpfulness)
    // VALUES (${parseInt(currentRow[0])}, ${parseInt(currentRow[1])}, ${parseInt(currentRow[2])}), ${currentRow[4]}, ${currentRow[6]}, ${currentRow[10]}, ${currentRow[5]}, ${parseInt(currentRow[3])}, ${parseInt(currentRow[8])},;`)
    await client.query(text, params);
  }
})();
