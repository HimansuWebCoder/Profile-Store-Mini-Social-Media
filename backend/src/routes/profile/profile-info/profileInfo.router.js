const express = require("express");
const db = require("../../../config/db");
const {
	getProfileInfo,
	editProfileInfo,
	getOneProfileInfo,
} = require("./profileInfo.controller");
const profileInfoRouter = express.Router();

// GET profile-info
profileInfoRouter.get("/", (req, res) => {
	getProfileInfo(req, res, db);
});

// UPDATE profile-info
profileInfoRouter.put("/:id", (req, res) => {
	editProfileInfo(req, res, db);
});

profileInfoRouter.get("/:id", (req, res) => {
	getOneProfileInfo(req, res, db);
});

module.exports = profileInfoRouter;
