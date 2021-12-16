module.exports = app => {

    const commentController = require("../controllers/commentController");
    var router = require("express").Router();
          router.post("/comments", commentController.store);
          router.get("/comments", commentController.findAll);
         
    app.use('/api', router);
};