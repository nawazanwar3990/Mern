const database = require("../models");

exports.store = (req, res) => {

  database.collections.COMMENT
    .create({
      description: req.body.description,
      user: req.body.user,
      post:req.body.post
      
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
  const populatedQuery = [
      {
        path:'user',
        select:'firstName lastName'
      },{
        path:'post',
        select:'name'
      }
  ];
  await database.collections.COMMENT.find({})
    .populate(populatedQuery)
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

