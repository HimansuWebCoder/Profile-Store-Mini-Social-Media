const db = require("../../../config/db");

// GET Profile's Information
function getProfileInfo(req, res, db) {
	db("profile_info")
		.returning("*")
		.then((profileInfoData) => {
			// or > 0
			if (profileInfoData.length !== 0) {
				console.log(profileInfoData);
				return res.status(200).json(profileInfoData);
			} else {
				return res.status(404).json({
					Error: "profile information data not found",
				});
			}
		})
		.catch((error) => {
			console.error(
				`Error occurred retrieved data from profile_info: ${error.stack} || ${error.message} ${error}`,
			);
			return res.status(500).json({
				Error: "Internal Server Error",
			});
		});
}

// UPDATE Profile's Information
function editProfileInfo(req, res, db) {
	const { name, headline } = req.body;
	const { id } = req.params;
	console.log(id);
	if (!name || !headline) {
		return res.status(400).json({ Error: "name & headline are needed" });
	}

	db("profile_info")
		.update({ name, headline })
		.where({ id })
		.returning("*")
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
	getProfileInfo,
	editProfileInfo,
};
