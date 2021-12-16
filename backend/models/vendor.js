module.exports = mongoose => {
    return mongoose.model(
      "vendor",
      mongoose.Schema(
        {
          firstname: {
            type: String,
  
          },
          lastname: {
            type: String,
  
          } ,
          description: {
            type: String,
  
          },
          country: {
            type: String,
  
          },
          state: {
            type: String,
  
          },
          city: {
            type: String,
  
          },
          cell_phone_1: {
            type: String,
  
          },
          cell_phone_2: {
            type: String,
  
          },
          cell_phone_3: {
            type: String,
  
          },
              
        },
        {
          timestamps: true
        }
      )
    )
  };