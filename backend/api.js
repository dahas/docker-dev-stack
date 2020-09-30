var events = require('./events.js');

exports.events = function (req, res) {
  res.json(events);
};

exports.event = function (req, res) {
  res.json(events[req.param.eventId]);

  // var mysql = require('mysql');
  // var db = mysql.createConnection({
  //   host: 'db',
  //   user: 'root',
  //   password: ''
  // });

  // db.connect(function (err) {
  //   if (err) {
  //     console.log("Connection failed!", err);
  //   } else {
  //     console.log("Connected!");
  //   }
  // });
};