require('./user');
module.exports = mongoose => {
    return mongoose.model(
        "categories",
        mongoose.Schema(
            {
                name: {
                    type: String,
                },
                description: { 
                    type: String,
                 },
                 parent_id: { 
                    type: String,
                 },
                 order: { 
                    type: String,
                 },
                 user: {
                    type:mongoose. Schema.Types.ObjectId,
                    ref: 'users',
                  },
            },

            { timestamps: true }
        )
    );


};