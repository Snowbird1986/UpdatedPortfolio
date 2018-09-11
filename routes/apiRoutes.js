var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // Create a new example
  // app.get("/user/reservationcheck/:email", function(req, res) {
  //   db.User.findOne({ where: { email: req.params.email } }).then(function(
  //     dbUser
  //   ) {
  //     res.json(dbUser);
  //   });
  // });
  app.post("/newproj", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a text and
    // complete property
    db.Project.create({
      projectName: req.body.projectName,
      link: req.body.link,
      alt: req.body.alt,
      title: req.body.title,
      img: req.body.img,
      UserId: req.body.UserId
    }).then(function(dbProject) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbProject);
    });
  });
  //   // db.Reserves.create({
  //   //   resDate: req.body.resDate,
  //   //   resTime: req.body.resTime,
  //   //   groupsize: req.body.groupSize,
  //   //   UserId: req.body.UserID
  //   // }).then(function(dbReserves) {
  //   //   // We have access to the new todo as an argument inside of the callback function
  //   //   res.json(dbReserves);
  //   // });
  // });
  // app.get("/newres/:id", function(req, res) {
  //   db.Times.findOne({ where: { id: req.params.id } }).then(function(dbTimes) {
  //     res.json(dbTimes);
  //   });
  // });
  // app.get("/times2/:TimeId", function(req, res) {
  //   db.Times.findAll({
  //     where: {
  //       id: req.params.TimeId
  //     }
  //   }).then(function(dbTimes) {
  //     res.json(dbTimes);
  //   });
  // });
};
