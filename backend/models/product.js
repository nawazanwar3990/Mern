require("../models/category");
require("../models/user");
module.exports = mongoose => {
  return mongoose.model(
    "products",
    mongoose.Schema(
      {

        name: {
          type: String,
          required: true
        },
        description: {
          type: String
        },
        model: {
          type: String
        },
        sku: {
          type: String
        },
        upc: {
          type: String
        },
        ean: {
          type: String
        },
        location: {
          type: String
        },
        price: {
          type: String
        },
        quantity: {
          type: String
        },
        minimum_quantity: {
          type: String
        },
        order: {
          type: String
        },
        weight: {
          type: String
        },
        hieght: {
          type: String
        },
        length: {
          type: String
        },
        
      },
      {
         timestamps: true }
    )
  );


};