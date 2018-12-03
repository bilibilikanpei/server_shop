var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'shop_data'
});

connection.connect();

module.exports = {
    query: function (sql) {
        return new Promise(function (resolve, reject) {
            connection.query(sql, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
    drop: function () {
        connection.end();
    }
};