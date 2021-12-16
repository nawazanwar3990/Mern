const USER = require("../models/user")
module.exports = mongoose => {
    return mongoose.model(
        "roles",
        mongoose.Schema(
            {
                name: {
                    type: String,
                    unique: true,
                    required: true
                },
                description: { 
                    type: String
                 },
                users: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: USER
                    }
                ],
            },

            { timestamps: true }
        )
    );


};