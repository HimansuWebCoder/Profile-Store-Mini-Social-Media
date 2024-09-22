const db = require("../../config/db");

function getProfilePhoto(req, res, db) {
	res.send("get profile photo");
}

function editProfilePhoto(req, res, db) {
	res.send("update profile photo");
}

function getProfileInfo(req, res, db) {
	res.send("get profile info");
}

function editProfileInfo(req, res, db) {
	res.send("Update profile info");
}

module.exports = {
	getProfilePhoto,
	editProfilePhoto,
	getProfileInfo,
	editProfileInfo,
};
