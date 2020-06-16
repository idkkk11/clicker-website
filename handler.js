import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./recipes.db");

const handler = function (obj) {

    const query = "select * from recipes";

    return new Promise(function (resolve, reject){
        db.all(query, [], function(err, rows) {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        })
    })

    
}