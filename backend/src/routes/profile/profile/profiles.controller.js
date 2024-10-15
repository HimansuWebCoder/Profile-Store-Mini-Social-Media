const { profilesModel } = require("../../../models/profile.model");

function getProfiles(req, res, db) {
	profilesModel().then((data) => {
		return res.json(data);
	});
}

module.exports = {
	getProfiles,
};
