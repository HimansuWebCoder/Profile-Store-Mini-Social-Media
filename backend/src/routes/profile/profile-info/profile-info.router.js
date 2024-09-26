const express = require("express");
const db = require("../../../config/db");
const {
	getProfileInfo,
	editProfileInfo,
} = require("./profile-info.controller");
const profileInfoRouter = express.Router();

// GET profile-info
profileInfoRouter.get("/", (req, res) => {
	getProfileInfo(req, res, db);
});

// UPDATE profile-info
profileInfoRouter.put("/:id", (req, res) => {
	editProfileInfo(req, res, db);
});

module.exports = profileInfoRouter;
