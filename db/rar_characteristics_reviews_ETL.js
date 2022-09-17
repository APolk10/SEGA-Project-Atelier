const fs = require("fs");
const { parse } = require("csv-parse");
const sql = require("../server/rar_db.js");
const client = require("../server/rar_db.js");

const readDocument = async () => {

  const rows = [];

  const parser = fs
    .createReadStream('../SEGA-CSV data/characteristic_reviews.csv')
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
    var text = `INSERT INTO Characteristics_Reviews (id, characteristic_id, review_id, value) VALUES ($1, $2, $3, $4);`
    var params = [
      parseInt(currentRow[0]),
      parseInt(currentRow[1]),
      parseInt(currentRow[2]),
      parseInt(currentRow[3]),
    ]
    // await (sql`INSERT INTO Photos (image_id, review_id, url)
    // VALUES (${parseInt(currentRow[0])}, ${parseInt(currentRow[1])}, ${currentRow[2]});`)

    await client.query(text, params);
  }

})();

  // sql`INSERT....`

  // CREATE TABLE Characteristics_Reviews (
  //   id INT,
  //   characteristic_id INT,
  //   review_id INT,
  //   "value" INT
  // );