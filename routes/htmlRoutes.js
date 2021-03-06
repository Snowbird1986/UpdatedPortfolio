var db = require("../models");
const Op = db.Sequelize.Op

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      // console.log(dbUser)
      res.render("index", {
        user: dbUser,
      });
    });
  });

  // Load example page and pass in an example by email
  app.get("/portfolio", function(req, res) {
    db.Project.findAll({order:[['id', 'DESC'],]}).then(function(
      dbProjects
    ) {
      // console.log(dbUser)
      res.render("portfolio", {
        project: dbProjects
      });
    });
  });
  // Load example page and pass in an example by email
  app.get("/contact", function(req, res) {
    db.User.findAll({}).then(function(
      dbUser
    ) {
      console.log(dbUser)
      res.render("contact", {
        user: dbUser
      });
    });
  });
  app.get("/resume", function(req, res) {
    db.User.findAll({}).then(function(
      dbUser
    ) {
      console.log(dbUser)
      res.render("resume", {
        user: dbUser
      });
    });
  });
  app.get("/login", function(req, res) {
    db.Login.findAll({}).then(function(
      dbLogin
    ) {
      console.log(dbLogin)
      res.render("login", {
        user: dbLogin
      });
    });
  });
  app.get("/newproject", function(req, res) {
    db.Project.findAll({}).then(function(
      dbProjects
    ) {
      console.log(dbProjects)
      res.render("submission", {
        project: dbProjects
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
