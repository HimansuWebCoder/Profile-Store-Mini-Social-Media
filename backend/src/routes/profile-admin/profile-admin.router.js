const express = require("express");
const {
	getProfilePhoto,
	editProfilePhoto,
	getProfileInfo,
	editProfileInfo,
} = require("../../controllers/profile-admin/profile-admin.controller");
const db = require("../../config/db");
const profileAdminRouter = express.Router();

profileAdminRouter.post("/profiles", (req, res) => {
	registerProfile(req, res, db);
});
// GET profiles details
profileAdminRouter.get("/profiles", (req, res) => {
	getProfiles(req, res, db);
});

// GET profile-photo
profileAdminRouter.get("/profile_photo", (req, res) => {
	getProfilePhoto(req, res, db);
});

// GET profile-info
profileAdminRouter.get("/profile_info", (req, res) => {
	getProfileInfo(req, res, db);
});

// UPDATE profile-photo
profileAdminRouter.put("/:profilePhotoId/profile_photo", (req, res) => {
	editProfilePhoto(req, res, db);
});

// UPDATE profile-info
profileAdminRouter.put("/:profileInfoId/profile_info", (req, res) => {
	editProfileInfo(req, res, db);
});

module.exports = profileAdminRouter;
