const { authentication } = require("../middlewares/jwt");
module.exports = app => {


  const userController = require("../controllers/userController");
  var router = require("express").Router();
  router.post("/user/create",[authentication],userController.store);
  router.get("/users",[authentication],userController.findAll);

  

  app.use('/api', router);
};