const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        fname: { type: String },
        lname: { type: String },
        email: { type: String, unique: true },
        password: { type: String },
        contact: { type: String },
        profile_photo: { type: String },
        provider: { type: String },
    },
    { timestamps: true }
);
module.exports = mongoose.model("users", userSchema);
