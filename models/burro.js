// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burro = {
  all: function (cb) {
    orm.all("burros", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (cols, vals, cb) {
    orm.create("burros", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.update("burros", objColVals, condition, function (res) {
      cb(res);
    });
  },
  deleteOne: function (condition, cb) {
    orm.delete("burros", condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burro;