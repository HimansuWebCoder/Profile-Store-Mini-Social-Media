const db = require("../../config/db");

function getProfiles(req, res, db) {
	db.select("*")
		.from("profiles")
		.then((data) => {
			return res.json(data);
		});
}

// GET Profile's Photo
function getProfilePhoto(req, res, db) {
	// db("profile_photo")
	// 	.returning("*")
	// 	.then((data) => {
	// 		res.json(data);
	// 	})
	db.select("*")
		.from("profile_photo")
		.then((data) => {
			if (data.length !== 0) {
				// either > 0 or !== 0
				return res.status(200).json(data);
			} else {
				return res
					.status(404)
					.json({ Error: "profile photo not found" });
			}
		})
		.catch((error) => {
			console.error(
				`Error happend retrieved profile_photo from DB: ${error}`,
			);
			return res.status(500).json({
				Error: "Internal Server Error",
			});
		});

	// 	db("profile_photo")
	// 		.join("profiles", "profile_photo.profile_id", "profiles.id")
	// 		.select("*")
	// 		.then((data) => {
	// 			if (data.length !== 0) {
	// 				return res.status(200).json(data);
	// 			} else {
	// 				return res.status(404).json({ Error: "profile photo not found" });
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			console.error(`Failed to retrieve Data: ${error}`);
	// 			return res.status(500).json({ error: "Internal Server Error" });
	// 		});
}

// UPDATE Profile's Photo
function editProfilePhoto(req, res, db) {
	// const id = req.params.profilePhotoId;
	const { profilePhotoId } = req.params;
	const { image, profileId } = req.body;

	if (!image || !profileId) {
		return res
			.status(400)
			.json({ Error: "image or profileId is required" });
	}

	db("profile_photo")
		.where({ id: profilePhotoId, profile_id: profileId })
		.update({ image: image })
		.returning("*")
		.then((data) => {
			if (data.length > 0) {
				// or data.length !== 0 must not be zero either > 0 or !== 0
				return res.status(200).json({
					message: "Profile photo updated successfully",
					data: data,
				});
			} else {
				return res.status(404).json({
					Error: "Profile photo not found to update",
				});
			}
		})
		.catch((error) => {
			console.error(
				`Error occurred updating image in profile_photo from DB: ${error}`,
			);
			return res.status(500).json({
				Error: "Internal Server Error",
			});
		});
}

// GET Profile's Information
function getProfileInfo(req, res, db) {
	db("profile_info")
		.returning("*")
		.then((profileInfoData) => {
			if (profileInfoData.length !== 0) {
				// or > 0
				return res.status(200).json(profileInfoData);
			} else {
				return res.status(404).json({
					Error: "profile information data not found",
				});
			}
		})
		.catch((error) => {
			console.error(
				`Error occurred retrieved data from profile_info: ${error}`,
			);
			return res.status(500).json({
				Error: "Internal Server Error",
			});
		});
}

// UPDATE Profile's Information
function editProfileInfo(req, res, db) {
	const { name, headline } = req.body;
	const id = req.params.profileInfoId;

	if (!name || !headline) {
		return res.status(400).json({ Error: "name & headline are needed" });
	}

	db("profile_info")
		.update({ name: profile_name, headline: profile_headline })
		.where({ id: id })
		.then((profileInfoData) => {
			if (profileInfoData.length > 0) {
				return res.status(200).json({
					message: "profile information data successfully updated",
					data: profileInfoData,
				});
			} else {
				return res.status(404).json({
					Error: "profile info not found to update",
				});
			}
		})
		.catch((error) => {
			console.error(`error in profile_info update data: ${error}`);
			return res.status(500).json({
				Error: "Internal Server Error",
			});
		});
}

module.exports = {
	getProfilePhoto,
	editProfilePhoto,
	getProfileInfo,
	editProfileInfo,
	getProfiles,
};
