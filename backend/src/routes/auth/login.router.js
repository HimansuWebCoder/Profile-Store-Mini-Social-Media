const express = require("express");
const { login } = require("../../controllers/auth/login.controller");
const db = require("../../config/db");
const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
	login(req, res, db);
});

module.exports = loginRouter;
