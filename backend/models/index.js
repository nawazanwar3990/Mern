const mongoose = require("mongoose");


const database = {
    connection: mongoose,
    collections: {
        USER: require("./user.js")(mongoose),
        PRODUCT: require("./product.js")(mongoose),
        ROLE: require("./role.js")(mongoose),
        CATEGORY: require("./category.js")(mongoose),
        POST: require("./post.js")(mongoose),
        COMMENT:require("./comment.js")(mongoose),
        EXPENSE:require("./expense.js")(mongoose),
        INCOME:require("./income.js")(mongoose),
        VENDOR:require("./vendor.js")(mongoose),
        PERMISSION:require("./permission.js")(mongoose)

    },
};

module.exports = database;