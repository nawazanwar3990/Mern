module.exports = mongoose => {
    return mongoose.model(
        "incomes",
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