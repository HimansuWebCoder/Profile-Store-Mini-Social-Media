const express = require("express");
const db = require("../../../config/db");
const {
	getProfilePhoto,
	editProfilePhoto,
} = require("./profile-photo.controller");
const profilePhotoRouter = express.Router();

const ensureAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
};

// GET profile-photo
profilePhotoRouter.get("/", ensureAuthenticated, (req, res) => {
	getProfilePhoto(req, res, db);
});

// UPDATE profile-photo
profilePhotoRouter.put("/:id", (req, res) => {
	editProfilePhoto(req, res, db);
});

module.exports = profilePhotoRouter;
