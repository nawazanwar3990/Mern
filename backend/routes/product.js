const { authentication } = require("../middlewares/jwt");

module.exports = app => {

      const productController = require("../controllers/productController");
      var router = require("express").Router();
      router.get("/products/:id",[authentication],productController.findOne);
      router.get("/products",[authentication],productController.findAll);
      router.post("/product/create",[authentication],productController.store);
      router.put("/products/:id",[authentication],productController.update);
      router.delete("/products/:id",[authentication],productController.delete);
      

      app.use('/api', router);
  };