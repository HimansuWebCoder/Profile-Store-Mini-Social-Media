const {
	profileInfoGetModel,
	editProfileInfoModel,
	getOneProfileInfoModel,
} = require("../../../models/profileInfo.model");

// GET One Profile's Information
function getOneProfileInfo(req, res) {
	const { id } = req.params;
	getOneProfileInfoModel(id)
		.then((profileInfoData) => {
			// or > 0
			if (profileInfoData.length !== 0) {
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

// GET Profile's Information
function getProfileInfo(req, res) {
	profileInfoGetModel()
		.then((profileInfoData) => {
			// or > 0
			if (profileInfoData.length !== 0) {
				console.log("my profile info", profileInfoData[0].name);
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
function editProfileInfo(req, res) {
	const { name, headline } = req.body;
	const { id } = req.params;
	console.log(id);
	if (!name || !headline) {
		return res.status(400).json({ Error: "name & headline are needed" });
	}

	editProfileInfoModel(id, name, headline)
		.then((profileInfoData) => {
			if (profileInfoData.length > 0) {
				return res.status(200).json({
					success: true,
					message: "profileInfo updated successfully",
					data: profileInfoData,
				});
			} else {
				return res.status(404).json({
					success: false,
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
	getOneProfileInfo,
};
