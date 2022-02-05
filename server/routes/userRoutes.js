const express = require("express");
const routes = express.Router();
const details = require("../controllers/userController");

routes.post("/register", details.register);
routes.post("/login", details.login);

module.exports = routes;
