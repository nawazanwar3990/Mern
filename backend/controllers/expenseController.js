const database = require("../models");


exports.create = (req, res) => {

  database.collections.EXPENSE
    .create({
      name: req.body.name,
      value: req.body.value
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


exports.findAll =async (req, res) => {
  
  await database.collections.EXPENSE.find({})
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