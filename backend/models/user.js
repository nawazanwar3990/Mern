module.exports = mongoose => {
  return mongoose.model(
    "users",
    mongoose.Schema(
      {
        firstname: {
          type: String,

        },
        lastname: {
          type: String,

        },

        email: {
          type: String,
        },
        password: {
          type: String,

        }
      },
      {
        timestamps: true
      }
    )
  )
};