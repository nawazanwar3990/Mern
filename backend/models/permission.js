const USER = require("../models/user")
module.exports = mongoose => {
    return mongoose.model(
        "permissions",
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