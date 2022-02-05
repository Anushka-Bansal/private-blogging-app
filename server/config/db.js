const mongoose = require("mongoose");

const db = "mongodb://localhost:27017/Blog";
const connectDB = () => {
    try {
        mongoose.connect(db, { useNewUrlParser: true });
        console.log("MongoDb Connected");
    } catch (err) {
        console.log(err.message);
    }
};
module.exports = connectDB;
