const db = require("../../config/db");

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
				res.status(200).json(data);
			} else {
				res.status(404).json({ status: "profile photo not found" });
			}
		})
		.catch((err) => {
			console.error(
				`Error happend retrieved profile_photo from DB: ${err}`,
			);
			res.status(500).json({
				error: "Error occurred retrieved profile_photo data from DB",
			});
		});

	// 	db("profile_photo")
	// 		.join("profiles", "profile_photo.profile_id", "profiles.id")
	// 		.select("*")
	// 		.then((data) => {
	// 			if (data.length !== 0) {
	// 				res.status(200).json(data);
	// 			} else {
	// 				res.status(404).json({ status: "profile photo not found" });
	// 			}
	// 		})
	// 		.catch((err) => {
	// 			console.error(`Failed to retrieve Data: ${err}`);
	// 			res.status(500).json({ error: "Failed to retrieve data" });
	// 		});
}

// UPDATE Profile's Photo
function editProfilePhoto(req, res, db) {
	const { image } = req.body;
	const id = req.params.profilePhotoId;

	if (!image) {
		res.status(400).json({ error: "image is required" });
	}

	db("profile_photo")
		.where({ id: id })
		.update({ image: image })
		.returning("*")
		.then((data) => {
			if (data.length > 0) {
				// or data.length !== 0 must not be zero either > 0 or !== 0
				res.status(200).json({
					message: "Profile photo updated successfully",
					data: data,
				});
			} else {
				res.status(404).json({
					error: "Profile photo not found to update",
				});
			}
		})
		.catch((error) => {
			console.error(
				`Error occurred updating image in profile_photo from DB: ${error}`,
			);
			res.status(409).json({
				error: "Conflict during update",
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
				res.status(200).json(profileInfoData);
			} else {
				res.status(404).json({
					error: "profile information data not found",
				});
			}
		})
		.catch((err) => {
			console.error(
				`Error occurred retrieved data from profile_info: ${err}`,
			);
			res.status(500).json({
				error: "Error occurred retrieved data from profile_info",
			});
		});
}

// UPDATE Profile's Information
function editProfileInfo(req, res, db) {
	const { name, headline } = req.body;
	const id = req.params.profileInfoId;

	if (!name || !headline) {
		res.status(400).json({ error: "name & headline are needed" });
	}

	db("profile_info")
		.update({ name: profile_name, headline: profile_headline })
		.where({ id: id })
		.then((profileInfoData) => {
			if (profileInfoData.length > 0) {
				res.status(200).json({
					message: "profile information data successfully updated",
					data: profileInfoData,
				});
			} else {
				res.status(404).json({
					error: "profile info not found to update",
				});
			}
		})
		.catch((error) => {
			console.error(`error in profile_info update data: ${error}`);
			res.status(409).json({
				error: "Conflict during update",
			});
		});
}

module.exports = {
	getProfilePhoto,
	editProfilePhoto,
	getProfileInfo,
	editProfileInfo,
};
