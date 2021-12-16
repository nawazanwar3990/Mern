const user = require("./user");

module.exports = mongoose => {
    return mongoose.model(
      "posts",
      mongoose.Schema(
        {
          name: String,
          rollNum:String,
          user: {
            type:mongoose. Schema.Types.ObjectId,
            ref: 'users',
          },
        },
        
        { timestamps: true }
      )
    );
  
  };