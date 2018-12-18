var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, col, val, cb) {
        var query = "INSERT INTO " + table + " (" + col + ") VALUES ('" + val + "');";
        console.log(query);
        connection.query(query, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    // An example of colVal would be 'eat=true'
    updateOne: function (table, colVal, cb) {
        var query = "UPDATE " + table + " SET devoured = true WHERE " + colVal;
        console.log(query);
        connection.query(query, function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
};

// Export the orm object for the model
module.exports = orm;