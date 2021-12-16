module.exports = app => {

    const postController = require("../controllers/postController");
    var router = require("express").Router();
          router.post("/posts", postController.store);
          router.get("/posts", postController.findAll);
          router.get("/posts/:id", postController.findOne);
          router.put("/posts/:id", postController.update);
          router.delete("/posts/:id", postController.delete);
    app.use('/api', router);
};