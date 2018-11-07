var orm = require("../config/orm.js");

var sandwhich = {
  all: function(cb) {
    orm.all("sandwhiches", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("sandwhiches", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("sandwhiches", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("sandwhiches", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (sandwhichesController.js).
module.exports = sandwhich;