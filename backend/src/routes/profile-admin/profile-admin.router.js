const express = require("express");
const {
	getProfilePhoto,
	editProfilePhoto,
	getProfileInfo,
	editProfileInfo,
	getProfiles,
} = require("../../controllers/profile-admin/profile-admin.controller");
const db = require("../../config/db");
const profileAdminRouter = express.Router();

// GET profiles details

profileAdminRouter.get("/profiles", (req, res) => {
	getProfiles(req, res, db);
});

// GET profile-photo
profileAdminRouter.get("/profilePhotoId/profile-photo", (req, res) => {
	getProfilePhoto(req, res, db);
});

// GET profile-info
profileAdminRouter.get("/profileInfoId/profile-info", (req, res) => {
	getProfileInfo(req, res, db);
});

// UPDATE profile-photo
profileAdminRouter.put("/profilePhotoId/profile-photo", (req, res) => {
	editProfilePhoto(req, res, db);
});

// UPDATE profile-info
profileAdminRouter.put("/profileInfoId/profile-info", (req, res) => {
	editProfileInfo(req, res, db);
});

module.exports = profileAdminRouter;
