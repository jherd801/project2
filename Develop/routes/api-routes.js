// Requiring our Todo model
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // POST route for saving a new post
  app.post("/api/posts", (req, res) => {
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      category: req.body.category,
      severity: req.body.severity,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      description: req.body.description,
      actionRequired: req.body.actionRequired
    }).then(dbPost => {
      res.json(dbPost);
    });
  });
};
