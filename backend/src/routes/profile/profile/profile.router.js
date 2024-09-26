const express = require("express");
const db = require("../../../config/db");
const { getProfiles } = require("./profile.controller");
const profileRouter = express.Router();

profileRouter.post("/", (req, res) => {
	registerProfile(req, res, db);
});

// GET profiles details
profileRouter.get("/", (req, res) => {
	getProfiles(req, res, db);
});

module.exports = profileRouter;
