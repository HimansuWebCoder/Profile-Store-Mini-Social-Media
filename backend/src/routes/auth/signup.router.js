const express = require("express");
const { signup } = require("../../controllers/auth/signup.controller");
const db = require("../../config/db");
const signupRouter = express.Router();

// POST user signup
signupRouter.post("/", (req, res) => {
	signup(req, res, db);
});

module.exports = signupRouter;
