module.exports = mongoose => {
    return mongoose.model(
        "expenses",
        mongoose.Schema(
            {
                name: {
                    type: String,
                },
                value: { 
                    type: String
                 },
               
            },

            { timestamps: true }
        )
    );


};