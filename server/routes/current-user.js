var express = require('express');

module.exports = function(app) {
  var currentUserRouter = express.Router();
  currentUserRouter.get('/', function(req, res) {
    res.status(200).send({user:{'id':'1', 'firstname': 'foo', 'lastname': 'bar'}});
  });
  app.use('/api/current_user', currentUserRouter);
};
