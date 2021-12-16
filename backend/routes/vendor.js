const { authentication } = require("../middlewares/jwt");
module.exports = app => {


  const vendorController = require("../controllers/vendorController");
  var router = require("express").Router();
  router.post("/vendor/create",[authentication],vendorController.store);
  router.get("/vendors",[authentication],vendorController .findAll);

  

  app.use('/api', router);
};