// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");


module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });

  app.get("/blogish", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/blogish.html"));
  });

  app.get("/weightish", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/weightish.html"));
  });

  app.get("/adviceish", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/adviceish.html"));
  });

  app.get("/briannaisms", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/briannaisms.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });

};
