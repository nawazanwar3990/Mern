const database = require("../models");

exports.store = (req, res) => {

  database.collections.VENDOR
    .create({
      firstname: req.body.firstname,
      lastname:req.body.lastname,
      description:req.body.description,
      country:req.body.country,
      state:req.body.state,
      city:req.body.city,
      cell_phone_1:req.body.cell_phone_1,
      cell_phone_2:req.body.cell_phone_2,
      cell_phone_3:req.body.cell_phone_3


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
  await database.collections.VENDOR.find({})
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