const fs = require("fs");
const { parse } = require("csv-parse");
const sql = require("../server/rar_db.js");
// const { Client } = require('pg');

// const client = new Client();
// await client.connect();

const readDocument = async () => {

  const rows = [];
  const parser = fs
    .createReadStream('../SEGA-CSV data/reviews_photos.csv')
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
    await (sql`INSERT INTO Photos (image_id, review_id, url)
    VALUES (${parseInt(currentRow[0])}, ${parseInt(currentRow[1])}, ${currentRow[2]});`)
  }
})();

  // .on('data', async function(row) {
  //   data.push(row);
  //   console.log(row);
  //   await (sql`INSERT INTO Photos (image_id, review_id, url)
  //       VALUES (${row[0]}, ${row[1]}, ${row[2]});`)
  // })
  // .on('end', function() {
  //   console.log('finished');
  // })
  // .on('error', function(error) {
  //   console.log(error.message);
  // })

  // sql`INSERT....`