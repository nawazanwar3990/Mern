const { authentication } = require("../middlewares/jwt");
module.exports = app => {

    const categoryController = require("../controllers/categoryController");
    var router = require("express").Router();
          router.post("/category/create",[authentication], categoryController.store);
          router.get("/categories",[authentication], categoryController.findAll);
          router.get("/categories/:id",[authentication], categoryController.findOne);
          router.put("/categories/:id",[authentication], categoryController.update);
          router.delete("/categories/:id",[authentication], categoryController.delete);
    app.use('/api', router);
};