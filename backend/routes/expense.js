const { authentication } = require("../middlewares/jwt");
module.exports = app => {


  const expenseController = require("../controllers/expenseController");
  var router = require("express").Router()
  router.post("/expense/create",[authentication],expenseController.create);
  router.get("/expenses",[authentication],expenseController.findAll)

  

  app.use('/api', router);
};