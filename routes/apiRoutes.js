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
  // app.post("/newres", function(req, res) {
  //   // create takes an argument of an object describing the item we want to insert
  //   // into our table. In this case we just we pass in an object with a text and
  //   // complete property
  //   db.User.create({
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     phoneNumber: req.body.phoneNumber,
  //     email: req.body.email,
  //     address: req.body.address,
  //     city: req.body.city,
  //     state: req.body.state,
  //     zip: req.body.zip,
  //     groupSize: req.body.groupSize,
  //     preferedDate: req.body.preferedDate,
  //     preferedTime: req.body.preferedTime,
  //     TimeId: req.body.TimeId
  //   }).then(function(dbUser) {
  //     defaultUserID = dbUser.dataValues.id;
  //     db.Reserves.create({
  //       resDate: req.body.resDate,
  //       resTime: req.body.resTime,
  //       groupsize: req.body.groupSize,
  //       UserId: defaultUserID
  //     }).then(function(dbReserves) {
  //       // We have access to the new todo as an argument inside of the callback function
  //       res.json(dbReserves);
  //     });
  //   });
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
