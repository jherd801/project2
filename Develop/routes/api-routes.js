// Requiring our model
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the posts
  app.get("/api/hazards/", (req, res) => {
    db.Post.findAll({}).then(hazardReports => {
      res.json(hazardReports);
    });
  });
  // POST route for saving a new hazard reoort
  app.post("/api/hazards/", (req, res) => {
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      category: req.body.category,
      severity: req.body.severity,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      description: req.body.description,
      actionRequired: req.body.actionRequired
    }).then(hazardReports => {
      res.json(hazardReports);
    });
  });
};
