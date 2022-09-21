const fs = require("fs");
const { parse } = require("csv-parse");
const sql = require("../server/rar_db.js");
const client = require("../server/rar_db.js");

const readDocument = async () => {

  const rows = [];

  const parser = fs
    .createReadStream('../SEGA-CSV data/characteristics.csv')
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
    var text = `INSERT INTO Characteristics (characteristic_id, product_id, name) VALUES ($1, $2, $3);`
    var params = [
      parseInt(currentRow[0]),
      parseInt(currentRow[1]),
      currentRow[2],
    ]
    // await (sql`INSERT INTO Characteristics (characteristic_id, product_id, name)
    // VALUES (${parseInt(currentRow[0])}, ${parseInt(currentRow[1])}, ${currentRow[2]});`)
    await client.query(text, params);
  }
})();

  // sql`INSERT....`

  // CREATE TABLE Characteristics (
  //   characteristic_id INT,
  //   product_id INT,
  //   "name" TEXT
  // );