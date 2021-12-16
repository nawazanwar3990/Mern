const { authentication } = require("../middlewares/jwt");
module.exports = app => {


  const roleController = require("../controllers/roleController");
  var router = require("express").Router();
  router.post("/role/create",[authentication],roleController.store);
  router.get("/roles",[authentication],roleController.findAll);

  

  app.use('/api', router);
};