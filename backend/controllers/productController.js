const database = require("../models");

exports.store = (req, res) => {
  database.collections.PRODUCT
    .create({
      name: req.body.name,
      description: req.body.description,
      model: req.body.model,
      sku: req.body.sku,
      upc: req.body.upc,
      ean: req.body.ean,
      location: req.body.location,
      price: req.body.price,
      quantity: req.body.quantity,
      minimum_quantity: req.body.minimum_quantity,
      order: req.body.order,
      weight: req.body.weight,
      hieght: req.body.hieght,
      length: req.body.length
    
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
  
  await database.collections.PRODUCT.find({})

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
//findOne
exports.findOne = async (req, res) => {
  const id = req.params.id;
  const populatedQuery = [
    {
      path:'category',
      select:'name '
    },{
      path:'user',
      select:'firstname'
    }
];

  await database.collections.PRODUCT.findById(id)
  .populate(populatedQuery)
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

//update

exports.update =async (req, res) => {
  const id = req.params.id;
  await database.collections.PRODUCT.findByIdAndUpdate(id, req.body)
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

//delete

exports.delete = async (req, res) => {
  const id = req.params.id;
  await database.collections.PRODUCT.findByIdAndRemove(id, req.body)
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

