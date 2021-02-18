
let sqlite3 = require('sqlite3').verbose();




async function insertQuery(data,sql) {
  return new Promise(async (resolve) => {
    try {
      let db = new sqlite3.Database('./db/bavariadatabase.db');


      let insert = db.run(sql,data, function(err){
        if (err) {
          return console.log(err.message);
        }

        resolve(this.lastID)

      });
      db.close();

    } catch (err) {
      resolve(false)
    }


  })

}


async function selectQuery(data, sql) {
  return new Promise(async (resolve) => {
    try {

      let db = new sqlite3.Database('./db/bavariadatabase.db');

      if (data == '*') {

        db.all(sql, function (err, rows) {
          if (err) resolve(err);
          db.close();
          resolve(rows);
        });

      } else {

        db.all(sql, [data], function (err, rows) {
          if (err) resolve(err);
          db.close();
          resolve(rows);
        });

      }


    } catch (err) {
      resolve(false)
    }


  })

}


async function updateQuery(data,sql) {
  return new Promise(async (resolve) => {
    try {
      let db = new sqlite3.Database('./db/bavariadatabase.db');


      let update = db.run(sql,data, function(err){
        if (err) {
          return console.log(err.message);
        }

        resolve(this.lastID)

      });
      db.close();

    } catch (err) {
      resolve(false)
    }


  })

}



async function deleteQuery(data,sql) {
  return new Promise(async (resolve) => {
    try {
      let db = new sqlite3.Database('./db/bavariadatabase.db');


      let deletequery = db.run(sql,data, function(err){
        if (err) {
          return console.log(err.message);
        }

        resolve(this.lastID)

      });
      db.close();

    } catch (err) {
      resolve(false)
    }


  })

}

module.exports = { selectQuery, insertQuery, deleteQuery,updateQuery }
