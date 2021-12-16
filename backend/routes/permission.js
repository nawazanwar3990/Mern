const { authentication } = require("../middlewares/jwt");
module.exports = app => {


  const permissionController = require("../controllers/permissionController");
  var router = require("express").Router();
  router.post("/permission/create",[authentication],permissionController.store);
  router.get("/permissions",[authentication],permissionController.findAll);

  

  app.use('/api', router);
};