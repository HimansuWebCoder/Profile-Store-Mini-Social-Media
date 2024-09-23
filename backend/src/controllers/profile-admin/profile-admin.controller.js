const db = require("../../config/db");

function getProfiles(req, res, db) {
	// db("profiles")
	// 	.returning("*")
	// 	.then((profileData) => {
	// 		res.json(profileData);
	// 	});

	db("images") // primary table (images)
		.join("profiles", "images.profile_id", "profiles.id") // first secondary table whom to join, then primary table's primary key then secondary table foreign key
		.select("images.image_url") // select what you want from column but for now I want only image_url
		.then((data) => {
			res.json(data);
		});
}

function getProfilePhoto(req, res, db) {
	res.send("get profile photo");
	// db("profiles")
	// 	.returning("*")
	// 	.then((data) => {
	// 		res.json(data);
	// 	});
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
	getProfiles,
};
