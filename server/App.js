//load app dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.NODE_ENV || 8877;
const app = express();
const connectDB = require("./config/db");

//load app middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//mongodb connection
connectDB();

//load our API routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

//establish hhtp server connection
app.listen(PORT, (err) => {
    if (err) throw err;
    else {
        console.log(`Working on port ${PORT}`);
    }
});
