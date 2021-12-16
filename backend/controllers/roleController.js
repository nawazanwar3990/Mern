const database = require("../models");

exports.store = (req, res) => {

  database.collections.ROLE
    .create({
      name: req.body.name,
      description: req.body.description

    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


exports.findAll = async (req, res) => {
  await database.collections.ROLE.find({})
    .populate()
    .exec()
  
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};