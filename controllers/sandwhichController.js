var express = require("express");

var router = express.Router();

// Import the model (sandwhich.js) to use its database functions.
var sandwhich = require("../models/sandwhich.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  sandwhich.all(function(data) {
    var hbsObject = {
      sandwhiches: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/sandwhiches", function(req, res) {
  sandwhich.create([
    "sandwhich", "devoured"
  ], [
    req.body.sandwhich, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/sandwhiches/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  sandwhich.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/sandwhiches/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  sandwhich.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
 