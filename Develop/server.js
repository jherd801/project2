// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const fs = require("fs")
const https = require("https")
const path = require("path")
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;
const server = https.createServer(app)
server.listen(PORT, => {
  console.log("Server listening on: http://localhost:" + PORT);
});
// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================

// const server = https.createServer(app)
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });
