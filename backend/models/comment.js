const user = require("./user");
const post = require("./post");
module.exports = mongoose => {
    return mongoose.model(
      "comments",
      mongoose.Schema(
        {
          description: String,
          
          user: {
            type:mongoose. Schema.Types.ObjectId,
            ref: 'users',
          },
          post: {
            type:mongoose. Schema.Types.ObjectId,
            ref: 'posts',
          },
        },
        
        { timestamps: true }
      )
    );
  
  };