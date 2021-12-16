const database = require("../models");

exports.store = (req, res) => {

  database.collections.POST
    .create({
      name: req.body.name,
      rollNum: req.body.rollNum,
      user: req.body.user
      
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
  await database.collections.POST.find({})
    .populate('user')
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


exports.findOne = async (req, res) => {
  const id = req.params.id;

  await database.collections.POST.findById(id)
  .populate('user')
  .exec()
    .then(data => {
      if (!data)
        res.status(404).send({ user: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ user: "Error retrieving Tutorial with id=" + id });
    });
};

exports.update =async (req, res) => {
  const id = req.params.id;
  await database.collections.POST.findByIdAndUpdate(id, req.body)
  .populate('user')
  .exec()
  .then(data => {
    res.send({ user: "updated successfully." });
  })
  .catch(err => {
    res.status(500).send({
      user: "Error updating Tutorial with id=" + id
    });
  });
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  await database.collections.POST.findByIdAndRemove(id, req.body)
  .populate('user')
  .exec()
  .then(data => {
    res.send({ user: "delete successfully." });
  })
  .catch(err => {
    res.status(500).send({
      user: "Error updating Tutorial with id=" + id
    });
  });
};
