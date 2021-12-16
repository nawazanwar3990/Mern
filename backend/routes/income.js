const { authentication } = require("../middlewares/jwt");
module.exports = app => {


  const incomeController = require("../controllers/incomeController");
  var router = require("express").Router()
  router.post("/income/create",[authentication],incomeController .store);
  router.get("/incomes",[authentication],incomeController .findAll)

  

  app.use('/api', router);
};